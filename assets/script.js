// title element
const title = document.querySelector('#title');

// timer element
const timer = document.querySelector('#timer');

// element that describes the goal of the quiz
const goal = document.querySelector('#goal');

// the start button element
const start = document.querySelector('#start');

// question and answer element. these will be dynamically updated with new questions and answers for each round.
const question = document.querySelector('#question');
const answers = document.querySelector('#answers');

// the individual answers. these will be dynamically updated with new answers for each round.
const firstAnswer = document.querySelector('#first-answer');
const secondAnswer = document.querySelector('#second-answer');
const thirdAnswer = document.querySelector('#third-answer');
const fourthAnswer = document.querySelector('#fourth-answer');

// inputs for the name element on the high score page
const nameSpan = document.querySelector('#name-span');
const nameInput = document.querySelector('#name');

const highScorePage = document.querySelector('#high-scores');

const submitButton = document.querySelector('#submit-score');

let time = 50;

// initial page display
timer.textContent = ('Time Remaining: ' + time);
question.style.display = 'none';
answers.style.display = 'none';
highScorePage.style.display = 'none';

// array for questions
const questions = [
    { q: 'With which method or function can you iterate through an array?', a1: 'iterate()', a2: 'for()', a3: 'map()', a4: 'arrayIndexLoop()' },
    { q: 'How do you print something to the console?', a1: 'printToConsole()', a2: 'console.log()', a3: 'system.out.printLn()', a4: 'variable.textContent()' },
    { q: 'What is a boolean?', a1: 'A variable that stores numbers', a2: 'A funny sounding word that actually means nothing', a3: 'A data type that can represent either true/false', a4: 'A function' },
    { q: 'What does <ul> mean in HTML?', a1: 'Unordered List', a2: 'Bold Text', a3: 'Page Body', a4: 'Underline' }
];

function startQuiz() {
    const timeInterval = setInterval(function () {
        timer.textContent = ('Time Remaining: ' + time)
        time--;
        if (time === 0) {
            timer.textContent = ('Time Remaining: ' + time)
            clearInterval(timeInterval);
            highScore();
        }
    }, 1000);

    // hide the title screen elements and display the first question and set of answers.
    title.style.display = 'none';
    start.style.display = 'none';
    goal.style.display = 'none';
    question.style.display = 'block';
    answers.style.display = 'block';
    question.textContent = (questions[0].q);
    firstAnswer.textContent = (questions[0].a1);
    secondAnswer.textContent = (questions[0].a2);
    thirdAnswer.textContent = (questions[0].a3);
    fourthAnswer.textContent = (questions[0].a4);

    // add a click event listener for the answer buttons
    firstAnswer.addEventListener('click', function() {
        time = time - 10;
        questionTwo();
    });
    
    secondAnswer.addEventListener('click', function() {
        questionTwo();
    });

    thirdAnswer.addEventListener('click', function() {
        time = time - 10;
        questionTwo();
    });

    fourthAnswer.addEventListener('click', function() {
        time = time - 10;
        questionTwo();
    });
}

function questionTwo() {
    question.textContent = (questions[1].q);
    firstAnswer.textContent = (questions[1].a1);
    secondAnswer.textContent = (questions[1].a2);
    thirdAnswer.textContent = (questions[1].a3);
    fourthAnswer.textContent = (questions[1].a4);

    firstAnswer.addEventListener('click', function() {
        time = time - 10;
        questionThree();
    });

    secondAnswer.addEventListener('click', function() {
        questionThree();
    });

    thirdAnswer.addEventListener('click', function() {
        time = time - 10;
        questionThree();
    });

    fourthAnswer.addEventListener('click', function() {
        time = time - 10;
        questionThree();
    });
}

function questionThree() {
    question.textContent = (questions[2].q);
    firstAnswer.textContent = (questions[2].a1);
    secondAnswer.textContent = (questions[2].a2);
    thirdAnswer.textContent = (questions[2].a3);
    fourthAnswer.textContent = (questions[2].a4);

    firstAnswer.addEventListener('click', function() {
        time = time - 10;
        questionFour();
    });

    secondAnswer.addEventListener('click', function() {
        time = time - 10;
        questionFour();
    });

    thirdAnswer.addEventListener('click', function() {
        questionFour();
    });

    fourthAnswer.addEventListener('click', function() {
        time = time - 10;
        questionFour();
    });
}

function questionFour() {
    question.textContent = (questions[3].q);
    firstAnswer.textContent = (questions[3].a1);
    secondAnswer.textContent = (questions[3].a2);
    thirdAnswer.textContent = (questions[3].a3);
    fourthAnswer.textContent = (questions[3].a4);

    firstAnswer.addEventListener('click', function() {
        highScore();
    });

    secondAnswer.addEventListener('click', function() {
        time = time - 10;
        highScore();
    });

    thirdAnswer.addEventListener('click', function() {
        time = time - 10;
        highScore();
    });

    fourthAnswer.addEventListener('click', function() {
        time = time - 10;
        highScore();
    });
}

function highScore() {
    question.style.display = 'none';
    answers.style.display = 'none';
    highScorePage.style.display = 'block';
    clearInterval(timeInterval);
}

function getHighScore() {
    const name = localStorage.getItem('name');
    nameSpan.textContent = name;
}

getHighScore();

submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    const name = document.querySelector('#name').value

    if (name === '') {
        window.alert('Please enter your name!');
    } else {
        localStorage.setItem('name', name + ' // ' + (timer.textContent));
        getHighScore();
    }
});
