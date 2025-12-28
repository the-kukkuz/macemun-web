/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        const scrollSpy = new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 80, // IMPORTANT: accounts for navbar height
        });

        // Refresh ScrollSpy on resize & scroll (fixes inactive sections)
        window.addEventListener('resize', () => {
            scrollSpy.refresh();
        });

        document.addEventListener('scroll', () => {
            scrollSpy.refresh();
        });
    }


    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// Countdown Timer functionality
function startCountdown(eventDate) {
    const countdownElement = document.getElementById("countdown");

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        countdownElement.style.transform = "scale(1.1)";

        setTimeout(() => {
            countdownElement.style.transform = "scale(1)";
        }, 200);

        if (distance < 0) {
            clearInterval(x);
            countdownElement.innerHTML = "Event Started!";
            countdownElement.style.backgroundColor = "#2ed573";
        }
    }

    const x = setInterval(updateCountdown, 1000);
}

// Initialize countdown when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set the event date to March 14, 2025
    const eventDate = new Date("February 13, 2026 12:15:00").getTime();
    startCountdown(eventDate);
});

document.addEventListener("keydown", function (e) {
    if (
      e.ctrlKey && (e.key === 's' || e.key === 'u' || e.key === 'c') ||
      e.key === 'F12'
    ) {
      e.preventDefault();
      return false;
    }
  });
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });