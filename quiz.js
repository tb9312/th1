class Quiz{
    constructor(q, index){
        this.quiz = q.quiz;
        this.answer = q.answer;
        this.correctAnswer = q.correctAnswer;
        this.index = index;
    }
    render(){
        throw new Error('Subclass must override this method');
    }
}