document.addEventListener('DOMContentLoaded', (event) => {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const nextButton = document.getElementById('next-button');
    let currentQuestionIndex = 0;
  
    const questions = [
        {
            question: "What is the highest mountain in Tasmania?",
            options: ["Legges Tor", "Barn Bluff", "Mt Ossa", "Giblin Park"],
            answer: "Mt Ossa"
        },
        {
            question: "What is the largest city in Australia?",
            options: ["Sydney", "Gold Coast", "Perth", "Melbourne"],
            answer: "Sydney"        
        },
        {
            question: "What is the name of the currency used in Australia?",
            options: ["USD", "Euro", "Baht", "AUD"],
            answer: "AUD"
        },
        {
            question: "In what year was the Sydney Opera House opened?",
            options: ["1953", "1963", "1973", "1983"],
            answer: "1973"
        },
        {
            question: "What proportion of Australia is dessert?",
            options: ["First", "Second", "Third", "Fourth"],
            answer: "Third"
        },
        {
            question: "What is Australia's national flower emblem?",
            options: ["Lotus", "Hibiscus", "The Plum Blossom", "The Golden Wattle"],
            answer: "The Golden Wattle"
        },
        {
            question: "Complete the name of the natural feature that lies off Australia: Great Barrier ______",
            options: ["Reef", "River", "Beach", "Coral Isle"],
            answer: "Reef"
        }
    ];
  
    function loadQuestion(questionIndex) {
        const question = questions[questionIndex];
        questionElement.textContent = question.question;
        optionsElement.innerHTML = '';
        question.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('btn', 'btn-option');
            button.onclick = () => selectOption(option);
            optionsElement.appendChild(button);
        });
    }
  
    function selectOption(selected) {
        const question = questions[currentQuestionIndex];
        if (selected === question.answer) {
            alert('Correct!');
        } else {
            alert('Wrong!');
        }
    }
  
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion(currentQuestionIndex);
        } else {
            alert('Quiz completed!');
            currentQuestionIndex = 0;
        }
        loadQuestion(currentQuestionIndex);
    });
  
    // Load the first question
    loadQuestion(currentQuestionIndex);
  });
