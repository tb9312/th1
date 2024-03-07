(function(){
    const myQuiz = [{
            quiz: '1.Câu hỏi nhóm 1', answer: {
                a: 'Đúng',
                b: 'Sai',
            },
            multi: false,
            correctAnswer: 'a'
        },
        {
            quiz: '2.Câu hỏi nhóm 1', answer: {
                a: 'Đúng',
                b: 'Sai',
            },
            multi: false,
            correctAnswer: 'a'
        },
        {
            quiz: '3.Câu hỏi nhóm 1', answer: {
                a: 'Đúng',
                b: 'Sai',
            },
            multi: false,
            correctAnswer: 'a'
        },
        {
            quiz: '4.Câu hỏi nhóm 1', answer: {
                a: 'Đúng',
                b: 'Sai',
            },
            multi: false,
            correctAnswer: 'a'
        },
        {
            quiz: '5.Câu hỏi nhóm 1', answer: {
                a: 'Đúng',
                b: 'Sai',
            },
            multi: false,
            correctAnswer: 'a'
        },
        {
            quiz: '6.Câu hỏi nhóm 1', answer: {
                a: 'Đúng',
                b: 'Sai',
            },
            multi: false,
            correctAnswer: 'a'
        },
        {
            quiz: '7.Câu hỏi nhóm 1', answer: {
                a: 'Đúng',
                b: 'Sai',
            },
            multi: false,
            correctAnswer: 'a'
        },
        {
            quiz: '8.Câu hỏi nhóm 1', answer: {
                a: 'Đúng',
                b: 'Sai',
            },
            multi: false,
            correctAnswer: 'a'
        },
        {
            quiz: '9.Câu hỏi nhóm 1', answer: {
                a: 'Đúng',
                b: 'Sai',
            },
            multi: false,
            correctAnswer: 'a'
        },
        {
            quiz: '10.Câu hỏi nhóm 1', answer: {
                a: 'Đúng',
                b: 'Sai',
            },
            multi: false,
            correctAnswer: 'a'
        },
        {
            quiz: '1.Câu hỏi nhóm 2', answer: {
                a: 'Đáp án',
                b: 'Đáp án',
                c: 'Đáp án',
                d: 'Đáp án',
            },
            multi: false,
            correctAnswer: 'b'
        },
        {
            quiz: '2.Câu hỏi nhóm 2', answer: {
                a: 'Đáp án',
                b: 'Đáp án',
                c: 'Đáp án',
                d: 'Đáp án',
            },
            multi: false,
            correctAnswer: 'b'
        },
        {
            quiz: '3.Câu hỏi nhóm 2', answer: {
                a: 'Đáp án',
                b: 'Đáp án',
                c: 'Đáp án',
                d: 'Đáp án',
            },
            multi: false,
            correctAnswer: 'b'
        },
        {
            quiz: '4.Câu hỏi nhóm 2', answer: {
                a: 'Đáp án',
                b: 'Đáp án',
                c: 'Đáp án',
                d: 'Đáp án',
            },
            multi: false,
            correctAnswer: 'b'
        },
        {
            quiz: '5.Câu hỏi nhóm 2', answer: {
                a: 'Đáp án',
                b: 'Đáp án',
                c: 'Đáp án',
                d: 'Đáp án',
            },
            multi: false,
            correctAnswer: 'b'
        },
        {
            quiz: '6.Câu hỏi nhóm 2', answer: {
                a: 'Đáp án',
                b: 'Đáp án',
                c: 'Đáp án',
                d: 'Đáp án',
            },
            multi: false,
            correctAnswer: 'b'
        },
        {
            quiz: '7.Câu hỏi nhóm 2', answer: {
                a: 'Đáp án',
                b: 'Đáp án',
                c: 'Đáp án',
                d: 'Đáp án',
            },
            multi: false,
            correctAnswer: 'b'
        },
        {
            quiz: '8.Câu hỏi nhóm 2', answer: {
                a: 'Đáp án',
                b: 'Đáp án',
                c: 'Đáp án',
                d: 'Đáp án',
            },
            multi: false,
            correctAnswer: 'b'
        },
        {
            quiz: '9.Câu hỏi nhóm 2', answer: {
                a: 'Đáp án',
                b: 'Đáp án',
                c: 'Đáp án',
                d: 'Đáp án',
            },
            multi: false,
            correctAnswer: 'b'
        },
        {
            quiz: '10.Câu hỏi nhóm 2', answer: {
                a: 'Đáp án',
                b: 'Đáp án',
                c: 'Đáp án',
                d: 'Đáp án',
            },
            multi: false,
            correctAnswer: 'b'
        },
       
        {
            quiz: '1.Câu hỏi nhóm 3', answer: {
                    a: 'Đáp án',
                    b: 'Đáp án',
                    c: 'Đáp án',
                    d: 'Đáp án',
                },
            multi: true,
            correctAnswer: 'cd'
        },
        {
            quiz: '2.Câu hỏi nhóm 3', answer: {
                    a: 'Đáp án',
                    b: 'Đáp án',
                    c: 'Đáp án',
                    d: 'Đáp án',
                },
            multi: true,
            correctAnswer: 'cd'
        },
        {
            quiz: '3.Câu hỏi nhóm 3', answer: {
                    a: 'Đáp án',
                    b: 'Đáp án',
                    c: 'Đáp án',
                    d: 'Đáp án',
                },
            multi: true,
            correctAnswer: 'cd'
        },
        {
            quiz: '4.Câu hỏi nhóm 3', answer: {
                    a: 'Đáp án',
                    b: 'Đáp án',
                    c: 'Đáp án',
                    d: 'Đáp án',
                },
            multi: true,
            correctAnswer: 'cd'
        },
        {
            quiz: '5.Câu hỏi nhóm 3', answer: {
                    a: 'Đáp án',
                    b: 'Đáp án',
                    c: 'Đáp án',
                    d: 'Đáp án',
                },
            multi: true,
            correctAnswer: 'cd'
        },
        {
            quiz: '6.Câu hỏi nhóm 3', answer: {
                    a: 'Đáp án',
                    b: 'Đáp án',
                    c: 'Đáp án',
                    d: 'Đáp án',
                },
            multi: true,
            correctAnswer: 'cd'
        },
        {
            quiz: '7.Câu hỏi nhóm 3', answer: {
                    a: 'Đáp án',
                    b: 'Đáp án',
                    c: 'Đáp án',
                    d: 'Đáp án',
                },
            multi: true,
            correctAnswer: 'cd'
        },
        {
            quiz: '8.Câu hỏi nhóm 3', answer: {
                    a: 'Đáp án',
                    b: 'Đáp án',
                    c: 'Đáp án',
                    d: 'Đáp án',
                },
            multi: true,
            correctAnswer: 'cd'
        },
        {
            quiz: '9.Câu hỏi nhóm 3', answer: {
                    a: 'Đáp án',
                    b: 'Đáp án',
                    c: 'Đáp án',
                    d: 'Đáp án',
                },
            multi: true,
            correctAnswer: 'cd'
        },
        {
            quiz: '10.Câu hỏi nhóm 3', answer: {
                    a: 'Đáp án',
                    b: 'Đáp án',
                    c: 'Đáp án',
                    d: 'Đáp án',
                },
            multi: true,
            correctAnswer: 'cd'
        },

    ];
    const app = new App(myQuiz);
    const infoForm = document.getElementById('info-form');
    const quizContainer = document.getElementById('quiz-container');
    infoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const fullName = document.getElementById('fullname').value;
        const date = document.getElementById('date').value;
        const citizenNumber = document.getElementById('citizen-number').value;
        const address = document.getElementById('address').value;
        infoForm.style.display = 'none';
        quizContainer.style.display = 'block';
        app.start();
    });
})();