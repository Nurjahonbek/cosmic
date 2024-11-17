document.querySelectorAll('.search-btn').forEach((btn) => {
    btn.addEventListener('click', function () {
        const inputId = this.dataset.search;
        const query = document.getElementById(inputId).value;
        if (query) {
            const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            window.open(searchUrl, '_blank');
        } else {
            alert('Please enter a search term!');
        }
    });
});
