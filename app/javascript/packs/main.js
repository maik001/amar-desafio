var questions = [
    {
        question: "Qual a cidade sagrada disputada entre Árabes e Judeus?",
        choices: {
            a: "Atenas",
            b: "Roma",
            c: "Jerusalém",
            d: "Istambul"
        },
        answer: "c"
    },
    {
        question:  "Qual o nome do mestre famoso em Star Wars?",
        choices: {
            a: "Yoda",
            b: "Jar Jar Binks",
            c: "Luke Skywalker",
            d: "Darth Vader"
        },
        answer: "a"
    },
    {
        question: "Qual o nome do primeiro satélite criado?",
        choices: {
            a: "Apollo 11",
            b: "Apollo 13",
            c: "Columbus",
            d: "Sputinik"
        },
        answer: "d"
    },
    {
        question: "Na Mitologia Grega quem era o Deus dos Deuses?",
        choices: {
            a: "Odin",
            b: "Jupiter",
            c: "Zeus",
            d: "Hades"
        },
        answer: "c"
    },
    {
        question: "Como são chamadas as linhas de um poema?",
        choices: {
            a: "Parágrafo",
            b: "Estrofe",
            c: "Verso",
            d: "Slogan"
        },
        answer: "c"
    }
];

function quiz(){
    var output = [];

    questions.forEach((currentQuestion, questionNumber) => {
        var choices = [];

        for(letter in currentQuestion.choices) {

            choices.push(
                `<label><input type="radio" name="question${questionNumber}" value="${letter}">
                    <span class="customRadio"></span>
                        ${letter} :
                        ${currentQuestion.choices[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="slide">
                <div class="question">${currentQuestion.question}</div>
                <div class="choices">${choices.join("")}</div>
            </div>`
        );
    });
    quizContainer.innerHTML = output.join("");
}

function results(){

    var answerContainers = quizContainer.querySelectorAll(".choices");

    var numCorrect = 0;

    questions.forEach((currentQuestion, questionNumber) => {
        var answerContainer = answerContainers[questionNumber];
        var selector = `input[name=question${questionNumber}]:checked`;
        var userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if(userAnswer === currentQuestion.answer) {
            numCorrect++;

            answerContainers[questionNumber].style.color = "rgb(0, 88, 4)";
        } else {   
            answerContainers[questionNumber].style.color = "rgb(141, 0, 0)";
        }
    });

    resultsContainer.innerHTML = `${numCorrect} de ${questions.length}`
}

function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if(currentSlide === 0) {
        previousButton.style.display = "none";
    } else {
        previousButton.style.display = "inline-block";
    }

    if(currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
    } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
    }
}

function nextSlide() {
    showSlide(currentSlide + 1);
    progressPercent += 25;
    progressBar.style.width = progressPercent +  "%";
}

function previousSlide() {
    showSlide(currentSlide - 1);
    progressPercent -= 25;
    progressBar.style.width = progressPercent + "%";
}

var progressBar = document.getElementById("progress-bar");
var progressPercent = 0;

var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

//quiz 
quiz();

var previousButton = document.getElementById("previous");
var nextButton = document.getElementById("next");
var slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Slides
showSlide(0);

// clicar no submit, mostrar resultados
submitButton.addEventListener("click", results);
submitButton.addEventListener("click", btnvid);
// Slides proximo ou anterior
previousButton.addEventListener("click", previousSlide);
nextButton.addEventListener("click", nextSlide);

function showFrame(){
    document.getElementById("quiz").remove();
    document.getElementById("progress-wrap").remove();
    document.getElementById("progress-bar").remove();
    document.getElementById("previous").remove();
    document.getElementById("next").remove();
    document.getElementById("submit").remove();
    document.getElementById("results").remove();
    var frame = document.createElement('iframe');
        frame.class="d-flex justifiy-content";
        frame.width="720";
        frame.height="480";
        frame.src = "https://www.youtube.com/embed/Qv_WGfHVW9U";
        frame.frameborder="0";
        frame.allowfullscreen;
        document.getElementById("video").appendChild(frame);

}


function moBt(){
    var btnvid = getElementById("btnvid");
    if (btnvid.style.visibility == "hidden") {
        btnvid.style.display = "visible";
      } else {
        btnvid.style.display = "hidden";
      }
    } 

