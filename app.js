var colors = ["violet",  "indigo" , "blue", "green", "yellow", "orange", "red" ]
var clickState = false;
const canv = document.querySelector(".canv");
const body = document.body;
var color = "black";
var rainbow = false;
var dimension = 20;

var display = document.getElementById("display");
var slider = document.getElementById("input").oninput = function(){
    var value = (this.value - this.min)/(this.max-this.min)*100;
    display.innerText = this.value;
    document.querySelector(".canv").innerHTML = "<div></div>"
    dimension = this.value;
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
            if(rainbow){
                var randomColor = colors[Math.floor(Math.random()*7)]
        pixel.style.backgroundColor = randomColor;
            }
            else{
                pixel.style.backgroundColor = color;
            }
            }
    })
})
}

function reset(){
    document.querySelector(".canv").innerHTML = "<div></div>"
    canvas(dimension);
    display.innerText = dimension;
    color = 'black'
    rainbow = false;
    // const pixels = document.querySelectorAll('.element');
    // Array.from(pixels).forEach((pixel)=>{
    //     pixel.style.backgroundColor = '#ACFADFblue';
    // })
}

canvas(20);
document.querySelector(".reset").addEventListener('click',
    ()=>{reset()}
)

document.querySelector(".erase").addEventListener('click',
    ()=>{(color === '#ACFADF'? color = 'black' : color = '#ACFADF');
rainbow = false
}
)

document.querySelector(".rainbow").addEventListener('click',()=>{
    rainbow = !rainbow;
})
