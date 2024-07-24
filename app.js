var block = document.querySelector("#movingdiv")
var els = ""
for(let i = 0; i <= 150; i++) {
    els += `<div id="movingelem">In progress...&nbsp;&nbsp;&nbsp;</div>`
}
block.innerHTML = els