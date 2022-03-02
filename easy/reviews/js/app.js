var num = 0;

const reviews = [
    {
        id: 1,
        name: "Susan Monty",
        job: "Manager",
        image: "person.jpg",
        text:"I'm managing"
    },
    {
        id: 2,
        name: "Math Matty",
        job: "Developer",
        image: "person1.jpg",
        text:"I'm deving"
    },

    {
        id: 3,
        name: "Martha Marthy",
        job: "Calculus",
        image: "person2.png",
        text:"I'm counting"
    }
]

const reviewsLength = reviews.length;

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("text");

const previous = document.getElementById("previousButton");
const next = document.getElementById("nextButton");
const randomBtn = document.getElementById("randomButton");

// Alternatywa pobierania buttona
// const prevBtn = document.querySelector(".prev-btn");

function insertNum(number){
    img.src = reviews[number%reviewsLength].image;
    author.innerHTML = reviews[number%reviewsLength].name;
    job.innerHTML = reviews[number%reviewsLength].job;
    text.innerHTML = reviews[number%reviewsLength].text;
}

function prevUser(){
    num-=1;
    insertNum(num);
}

function nextUser(){
    num+=1;
    insertNum(num);
}

function randomUser(){
    num = Math.floor(Math.random()*reviewsLength);
    insertNum(num);
}




previous.addEventListener("click", ()=>{
    prevUser();
})

next.addEventListener("click", ()=>{
    nextUser();
})

randomBtn.addEventListener("click", ()=>{
    randomUser();
})



