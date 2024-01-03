import { Question } from "./Question.js"

export class Quiz{
    questionIndex = 0
    score = 0
    constructor(question){
        this.question=question
    }
    getQuestionIndex(){
        return this.question[this.questionIndex]
    }
    guess(anwear){
        if (this.getQuestionIndex().correctAnswear(anwear)) {
            this.score++;
        }
        this.questionIndex++;
    }
    isEnd(){
        return this.question.length ===this.questionIndex;
    }
}