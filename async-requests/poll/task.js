document.addEventListener('DOMContentLoaded', () => {
    const pollTitle = document.getElementById('poll__title');
    const pollAnswers = document.getElementById('poll__answers');

    // Функция для создания кнопок ответов
    function createAnswerButton(answer) {
        const button = document.createElement('button');
        button.classList.add('poll__answer');
        button.textContent = answer;
        button.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!');
        });
        return button;
    }

    // Отправка GET-запроса для получения данных опроса
    fetch('https://students.netoservices.ru/nestjs-backend/poll')
        .then(response => response.json())
        .then(data => {
            pollTitle.textContent = data.data.title;
            data.data.answers.forEach(answer => {
                const answerButton = createAnswerButton(answer);
                pollAnswers.appendChild(answerButton);
            });
        })
        .catch(error => console.error('Ошибка при получении данных опроса:', error));
});
