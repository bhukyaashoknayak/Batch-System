let icon = document.querySelector(".fa-bars");
let sidebar = document.querySelector(".side-bar");

icon.addEventListener("click", () => {
    sidebar.classList.toggle("small-sidebar");
});

