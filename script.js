document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const guessInput = document.getElementById('guess-input');
    const submitBtn = document.getElementById('submit-btn');
    const message = document.getElementById('message');

    // Gerar senha baseada na data do dia
    const today = new Date();
    const seed = today.getFullYear() + today.getMonth() + today.getDate();
    const password = generatePassword(seed);

    let attempts = 0;
    const maxAttempts = 6;

    function generatePassword(seed) {
        const rng = new Math.seedrandom(seed);
        let password = '';
        for (let i = 0; i < 4; i++) {
            password += Math.floor(rng() * 10);
        }
        return password;
    }

    function checkGuess(guess) {
        attempts++;
        let correct = 0;
        let misplaced = 0;
        const guessArray = guess.split('');
        const passwordArray = password.split('');

        for (let i = 0; i < 4; i++) {
            if (guessArray[i] === passwordArray[i]) {
                correct++;
            } else if (passwordArray.includes(guessArray[i])) {
                misplaced++;
            }
        }

        return { correct, misplaced };
    }

    function updateBoard(guess, result) {
        const row = document.createElement('div');
        row.className = 'row';
        guess.split('').forEach((digit, index) => {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.textContent = digit;
            if (result.correct > index) {
                cell.style.backgroundColor = '#6aaa64'; // Verde para dígitos corretos
            } else if (result.misplaced > 0) {
                cell.style.backgroundColor = '#c9b458'; // Amarelo para dígitos presentes mas na posição errada
                result.misplaced--;
            } else {
                cell.style.backgroundColor = '#787c7e'; // Cinza para dígitos incorretos
            }
            row.appendChild(cell);
        });
        board.appendChild(row);
    }

    submitBtn.addEventListener('click', () => {
        const guess = guessInput.value;
        if (guess.length !== 4 || !/^\d+$/.test(guess)) {
            message.textContent = 'Por favor, insira uma senha de 4 dígitos.';
            return;
        }

        const result = checkGuess(guess);
        updateBoard(guess, result);

        if (result.correct === 4) {
            message.textContent = 'Parabéns! Você acertou a senha!';
            submitBtn.disabled = true;
            guessInput.disabled = true;
        } else if (attempts >= maxAttempts) {
            message.textContent = `Fim de jogo! A senha era ${password}.`;
            submitBtn.disabled = true;
            guessInput.disabled = true;
        } else {
            message.textContent = `Tente novamente. Você tem ${maxAttempts - attempts} tentativas restantes.`;
        }

        guessInput.value = '';
    });
});
