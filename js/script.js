// ===== SLIDER (auto + arrows) =====
document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector("#slider .slides-wrapper");
    const slides = document.querySelectorAll("#slider .slide");
    const prevBtn = document.querySelector("#slider .arrow-left");
    const nextBtn = document.querySelector("#slider .arrow-right");

    if (!wrapper || slides.length === 0) return;

    let index = 0;
    let timer = null;

    function goTo(i) {
        index = (i + slides.length) % slides.length;
        wrapper.style.transform = `translateX(-${index * 100}%)`;
    }

    function start() {
        stop();
        timer = setInterval(() => goTo(index + 1), 4000);
    }

    function stop() {
        if (timer) clearInterval(timer);
    }

    prevBtn.addEventListener("click", () => { goTo(index - 1); start(); });
    nextBtn.addEventListener("click", () => { goTo(index + 1); start(); });

    goTo(0);
    start();
});

// ===== CARD click expand =====
function toggleCard(card) {
    card.classList.toggle("active");
}
