document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.querySelector(".sidebar");
    const toggleButton = document.querySelector(".toggle");

    toggleButton.addEventListener("click", function() {
        sidebar.classList.toggle("close");
    });
});

