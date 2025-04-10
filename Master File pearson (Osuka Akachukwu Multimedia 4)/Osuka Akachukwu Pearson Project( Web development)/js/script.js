// --- Mobile Navigation Toggle ---

// Select the DOM elements based on the classes in your CSS
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

// Function to toggle the navigation
const navSlide = () => { // <-- This DEFINES the function
    // Check if burger and navLinks elements exist on the page
    if (burger && navLinks) {
        // Add event listener for clicks on the burger icon
        burger.addEventListener('click', () => {
            // Toggle Nav visibility: Add/remove 'nav-active' class on the navLinks element
            navLinks.classList.toggle('nav-active');

            // Burger Animation: Add/remove 'toggle' class on the burger element
            burger.classList.toggle('toggle');
        });
    }
}

// Call the function to make it active
navSlide(); // <--- THIS LINE CALLS THE FUNCTION