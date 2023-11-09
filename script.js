const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const feedbackElement = document.getElementById('feedback');

function generateRandomQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const question = `${num1} + ${num2}`;
    const answer = num1 + num2;
    return { question, answer };
}

function displayQuestion() {
    const { question } = generateRandomQuestion();
    questionElement.textContent = `What is ${question}?`;
}

function checkAnswer() {
    const userAnswer = parseInt(answerElement.value);
    const { answer } = generateRandomQuestion();

    if (userAnswer === answer) {
        feedbackElement.textContent = 'Correct! Well done!';
    } else {
        feedbackElement.textContent = `Oops! That's not correct. The answer is ${answer}.`;
    }

    // Clear the input field
    answerElement.value = '';

    // Generate and display a new question
    displayQuestion();
}

// Initial question
displayQuestion();
