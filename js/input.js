
const input={up:false,down:false,left:false,right:false};
document.querySelectorAll("#dpad button").forEach(b=>{
 const d=b.dataset.dir;
 b.addEventListener("pointerdown",()=>input[d]=true);
 b.addEventListener("pointerup",()=>input[d]=false);
 b.addEventListener("pointerleave",()=>input[d]=false);
});
window.input=input;
