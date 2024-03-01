let button = document.querySelector("#btn")

button.addEventListener('click', function(){
    let randomColor = getRandomColor();

    let colorRgb=document.querySelector('h1')
    colorRgb.innerText =  randomColor;

    let backGround = document.querySelector("div");
    backGround.style.backgroundColor =  randomColor;

    // let sumbit = document.querySelector("#btn");
    // sumbit.style.backgroundColor = randomColor;
    
});
function getRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}

