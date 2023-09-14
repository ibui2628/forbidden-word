window.addEventListener("DOMContentLoaded", function() {
    window.setTimeout(function(){
        var kdata = {};
        kdata.fw_data = { word: "", exclusion: "" };
        chrome.storage.local.get(kdata, function (getdata) {
            const url = location.hostname;
            console.log("hostname:" + url);
            if (getdata.fw_data.word != '') {
                var ch = true;
                const bodydata = document.body.innerHTML;
                const or = bodydata.match(new RegExp(getdata.fw_data.word, "g"));
                var exc = getdata.fw_data.exclusion;
                exc = exc.split('|')
                for (const nai of exc) {
                    if (url == nai) {
                        ch = false;
                    }
                }
                if (or != null && ch) {
                    document.body.innerHTML = '<style>html{background:yellow;font-family:sans-serif;color:black;}</style><div style="background:yellow;text-align:center;padding:5px;"><h1>表示をブロックしました</h1><p>以下のサイトはは禁止ワードが含まれているため表示をブロックしました</p><p>' + location.href + '</p><p>検出された禁止ワード:"' + or + '"</p><br>アクセスしたい場合はこの拡張機能を無効化してください</p><a class="19clm1dnxr" href="javascript:history.back();"><<戻る</a></div>';
                }
            } else {
                console.warn("forbidden-word off");
            }
        });
    }, 1000);
})