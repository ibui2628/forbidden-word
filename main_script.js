const url = location.hostname;
console.log('hostname:' + url);

const cehk = (g_data) => {
    //console.log(g_data);
    var ch = true;
    const bodydata = document.body.innerHTML;
    const or = bodydata.match(new RegExp(g_data.word, "g"));
    var exc = g_data.exclusion;
    exc = exc.split('|');
    for (const nai of exc) {
        if (url == nai) {
            ch = false;
        }
    }
    if (or != null && ch) {
        document.body.innerHTML = '<style>html,body{background:yellow!important; font-family:sans-serif; color:black!important;}</style><div style="background:yellow;text-align:center;padding:5px;"><h1>表示をブロックしました</h1><p>以下のサイトはは禁止ワードが含まれているため表示をブロックしました</p><p>' + location.href + '</p><p>検出された禁止ワード:"' + or + '"</p><br>アクセスしたい場合はこの拡張機能を無効化してください</p><a class="19clm1dnxr" href="javascript:history.back();"><<戻る</a></div>';
        g_data.rigor = 'none';
    }
    if (g_data.rigor == 'low') {
        window.setTimeout(() => {
            cehk(g_data);
        }, 5000);
    }
}

window.setTimeout(function () {
    var kdata = {};
    kdata.fw_data = { word: '', exclusion: '', rigor: 'none' };
    kdata.power = true;
    chrome.storage.local.get(kdata, function (getdata) {
        if (getdata.fw_data.word != '' && getdata.power) {
            cehk(getdata.fw_data);
        } else {
            console.log('forbidden-word off');
        }
    });
}, 500);