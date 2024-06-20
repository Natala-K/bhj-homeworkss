class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timerElement = container.querySelector('.timer__value');

    this.reset();
    this.registerEvents();
  }

  reset() {
    this.wins = 0;
    this.losses = 0;
    this.updateScore();
    this.setNewWord();
  }

  registerEvents() {
    document.addEventListener('keydown', (event) => {
      const inputChar = event.key.toLowerCase();
      const currentChar = this.currentSymbol.textContent.toLowerCase();

      // Игнорируем клавиши, которые не являются буквами
      if (!/^[a-zа-яё]$/i.test(inputChar)) {
        return;
      }

      if (inputChar === currentChar) {
        this.success();
      } else {
        this.fail();
      }
    });
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol.classList.remove('symbol_current');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
    } else {
      this.wins++;
      this.updateScore();
      if (this.wins === 10) {
        alert('Победа!');
        this.reset();
      } else {
        this.setNewWord();
      }
    }
  }

  fail() {
    this.losses++;
    this.updateScore();
    if (this.losses === 3) {
      alert('Вы проиграли!');
      this.reset();
    } else {
      this.setNewWord();
    }
  }

  setNewWord() {
    const word = this.getWord();
    this.renderWord(word);
    this.resetTimer();
  }

  getWord() {
    const words = [
      'bob',
      'awesome',
      'netology',
      'hello',
      'kitty',
      'rock',
      'youtube',
      'popcorn',
      'cinema',
      'love',
      'javascript'
    ];
    const index = Math.floor(Math.random() * words.length);
    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;
    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }

  resetTimer() {
    clearInterval(this.timerInterval);
    this.timeRemaining = this.wordElement.textContent.length;
    this.timerElement.textContent = this.timeRemaining;

    this.timerInterval = setInterval(() => {
      if (this.timeRemaining === 0) {
        clearInterval(this.timerInterval);
        this.fail();
      } else {
        this.timerElement.textContent = --this.timeRemaining;
      }
    }, 1000);
  }

  updateScore() {
    this.winsElement.textContent = this.wins;
    this.lossElement.textContent = this.losses;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Game(document.getElementById('game'));
});
