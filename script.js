document.addEventListener('DOMContentLoaded', () => {
    const letters = document.querySelectorAll('.balloon-text span');
    letters.forEach(letter => {
        letter.style.animationDelay = `${Math.random() * 2}s`;
        letter.style.animationDuration = `${2 + Math.random() * 2}s`;
    });

    const popupBtn = document.getElementById('popupBtn');
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close-btn');

    popupBtn.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
