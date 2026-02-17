// JavaScript functionality for the security dashboard

// Sidebar navigation
const sidebar = document.querySelector('.sidebar');
const navButtons = sidebar.querySelectorAll('button');

navButtons.forEach(button => {
    button.addEventListener('click', function() {
        const sectionId = this.getAttribute('data-section');
        showSection(sectionId);
    });
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
}

// Interactive buttons
const interactiveButtons = document.querySelectorAll('.interactive-button');

interactiveButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Handle button click
        alert('Button clicked!');
    });
});

// Form handling
const forms = document.querySelectorAll('form');

forms.forEach(form => {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        // Handle form data
        const formData = new FormData(form);
        console.log('Form submitted:', Object.fromEntries(formData));
    });
});

// Dynamic content updates
function updateContent(content) {
    const contentArea = document.querySelector('.content-area');
    contentArea.innerHTML = content;
}
