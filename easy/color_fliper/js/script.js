const button = document.getElementById("color_swapper");

function randomRGB(){
    return "rgb("+(Math.random()*255).toString()+","+(Math.random()*255).toString()+","+(Math.random()*255).toString()+")";
}



button.addEventListener("click", () => {
    document.body.style.backgroundColor = randomRGB();
});