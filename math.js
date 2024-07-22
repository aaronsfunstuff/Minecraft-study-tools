function checkAnswer1() {
    const answer = parseFloat(document.getElementById('answer1').value);
    const resultElement = document.getElementById('result1');
    
    if (answer === 3) {
        resultElement.textContent = "Correct! 5x + 7 = 22 when x = 3.";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Incorrect. Try again!";
        resultElement.style.color = "red";
    }
}

function checkAnswer2() {
    const answer = parseFloat(document.getElementById('answer2').value);
    const resultElement = document.getElementById('result2');
    
    if (answer === 108) {
        resultElement.textContent = "Correct! 12 multiplied by 9 is 108.";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Incorrect. Try again!";
        resultElement.style.color = "red";
    }
}
