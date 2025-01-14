// script.js
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".clickable");
    const popups = document.querySelectorAll(".popup");
    const closeButtons = document.querySelectorAll(".popup .close");

    // Show popup on item click
    items.forEach(item => {
        item.addEventListener("click", () => {
            const popupId = item.getAttribute("data-popup");
            const popup = document.getElementById(popupId);
            if (popup) {
                popup.style.display = "block";
            }
        });
    });

    // Close popup on clicking the close button
    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.closest(".popup").style.display = "none";
        });
    });

    // Close popup if clicking outside the content
    window.addEventListener("click", event => {
        popups.forEach(popup => {
            if (event.target === popup) {
                popup.style.display = "none";
            }
        });
    });
});
