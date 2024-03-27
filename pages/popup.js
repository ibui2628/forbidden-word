const pl = document.getElementById('powerlamp');
document.getElementById("opbtn").addEventListener("click", () => {
    chrome.runtime.openOptionsPage();
});

var kdata = {};
kdata.fw_data = { word: "", exclusion: "" };
kdata.power = true;
chrome.storage.local.get(kdata, (data)=>{
    var bpower = Boolean(data.power);
    plset(bpower);
    document.getElementById('of').addEventListener("click", ()=>{
        if (!bpower) {
            bpower = true;
        }else{
            bpower = false;
        }
        data.power = bpower;
        chrome.storage.local.set(data, ()=> {
            plset(bpower);
        });
    });
});

function plset(pli){
    if (pli) {
        pl.innerHTML = '<span class="on">ON</span>'
    }else{
        pl.innerHTML = '<span class="off">OFF</span>'
    }
}