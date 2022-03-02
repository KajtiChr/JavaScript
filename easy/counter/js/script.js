const incButton = document.getElementById("increase");
const decButton = document.getElementById("decrease");
const resButton = document.getElementById("reset");
const numField = document.getElementById("number");

let counter = 0;

function increase_func(){
    counter+=1;
}

function decrease_func(){
    counter-=1;
}

function reset_func(){
    counter = 0;
}



incButton.addEventListener("click", () => {
    increase_func();
    numField.innerHTML = counter;
});

decButton.addEventListener("click", () => {
    decrease_func();
    numField.innerHTML = counter;
});

resButton.addEventListener("click", () => {
    reset_func();
    numField.innerHTML = counter;
});

