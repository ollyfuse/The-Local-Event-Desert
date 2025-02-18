const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const popupContent = document.getElementById('popup-content');

const buttons = document.querySelectorAll('.category-btn');
const allContents = document.querySelectorAll('.category-content');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Hiding all category content
        allContents.forEach(content => content.classList.add('hidden'));
        // Getting data content from button clicked
        const contentId = button.getAttribute('data-content');
        // Showing the selected content
        const contentToShow = document.getElementById(contentId);
        contentToShow.classList.remove('hidden');
    });
});

// Event delegation for popup
document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('details-btn')) {
        const btn = event.target;
        const eventName = btn.getAttribute('data-name');
        const eventDate = btn.getAttribute('data-date');
        const eventPrice = btn.getAttribute('data-price');
        const eventLocation = btn.getAttribute('data-location');
        
        popupContent.innerHTML = `
            <strong><h1>Event Details:</h1></strong>
            <div class="container-popup">
            <p><strong>Name:</strong> ${eventName}</p>
            <p><strong>Date:</strong> ${eventDate}</p>
            <p><strong>Price:</strong> ${eventPrice}</p>
            <p><strong>Location:</strong> ${eventLocation}</p>
            </div>
        `;
        popup.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }
});

// Close popup on overlay click
overlay.addEventListener('click', () => {
    popup.classList.add('hidden');
    overlay.classList.add('hidden');
});