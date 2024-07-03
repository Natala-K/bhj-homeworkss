document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const progress = document.getElementById('progress');
    const form = document.getElementById('form');
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    xhr.upload.onprogress = function(event) {
        if (event.lengthComputable) {
            const percentComplete = event.loaded / event.total;
            progress.value = percentComplete;
        }
    };

    xhr.onload = function() {
        if (xhr.status === 200) {
            alert('Файл успешно загружен!');
        } else {
            alert('Произошла ошибка при загрузке файла.');
        }
    };

    xhr.onerror = function() {
        alert('Произошла ошибка при загрузке файла.');
    };

    xhr.send(formData);
});
