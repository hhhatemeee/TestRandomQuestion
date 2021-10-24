const quizData = [
    {
        question: 'Какой сейчас год?',
        a: '2020',
        b: '2019',
        c: '2021',
        d: '2022',
        correct: 'c'
    },
    {
        question: 'Кто сейчас президент',
        a: 'Владимир Путин',
        b: 'Дмитрий Медведев',
        c: 'Иосиф Сталин',
        d: 'Михаил Горбачев',
        correct: 'a'
    },
    {
        question: 'Самый популярный язык программирования?',
        a: 'Java',
        b: 'Python',
        c: 'C++',
        d: 'JavaScript',
        correct: 'a'
    },
    {
        question: 'Самая большая страна',
        a: 'Россия',
        b: 'Америка',
        c: 'Мексика',
        d: 'Канада',
        correct: 'a'
    },

]
const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
let currentQuiz = 0;

let score = 0;


loadQuiz();

function loadQuiz() {
    deletSelected();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;

    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

}

function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deletSelected() {
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answerEl.checked = false;
        }
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    console.log(answer)
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
            quiz.innerHTML = `<h2 class="finish-text">Ты набрал ${score}/${quizData.length} очков!</h2>
            <button onClick="location.reload()">Завершить</button>`;
        }
    }

})