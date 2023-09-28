const questions = [
    {
        'que': 'When was JavaScript first introduced?',
        'a': '1995',
        'b': '2000',
        'c': '1989',
        'd': '1998',
        'correct': 'a'
    },
    {
        'que': 'When was computer invented?',
        'a': '1837',
        'b': '1937',
        'c': '1889',
        'd': '1947',
        'correct': 'a'
    },
    {
        'que': 'Which keyword is used to declare a variable in JavaScript?',
        'a': 'var',
        'b': 'let',
        'c': 'const',
        'd': 'variable',
        'correct': 'c'
    },
    {
        'que': 'What does the DOM stand for in the context of web development?',
        'a': 'Document Object Model',
        'b': 'Digital Ordinance Model',
        'c': 'Dynamic Oriented Markup',
        'd': 'Domain Order Mechanism',
        'correct': 'a'
    },
    {
        'que': 'Which built-in method can be used to convert a string to uppercase?',
        'a': 'toUpperCase()',
        'b': 'upperCase()',
        'c': 'toUpper()',
        'd': 'caseUpper()',
        'correct': 'a'
    }
];
let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionsInput = document.querySelectorAll(".options")
function loadQues() {
    if (index === total) {
        return endQuiz();
    }
    reset();
    const data = questions[index];
    quesBox.innerHTML = `${index + 1}) ${data.que}`;
    optionsInput[0].nextElementSibling.innerHTML = data.a;
    optionsInput[1].nextElementSibling.innerHTML = data.b;
    optionsInput[2].nextElementSibling.innerHTML = data.c;
    optionsInput[3].nextElementSibling.innerHTML = data.d;

}
document.querySelector("#submit").addEventListener(
    "click",
function submit() {
    const data = questions[index];
    const ans = getAns();
    if (ans == data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadQues();
    return;
}
);
function getAns() {
    let answer
    optionsInput.forEach(
        (input) => {
            if (input.checked) {
                 answer= input.value;
            }
        }
    )
    return answer;
}
function reset() {
    optionsInput.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
function endQuiz() {
    document.getElementById("box").innerHTML = `<h3>Thank You For Playing the Quiz</h3>
     <h2>${right}/${total} are correct</h2>`
}
loadQues();
