document.addEventListener('DOMContentLoaded', function() {
    // Основные элементы
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');
    
    // ===========================================
    // ИНИЦИАЛИЗАЦИЯ ТЕМЫ
    // ===========================================
    function initTheme() {
        // Проверяем сохраненную тему в localStorage
        const currentTheme = localStorage.getItem('theme');
        
        // Проверяем предпочтения системы
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Устанавливаем тему
        if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
            body.classList.add('dark-theme');
            if (themeIcon) themeIcon.textContent = '🌕';
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-theme');
            if (themeIcon) themeIcon.textContent = '🌑';
            localStorage.setItem('theme', 'light');
        }
    }
    
    // ===========================================
    // ПЕРЕКЛЮЧЕНИЕ ТЕМЫ
    // ===========================================
    function toggleTheme() {
        body.classList.toggle('dark-theme');
        
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            if (themeIcon) themeIcon.textContent = '🌕';
        } else {
            localStorage.setItem('theme', 'light');
            if (themeIcon) themeIcon.textContent = '🌑';
        }
    }
    
    // ===========================================
    // СКРОЛЛ НАВИГАЦИИ
    // ===========================================
    function initNavbarScroll() {
        if (!navbar) return;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    // ===========================================
    // МОБИЛЬНОЕ МЕНЮ
    // ===========================================
    function initMobileMenu() {
        if (!mobileMenuToggle || !navLinks) return;
        
        // Функция для открытия меню
        function openMenu() {
            navLinks.classList.add('active');
            mobileMenuToggle.classList.add('active');
            body.classList.add('menu-open');
            
            // Блокируем скролл
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
            
            // Анимация бургер-иконки
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        }
        
        // Функция для закрытия меню
        function closeMenu() {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            body.classList.remove('menu-open');
            
            // Возвращаем скролл
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
            
            // Возвращаем иконку
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
        
        // Переключение меню
        function toggleMenu() {
            if (navLinks.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        }
        
        // Событие на кнопку меню
        mobileMenuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });
        
        // Закрытие меню при клике на ссылку
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    closeMenu();
                }
            });
        });
        
        // Закрытие меню при клике вне его
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && 
                !navLinks.contains(e.target) && 
                !mobileMenuToggle.contains(e.target)) {
                closeMenu();
            }
        });
        
        // Закрытие меню при ресайзе
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
                closeMenu();
            }
        });
        
        // Закрытие меню при нажатии ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                closeMenu();
            }
        });
    }
    
    // ===========================================
    // СЛАЙДЕР НА ГЛАВНОЙ
    // ===========================================
    function initSlider() {
        const slides = document.querySelectorAll('.slide');
        if (slides.length === 0) return;
        
        let currentSlide = 0;
        let slideInterval;

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
        function startSlider() {
            if (slideInterval) clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 5000);
        }

        // Останавливаем слайдер при наведении
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.addEventListener('mouseenter', () => {
                if (slideInterval) clearInterval(slideInterval);
            });
            
            heroSection.addEventListener('mouseleave', startSlider);
        }

        // Инициализация
        showSlide(0);
        startSlider();
        
        return () => {
            if (slideInterval) clearInterval(slideInterval);
        };
    }
    
    // ===========================================
    // АКТИВНАЯ СТРАНИЦА В НАВИГАЦИИ
    // ===========================================
    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinksAll = document.querySelectorAll('.nav-links a');
        
        navLinksAll.forEach(link => {
            link.classList.remove('active');
            const linkHref = link.getAttribute('href');
            const linkPage = linkHref.startsWith('/') ? linkHref.substring(1) : linkHref;
            
            if (linkPage === currentPage || 
                (currentPage === '' && linkPage === 'index.html') ||
                (linkPage === '' && currentPage === 'index.html')) {
                link.classList.add('active');
            }
        });
    }
    
    // ===========================================
    // ИНИЦИАЛИЗАЦИЯ ВСЕХ ФУНКЦИЙ
    // ===========================================
    
    // Инициализация темы
    initTheme();
    
    // Инициализация навигации
    initNavbarScroll();
    
    // Инициализация мобильного меню
    initMobileMenu();
    
    // Инициализация слайдера
    const stopSlider = initSlider();
    
    // Установка активной ссылки
    setActiveNavLink();
    
    // ===========================================
    // ОБРАБОТЧИКИ СОБЫТИЙ
    // ===========================================
    
    // Переключение темы
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // ===========================================
    // ДОПОЛНИТЕЛЬНЫЕ ФУНКЦИИ
    // ===========================================
    
    // Фильтрация проектов
    const projectFilterButtons = document.querySelectorAll('.projects-filter .filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (projectFilterButtons.length > 0 && projectCards.length > 0) {
        projectFilterButtons.forEach(button => {
            button.addEventListener('click', () => {
                projectFilterButtons.forEach(btn => btn.classList.remove('active'));
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
    
    // Фильтрация материалов
    const materialFilterButtons = document.querySelectorAll('.materials-filter .filter-btn');
    const materialCards = document.querySelectorAll('.material-card');
    
    if (materialFilterButtons.length > 0 && materialCards.length > 0) {
        materialFilterButtons.forEach(button => {
            button.addEventListener('click', () => {
                materialFilterButtons.forEach(btn => btn.classList.remove('active'));
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
    
    // Очистка
    window.addEventListener('beforeunload', () => {
        if (stopSlider) stopSlider();
    });
});

// Функция для FAQ
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            const toggle = item.querySelector('.faq-toggle');
            
            if (answer) {
                answer.style.maxHeight = '0';
                answer.style.opacity = '0';
            }
            
            if (question && answer) {
                question.addEventListener('click', () => {
                    const isOpen = answer.style.maxHeight !== '0px' && answer.style.maxHeight !== '';
                    
                    // Закрываем другие вопросы
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
                    
                    // Переключаем текущий
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

// Инициализация FAQ
document.addEventListener('DOMContentLoaded', function() {
    initFAQ();
});
