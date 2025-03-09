// Ambil elemen sidebar, overlay, dan tombol menu
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const menuButton = document.querySelector(".menu-toggle"); // Tombol ☰
const closeSidebarButton = document.querySelector(".close-sidebar"); // Tombol ✖

// Saat tombol ☰ diklik, tampilkan sidebar
menuButton.addEventListener("click", () => {
    sidebar.classList.add("active");
    overlay.classList.add("active");
});

// Saat tombol ✖ atau overlay diklik, sembunyikan sidebar
[overlay, closeSidebarButton].forEach(el => {
    el.addEventListener("click", () => {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    });
});

// Tema Terang & Gelap
const themeToggle = document.querySelector(".theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// Simpan tema saat reload
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

// FAQ - Toggle pertanyaan dan jawaban
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle("show");
    });
});
const tooltip = document.querySelector(".floating-tooltip");
const addButton = document.querySelector(".add-btn");

addButton.addEventListener("click", () => {
    tooltip.style.opacity = "0";
    tooltip.style.transform = "translateY(10px)";
    setTimeout(() => {
        tooltip.style.display = "none";
    }, 500); // Hilang setelah 0.5 detik
});