var clickState = false;
const canv = document.querySelector(".canv");
const body = document.body;
var color = "black";

var display = document.getElementById("display");
var slider = document.getElementById("input").oninput = function(){
    var value = (this.value - this.min)/(this.max-this.min)*100;
    display.innerText = this.value;
    document.querySelector(".canv").innerHTML = "<div></div>"
    canvas(this.value)
}


console.log(canv);
function genrateCanvas(x){
for(let j = 0; j< x ; j++){
    const row = document.createElement('div')
    canv.appendChild(row);
for (let i = 0; i< x ; i++){
    var cell = document.createElement('div');
    cell.classList.add('element');
    cell.style.width = 500/x +'px'
    cell.style.height = 500/x +'px'
    row.appendChild(cell);
}
}}

function canvas(x){
genrateCanvas(x);
const pixels = document.querySelectorAll('.element');
canv.addEventListener("mousedown" , ()=>{
    clickState = true;
    canv.addEventListener("mouseup", ()=>{
        clickState = false;
    })
})
Array.from(pixels).forEach((pixel)=>{
    pixel.addEventListener("mouseover", ()=>{
        if(clickState){
        pixel.style.backgroundColor = color;}
    })
})
}

function reset(){
    document.querySelector(".canv").innerHTML = "<div></div>"
    canvas(20);
    slider.value = 0;
    display.innerText = 20;
    color = 'black'
    // const pixels = document.querySelectorAll('.element');
    // Array.from(pixels).forEach((pixel)=>{
    //     pixel.style.backgroundColor = 'aliceblue';
    // })
}

canvas(20);
document.querySelector(".reset").addEventListener('click',
    ()=>{reset()}
)

document.querySelector(".erase").addEventListener('click',
    ()=>{color = 'aliceblue'}
)


