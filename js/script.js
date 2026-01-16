document.addEventListener('DOMContentLoaded', function() {

    // Навигационное меню
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const logo = document.querySelector('.logo');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    // Слайдер - только для главной страницы
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let currentSlide = 0;

        function showSlide(n) {
            slides.forEach(slide => {
                slide.classList.remove('active');
            });
            currentSlide = (n + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        // Автоматическое переключение слайдов
        let slideInterval = setInterval(nextSlide, 5000);

        // Инициализация первого слайда
        showSlide(0);
    }

    // Переключение темы - ДОЛЖНО РАБОТАТЬ НА ВСЕХ СТРАНИЦАХ
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon');
    
    function initTheme() {
        // Проверяем сохраненную тему
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            body.classList.add('dark-theme');
            if (themeIcon) themeIcon.textContent = '🌕';
        } else {
            if (themeIcon) themeIcon.textContent = '🌑';
        }
    }
    
    // Инициализируем тему сразу
    initTheme();
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
            
            if (body.classList.contains('dark-theme')) {
                localStorage.setItem('theme', 'dark');
                if (themeIcon) themeIcon.textContent = '🌕';
            } else {
                localStorage.setItem('theme', 'light');
                if (themeIcon) themeIcon.textContent = '🌑';
            }
        });
    }
    
    // Мобильное меню
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            
            // Блокируем скролл тела при открытом меню
            if (navLinks.classList.contains('active')) {
                document.body.classList.add('menu-open');
            } else {
                document.body.classList.remove('menu-open');
            }
            
            // Анимация иконки бургер-меню
            const spans = mobileMenuToggle.querySelectorAll('span');
            if (mobileMenuToggle.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });
    }
    
    // Закрываем меню при клике на ссылку
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
                
                if (mobileMenuToggle) {
                    const spans = mobileMenuToggle.querySelectorAll('span');
                    spans[0].style.transform = '';
                    spans[1].style.opacity = '';
                    spans[2].style.transform = '';
                }
            }
        });
    });
    
    // Закрываем меню при клике вне его
    document.addEventListener('click', (e) => {
        if (navLinks && navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            (!mobileMenuToggle || !mobileMenuToggle.contains(e.target))) {
            navLinks.classList.remove('active');
            if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
            document.body.classList.remove('menu-open');
            
            if (mobileMenuToggle) {
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        }
    });
    
    // Закрываем меню при изменении ориентации или размера
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
            document.body.classList.remove('menu-open');
            
            if (mobileMenuToggle) {
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        }
    });
    
    // Логотип для мобильного меню
    if (logo) {
        logo.addEventListener('click', function(e) {
            if (window.innerWidth <= 768 && navLinks && mobileMenuToggle) {
                e.preventDefault();
                navLinks.classList.toggle('active');
                mobileMenuToggle.classList.toggle('active');
                
                if (navLinks.classList.contains('active')) {
                    document.body.classList.add('menu-open');
                } else {
                    document.body.classList.remove('menu-open');
                }
            }
        });
    }

    // Фильтрация проектов (для страницы проектов)
    const projectFilterButtons = document.querySelectorAll('.projects-filter .filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (projectFilterButtons.length > 0 && projectCards.length > 0) {
        projectFilterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Убираем активный класс у всех кнопок
                projectFilterButtons.forEach(btn => btn.classList.remove('active'));
                // Добавляем активный класс текущей кнопке
                button.classList.add('active');
                
                const filterValue = button.getAttribute('data-filter');
                
                projectCards.forEach(card => {
                    if (filterValue === 'all') {
                        card.style.display = 'block';
                    } else {
                        const cardCategories = card.getAttribute('data-category').split(' ');
                        if (cardCategories.includes(filterValue)) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    }
                });
            });
        });
    }

    // Фильтрация материалов (для страницы материалов)
    const materialFilterButtons = document.querySelectorAll('.materials-filter .filter-btn');
    const materialCards = document.querySelectorAll('.material-card');
    
    if (materialFilterButtons.length > 0 && materialCards.length > 0) {
        materialFilterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Убираем активный класс у всех кнопок
                materialFilterButtons.forEach(btn => btn.classList.remove('active'));
                // Добавляем активный класс текущей кнопке
                button.classList.add('active');
                
                const filterValue = button.getAttribute('data-filter');
                
                materialCards.forEach(card => {
                    if (filterValue === 'all') {
                        card.style.display = 'block';
                    } else {
                        const cardCategory = card.getAttribute('data-category');
                        if (cardCategory === filterValue) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    }
                });
            });
        });
    }
    
    // Добавляем класс active для текущей страницы в навигации
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinksAll = document.querySelectorAll('.nav-links a');
    
    navLinksAll.forEach(link => {
        const linkHref = link.getAttribute('href');
        // Убираем слеш в начале если есть
        const linkPage = linkHref.startsWith('/') ? linkHref.substring(1) : linkHref;
        
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// Функционал для FAQ (работает на всех страницах)
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            const toggle = item.querySelector('.faq-toggle');
            
            // Закрываем все ответы при загрузке
            if (answer) {
                answer.style.maxHeight = '0';
                answer.style.opacity = '0';
            }
            
            if (question && answer) {
                question.addEventListener('click', () => {
                    const isOpen = answer.style.maxHeight !== '0px' && answer.style.maxHeight !== '';
                    
                    // Закрываем все другие открытые вопросы
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            const otherAnswer = otherItem.querySelector('.faq-answer');
                            const otherToggle = otherItem.querySelector('.faq-toggle');
                            if (otherAnswer) {
                                otherAnswer.style.maxHeight = '0';
                                otherAnswer.style.opacity = '0';
                            }
                            if (otherToggle) {
                                otherToggle.textContent = '+';
                                otherToggle.style.transform = 'rotate(0deg)';
                            }
                        }
                    });
                    
                    // Переключаем текущий вопрос
                    if (isOpen) {
                        answer.style.maxHeight = '0';
                        answer.style.opacity = '0';
                        if (toggle) {
                            toggle.textContent = '+';
                            toggle.style.transform = 'rotate(0deg)';
                        }
                    } else {
                        answer.style.maxHeight = answer.scrollHeight + 'px';
                        answer.style.opacity = '1';
                        if (toggle) {
                            toggle.textContent = '−';
                            toggle.style.transform = 'rotate(180deg)';
                        }
                    }
                });
            }
        });
    }
}

// Инициализируем FAQ при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // ... существующий код ...
    
    // Добавляем инициализацию FAQ
    initFAQ();
});

// В конец файла script.js добавить:

// Инициализация галереи если она есть на странице
function initGalleryIfExists() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length > 0) {
        // Проверяем, подключен ли уже скрипт галереи
        if (typeof initGallery === 'function') {
            initGallery();
        } else {
            // Если отдельный файл gallery.js не подключен, загружаем данные
            console.log('Галерея найдена, но скрипт не подключен');
        }
    }
}

// Инициализируем галерею при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // ... существующий код ...
    
    // Добавляем инициализацию галереи
    initGalleryIfExists();
});
