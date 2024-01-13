import { q } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { Ui } from "./models/Ui.js";


const render = (quiz, ui) => {
    if (quiz.isEnd()) {
        console.log(quiz.score);
        ui.showScore(quiz.score);
    } else {
        ui.showCuestion(quiz.getQuestionIndex().text)
        ui.showChoices(quiz.getQuestionIndex().choices, (current) => {
            quiz.guess(current)
            render(quiz, ui);
        });
        ui.showProgress(quiz.questionIndex+1,quiz.question.length)
    }
}

function main() {
    const quiz = new Quiz(q);
    const ui = new Ui('Pregunta 1');
    render(quiz, ui);
}

main()