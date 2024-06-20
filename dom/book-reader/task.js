document.addEventListener('DOMContentLoaded', function() {
    const fontSizeLinks = document.querySelectorAll('.font-size');
    const book = document.getElementById('book');

    fontSizeLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Удаляем класс font-size_active у всех ссылок
            fontSizeLinks.forEach(item => item.classList.remove('font-size_active'));
            
            // Добавляем класс font-size_active к текущей ссылке
            link.classList.add('font-size_active');
            
            // Удаляем предыдущие классы, связанные с размером шрифта
            book.classList.remove('book_fs-small', 'book_fs-big', 'book_fs-medium');
            
            // Добавляем новый класс в зависимости от выбранного размера шрифта
            if (link.dataset.size === 'small') {
                book.classList.add('book_fs-small');
            } else if (link.dataset.size === 'big') {
                book.classList.add('book_fs-big');
            } else {
                book.classList.add('book_fs-medium');
            }
        });
    });
});
