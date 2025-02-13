
const buttons = document.querySelectorAll('.category-btn');
const allContents = document.querySelectorAll('.category-content');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Hidding all category content
        allContents.forEach(content => content.classList.add('hidden'));

        // Getting data content form button clicked
        const contentIdd = button.getAttribute('data-content');

        // showing the selected content
        const contentToShow = document.getElementById(contentIdd);
        contentToShow.classList.remove('hidden');
    })
})