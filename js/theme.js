// theme.js
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon');
    
    if (!themeToggle || !themeIcon) return;
    
    // Проверяем сохраненную тему
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-theme');
        themeIcon.textContent = '🌕';
    } else {
        themeIcon.textContent = '🌑';
    }
    
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            themeIcon.textContent = '🌕';
        } else {
            localStorage.setItem('theme', 'light');
            themeIcon.textContent = '🌑';
        }
    });
}

// Инициализируем при загрузке DOM
document.addEventListener('DOMContentLoaded', initTheme);
