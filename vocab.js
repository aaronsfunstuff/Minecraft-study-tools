function checkVocabMatch() {
    const match1 = document.getElementById('match1').value;
    const match2 = document.getElementById('match2').value;
    const match3 = document.getElementById('match3').value;
    const resultElement = document.getElementById('vocab-result');
    
    let correct = 0;

    if (match1 === 'C') correct++;
    if (match2 === 'A') correct++;
    if (match3 === 'B') correct++;

    if (correct === 3) {
        resultElement.textContent = "All answers are correct!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Some answers are incorrect. Try again!";
        resultElement.style.color = "red";
    }
}
