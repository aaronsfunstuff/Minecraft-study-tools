function checkFillBlanks() {
    const blank1 = document.getElementById('blank1').value;
    const blank2 = document.getElementById('blank2').value;
    const blank3 = document.getElementById('blank3').value;
    const resultElement = document.getElementById('fill-blanks-result');
    
    let correct = 0;

    if (blank1 === 'is') correct++;
    if (blank2 === 'were') correct++;
    if (blank3 === 'don't') correct++;

    if (correct === 3) {
        resultElement.textContent = "All answers are correct!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Some answers are incorrect. Try again!";
        resultElement.style.color = "red";
    }
}

function checkMultipleChoice() {
    const mc1 = document.querySelector('input[name="mc1"]:checked');
    const mc2 = document.querySelector('input[name="mc2"]:checked');
    const resultElement = document.getElementById('multiple-choice-result');
    
    let correct = 0;

    if (mc1 && mc1.value === 'goes') correct++;
    if (mc2 && mc2.value === 'I do not like pizza.') correct++;

    if (correct === 2) {
        resultElement.textContent = "All answers are correct!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Some answers are incorrect. Try again!";
        resultElement.style.color = "red";
    }
}
