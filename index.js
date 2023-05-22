const cursorEl = document.querySelector(".cursor");
var timeout;

document.addEventListener("mousemove",movement);

function movement(e){
    let x = e.pageX;
    let y = e.pageY;
    cursorEl.style.left = x + "px";
    cursorEl.style.top = y + "px";
    cursorEl.style.display = "block"

    clearTimeout(time)
    timeout = setTimeout(()=>{ 
        cursorEl.style.display = "none"
    },2000);
}

document.addEventListener("mouseout",()=>{
    cursorEl.style.display = 'none'
})