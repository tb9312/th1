class scQuiz extends Quiz {
    constructor(quiz, index){
        super(quiz, index)
    }
    render(){
        const answer = Object.keys(this.answer).map((value) => {
            return `
            <label>
                <input type="radio" name= "quiz-${this.index}" value= "${value}">
                ${value}:${this.answer[value]}
            </label>`;
        });
        return `
            <div class="slide">
                <div class="quiz"> ${this.quiz}</div>
                <div class="answer">${answer.join('')}</div>
            </div>`;
    }
}