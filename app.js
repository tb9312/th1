class App{
    constructor(quiz){
        this.quiz = quiz.map((quiz,index) => {if (quiz.multi){
                return new mcQuiz(quiz,index);
            } else {
                return new scQuiz(quiz,index);
            }
        });
    this.quizContainer = document.getElementById('quiz');
    this.resultContainer = document.getElementById('result');
    this.submitButton = document.getElementById('submit');
    this.previousButton = document.getElementById('previous');
    this.nextButton = document.getElementById('next');
    this.submitButton.addEventListener('click',() => this.showResult());
    this.previousButton.addEventListener('click',() => this.showPreviousSlide());
    this.nextButton.addEventListener('click',() => this.showNextSlide());
    this.currentSlide = 0;    
    }
    buildQuiz(){
        const output = this.quiz.map((currentQuiz) => currentQuiz.render()
        );
        this.quizContainer.innerHTML = output.join('');
    }
    showResult(){
        const answerContainer = this.quizContainer.querySelectorAll('.answer');
        let numCorrect = 0;
        this.quiz.forEach((currentQuiz, quizNumber) => {
            const answerContainer = answerContainer[quizNumber];
            const selector = `input[name = quiz-${quizNumber}]`;
            const userAnswer = Array.from(answerContainer.querySelectorAll(selector))
                .filter(input => input.checked)
                .map(input => input.value);
            if (userAnswer.length === 0){
                answerContainer[quizNumber].style.color = 'red';
            }
            else{
                const isCorrect = userAnswer.join('') === currentQuiz.correctAnswer;
                if (isCorrect){
                    numCorrect ++;
                    answerContainer[quizNumber].style.color = 'lightgreen';
                }
                else{
                    answerContainer[quizNumber].style.color = 'red';
                }
            }
        });
        this.resultContainer.innerHTML =  `Result: ${numCorrect} / ${this.quiz.length}`;
    }
    showSlide(n){
        if(this.slides === undefined){
            this.slides = document.querySelectorAll('.slide');
        }
        this.slides[this.currentSlide].classList.remove('active-slide');
        this.slides[n].classList.add('active-slide');
        this.currentSlide = n;
        if (this.currentSlide === 0){
            this.previousButton.style.display = 'none';
        }
        else{
            this.previousButton.style.display = 'inline-block';
        }
        if (this.currentSlide === this.slides.length - 1){
            this.nextButton.style.display = 'none';
            this.submitButton.style.display = 'inline-block';
        }
        else{
            this.nextButton.style.display = 'inline-block';
            this.submitButton.style.display = 'none';
        }
    }
    showNextSlide(){
        this.showSlide(this.currentSlide + 1);
    }
    showPreviousSlide(){
        this.showSlide(this.currentSlide - 1);
    }
    start(){
        this.buildQuiz();
        this.showSlide(0);
    }
}