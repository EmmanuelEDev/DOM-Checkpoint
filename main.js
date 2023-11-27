function addone(pos) {
    const item = document.getElementById(`item${pos}`)
    const btn = document.getElementById(`minbtn${pos}`)
    btn.removeAttribute('disabled');
    let former = item.innerHTML
    former++
    item.innerHTML = former
}

function subone(pos) {
    const item = document.getElementById(`item${pos}`)
    let former = item.innerHTML
    former--
    item.innerHTML = former
    if(item.innerHTML < 2){
        const btn = document.getElementById(`minbtn${pos}`);
         btn.setAttribute('disabled', '');    }
}

function updatetotal() {
    const item = document.getElementById(total)

}