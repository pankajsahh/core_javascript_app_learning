question_list = [
    {
        question: 'how are you?',
        a: '2',
        b: '3',
        c: '5',
        d: 'ok',
        correct: 'a'
    }, {
        question: 'how do you do you?',
        a: 'fh',
        b: 'lorem',
        c: 'sakshi',
        d: 'kilo',
        correct: 'd'
    }, {
        question: 'how hus just chilling?',
        a: 'short',
        b: 'peoples',
        c: 'are',
        d: 'little',
        correct: 'b'
    },{
        question: 'jhgjghjgjgjhhjgjhk//?',
        a: 'i like to be hwere',
        b: 'hates to be here',
        c: 'are you ok with it',
        d: 'can i sit haer',
        correct: 'b'
    }
]
const question_text = document.getElementById('question_text')
const a_text = document.getElementById('a_txt');
const b_text = document.getElementById('b_txt');
const c_text = document.getElementById('c_txt');
const d_text = document.getElementById('d_txt');

let currentQuestion = 0;
let score = 0
loadQuestion();
function loadQuestion() {
    const question_data = question_list[currentQuestion];
    question_text.innerText = question_data.question;
    a_text.innerText = question_data.a;
    b_text.innerText = question_data.b;
    c_text.innerText = question_data.c;
    d_text.innerText = question_data.d;
}

function evaluator() {
    const question_data = question_list[currentQuestion];
    let ans = document.querySelector('input[name="answer"]:checked');
    if (ans != null) {
        return (question_data.correct === ans.id) ? 1 : 0;
    } else {
        return undefined;
    }


}

document.getElementById('submit_button').addEventListener('click', () => {
    if (evaluator() === undefined) {
        alert("plese seelect something");
    }
    else
    {
        score += evaluator();
        currentQuestion++;
        if (question_list[currentQuestion] === undefined) {
            document.getElementById('quizz').innerHTML=`<h2>your score is ${score}/${question_list.length}</h2> <button onclick="location.reload()">reload</button>`;
        }else {
            loadQuestion();
        }
    }


});
