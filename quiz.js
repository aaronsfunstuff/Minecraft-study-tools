document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit-quiz');
    const resultDiv = document.getElementById('quiz-result');

    submitButton.addEventListener('click', () => {
        let score = 0;
        
        // Answers
        const correctAnswers = {
            q1: 'A',
            q2: 'D'
        };

        // Check answers
        for (const [question, answer] of Object.entries(correctAnswers)) {
            const selected = document.querySelector(`input[name="${question}"]:checked`);
            if (selected && selected.value === answer) {
                score++;
            }
        }

        // Show result
        resultDiv.textContent = `You scored ${score} out of ${Object.keys(correctAnswers).length}!`;
    });
});
