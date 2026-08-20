// ============================================================
// HERO SLIDER
// ============================================================
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.hero-slider');
    if (!slider) return;

    const slides = slider.querySelector('.slides');
    const slideItems = slider.querySelectorAll('.slide');
    const prevBtn = slider.querySelector('.prev');
    const nextBtn = slider.querySelector('.next');
    const dots = slider.querySelectorAll('.slider-dots span');

    let currentIndex = 0;
    const totalSlides = slideItems.length;
    let autoPlayInterval;

    // تابع نمایش اسلاید مورد نظر
    function goToSlide(index) {
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;
        currentIndex = index;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        // به‌روزرسانی دات‌ها
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    // رویدادهای دکمه‌ها
    if (prevBtn) {
        prevBtn.addEventListener('click', function () {
            clearInterval(autoPlayInterval);
            goToSlide(currentIndex - 1);
            startAutoPlay();
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            clearInterval(autoPlayInterval);
            goToSlide(currentIndex + 1);
            startAutoPlay();
        });
    }

    // رویدادهای دات‌ها
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            clearInterval(autoPlayInterval);
            goToSlide(index);
            startAutoPlay();
        });
    });

    // پخش خودکار
    function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 5000);
    }

    // شروع پخش خودکار
    startAutoPlay();

    // توقف اتوماتیک هنگام هاور
    slider.addEventListener('mouseenter', function () {
        clearInterval(autoPlayInterval);
    });
    slider.addEventListener('mouseleave', function () {
        startAutoPlay();
    });
});

// ============================================================
// ACTIVE NAV LINK (بر اساس صفحه‌ی جاری)
// ============================================================
document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
