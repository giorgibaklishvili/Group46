const stars = document.querySelectorAll('.star');
const statusText = document.getElementById('statusText');
const resetBtn = document.getElementById('resetBtn');

stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = parseInt(star.getAttribute('data-value'));
        updateRating(rating);
    });
});

resetBtn.addEventListener('click', () => {
    updateRating(0);
});

function updateRating(rating) {
    stars.forEach(star => {
        const starValue = parseInt(star.getAttribute('data-value'));
        if (starValue <= rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });         

    if (rating === 0) {
        statusText.textContent = 'unrated';
    } else {
        statusText.textContent = `you rated ${rating} stars!`;
    }
}