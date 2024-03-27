//var a = chrome.runtime.id;
const noword = document.getElementById("noword");
const noexclusion = document.getElementById("noexclusion");
const rigor = document.getElementById("rigor");
document.getElementById("ge").addEventListener("click", ge);

var ydata = {};
ydata.fw_data = { word: '', exclusion: '', rigor: 'none' };
chrome.storage.local.get(ydata, function (getdata) {
    console.log("word:" + getdata.fw_data.word);
    console.log("exclusion:" + getdata.fw_data.exclusion);
    noword.value = getdata.fw_data.word;
    noexclusion.value = getdata.fw_data.exclusion;
    rigor.value = getdata.fw_data.rigor;
});

function ge() {
    var kdata = {};
    const word = noword.value;
    const noexclusion2 = noexclusion.value;
    const rigord = rigor.value;
    kdata.fw_data = {word: word, exclusion: noexclusion2, rigor: rigord};
    chrome.storage.local.set(kdata, function () {
        alert("設定を反映しました");
    });
}