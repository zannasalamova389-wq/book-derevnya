document.addEventListener("DOMContentLoaded", function() {
    const chapters = document.querySelectorAll('.chapter');

    function showChapters() {
        const triggerBottom = window.innerHeight / 5 * 4;

        chapters.forEach(chapter => {
            const chapterTop = chapter.getBoundingClientRect().top;
            if (chapterTop < triggerBottom) {
                chapter.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', showChapters);
    showChapters(); 
});