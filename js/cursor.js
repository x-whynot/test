document.addEventListener('DOMContentLoaded', function() {
    // Скрипт для курсора, который уже у вас есть
    const cursor = document.getElementById('cursor');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    });

    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });

    // Новый скрипт для установки черного курсора на модальных окнах
    const modalContents = document.querySelectorAll('.modal-content, .modal-content1, .modal-content2');

    modalContents.forEach(modalContent => {
        modalContent.addEventListener('mouseenter', function() {
            cursor.style.backgroundImage = "url('./img/cursor-black.png')";
        });

        modalContent.addEventListener('mouseleave', function() {
            cursor.style.backgroundImage = "url('./img/cursor-white.png')";
        });
    });
});
