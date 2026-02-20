const categories = document.querySelectorAll('.categories span');

categories.forEach(cat => {
    cat.addEventListener('click', () => {
        categories.forEach(c => c.style.opacity = "0.5");
        cat.style.opacity = "1";
        console.log(`Filtering by: ${cat.innerText}`);
    });
});