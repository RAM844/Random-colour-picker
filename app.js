let canvas = document.getElementById("canvas");
let btn = document.getElementById("button");
let hexClr = document.getElementById("hexClr");



function randomClg() {
    let num = ['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f'];
    let clr = "#";
    for(let i =0;i<6;i++){
        clr+=num[Math.floor(Math.random()*16)]
    }
    return clr;
}

btn.addEventListener("click",() =>{
    let temp = randomClg();
    canvas.style.backgroundColor = temp;
    hexClr.textContent = temp;
})