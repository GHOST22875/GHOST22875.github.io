// Анимация счетчиков статистики
function animateCounters() {
    const counters = document.querySelectorAll('.about-stats-section .stat-number');
    const speed = 50;
    
    counters.forEach(counter => {
        // Получаем целевое значение
        const originalText = counter.getAttribute('data-original') || counter.innerText;
        let target;
        let hasPlus = false;
        let hasSlash = false;
        let suffix = '';
        
        // Определяем формат числа
        if (originalText.includes('+')) {
            hasPlus = true;
            target = parseInt(originalText.replace('+', ''));
            suffix = '+';
        } else if (originalText.includes('/7')) {
            hasSlash = true;
            target = parseInt(originalText.replace('/7', ''));
            suffix = '/7';
        } else {
            target = parseInt(originalText);
        }
        
        if (isNaN(target)) return;
        
        const currentText = counter.innerText;
        let current;
        
        if (currentText.includes('+')) {
            current = parseInt(currentText.replace('+', ''));
        } else if (currentText.includes('/7')) {
            current = parseInt(currentText.replace('/7', ''));
        } else {
            current = parseInt(currentText) || 0;
        }
        
        const increment = target / speed;
        
        if (current < target) {
            let newValue = Math.ceil(current + increment);
            if (hasPlus) {
                counter.innerText = newValue + '+';
            } else if (hasSlash) {
                counter.innerText = newValue + '/7';
            } else {
                counter.innerText = newValue;
            }
            setTimeout(() => animateCounters(), 20);
        } else {
            // Устанавливаем финальное значение
            if (hasPlus) {
                counter.innerText = target + '+';
            } else if (hasSlash) {
                counter.innerText = target + '/7';
            } else {
                counter.innerText = target;
            }
        }
    });
}

// Запускаем анимацию при скролле до секции статистики
function startCountersWhenVisible() {
    const statsSection = document.querySelector('.about-stats-section');
    if (!statsSection) return;
    
    // Сохраняем оригинальные значения
    const counters = document.querySelectorAll('.about-stats-section .stat-number');
    counters.forEach(counter => {
        if (!counter.getAttribute('data-original')) {
            counter.setAttribute('data-original', counter.innerText);
        }
        // Устанавливаем начальное значение 0 для анимации
        const text = counter.getAttribute('data-original');
        if (text.includes('+')) {
            counter.innerText = '0+';
        } else if (text.includes('/7')) {
            counter.innerText = '0/7';
        } else {
            counter.innerText = '0';
        }
    });
    
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
});