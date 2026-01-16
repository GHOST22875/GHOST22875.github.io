// Анимация счетчиков статистики
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 1);
        } else {
            counter.innerText = target;
        }
    });
}

// Запускаем анимацию при скролле до секции
function startCountersWhenVisible() {
    const statsSection = document.querySelector('.about-section');
    const statsSectionPosition = statsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (statsSectionPosition < screenPosition) {
        animateCounters();
        window.removeEventListener('scroll', startCountersWhenVisible);
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    // Анимация счетчиков
    window.addEventListener('scroll', startCountersWhenVisible);
    
    // Проверяем, если секция уже видна при загрузке
    startCountersWhenVisible();
    
    // Инициализация слайдера сертификатов (можно подключить библиотеку или сделать простой скролл)
    // В данном случае используется CSS scroll-snap
});
