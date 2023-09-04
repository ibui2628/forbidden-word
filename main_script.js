var kdata = {};
kdata.fw_data = { word: "", exclusion: "" };
chrome.storage.local.get(kdata, function (getdata) {
    var ch = true;
    const bodydata = document.body.innerHTML;
    const or = bodydata.match(new RegExp(getdata.fw_data.word, "g"));
    const url = location.hostname;
    var exc = getdata.fw_data.exclusion;
    exc = exc.split('|')
    console.log("hostname:" + url);
    for (const nai of exc) {
        console.log(nai);
        if (url == nai) {
            ch = false;
        }
    }
    console.log(ch);
    if (or != null && ch) {
        document.body.innerHTML = '<div style="background:yellow;text-align:center;padding:5px;"><h1>表示をブロックしました</h1><p>このサイトは禁止ワードが含まれているため表示をブロックしました</p><p>検出された禁止ワード:' + or + '</p><br>アクセスしたい場合はこの拡張機能を無効化してください</p><a class="19clm1dnxr" href="javascript:history.back();">戻る</a></div>';
    }
});
