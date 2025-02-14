

const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const popupTitle = document.getElementById('popup-title');
const popupDetails = document.getElementById('popup-details');

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

    // for popup
    document.querySelectorAll('.details-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const name = btn.dataset.name;
            const date = btn.dataset.date;
            const venue = btn.dataset.venue;
            const cost = btn.dataset.venue;

            popupTitle.textContent = name;
            popupDetails.innerHTML = 'Date: ${date()}<br>Venue: ${venue}<br> Cost: ${cost}';

            // // popup.textContent = `Details for ${btn.dataset.detail}`;
            // popupContent.innerHTML = `<strong>${btn.dataset.detail}</strong>: Detailed event information goes here.`;
            popup.classList.remove('hidden');
            overlay.classList.remove('hidden');
        })
    })
    // for popup overlay
    overlay.addEventListener('click', () => {
        popup.classList.add('hidden');
        overlay.classList.add('hidden');
    })
})