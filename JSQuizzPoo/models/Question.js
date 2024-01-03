export class Question {
    /**
     * 
     * @param {string} text this is that question 
     * @param {string[]} choices this are choices of question 
     * @param {string} answear this is the answear of question
     */
    constructor(text, choices, answear) {
        this.text = text;
        this.choices = choices;
        this.answear = answear;
    }
    /**
     * 
     * @param {string} choice  this are choices
     * @returns boolean this return if answear is correct
     */
    correctAnswear(choice) {
        return choice === this.answear;
    }
}



