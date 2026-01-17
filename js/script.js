document.addEventListener('DOMContentLoaded', function() {
    // Основные элементы
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');
    
    // Создаем оверлей для меню
    const menuOverlay = document.createElement('div');
    menuOverlay.className = 'menu-overlay';
    document.body.appendChild(menuOverlay);
    
    // Создаем контейнер для меню контента
    const menuContent = document.createElement('div');
    menuContent.className = 'menu-content';
    
    // Перемещаем все элементы меню в контейнер
    if (navLinks) {
        while (navLinks.children.length > 0) {
            menuContent.appendChild(navLinks.children[0]);
        }
        navLinks.appendChild(menuContent);
    }
    
    // ===========================================
    // ФУНКЦИЯ ДЛЯ ОТКРЫТИЯ МЕНЮ
    // ===========================================
    function openMobileMenu() {
        if (!navLinks || !mobileMenuToggle) return;
        
        // Открываем меню
        navLinks.classList.add('active');
        mobileMenuToggle.classList.add('active');
        body.classList.add('menu-open');
        menuOverlay.classList.add('active');
        
        // Блокируем скролл на всем документе
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
        
        // Анимация бургер-иконки
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
        
        // Меняем цвет иконок при открытом меню
        if (body.classList.contains('dark-theme')) {
            spans.forEach(span => span.style.backgroundColor = '#ffffff');
        } else {
            spans.forEach(span => span.style.backgroundColor = '#2c3e50');
        }
        
        // Анимация появления элементов меню с задержкой
        const menuItems = navLinks.querySelectorAll('li');
        menuItems.forEach((item, index) => {
            item.style.transitionDelay = `${0.1 + (index * 0.05)}s`;
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        });
    }
    
    // ===========================================
    // ФУНКЦИЯ ДЛЯ ЗАКРЫТИЯ МЕНЮ
    // ===========================================
    function closeMobileMenu() {
        if (!navLinks || !navLinks.classList.contains('active')) return;
        
        // Анимация скрытия элементов меню
        const menuItems = navLinks.querySelectorAll('li');
        menuItems.forEach((item) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transitionDelay = '0s';
        });
        
        // Небольшая задержка перед скрытием меню
        setTimeout(() => {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            body.classList.remove('menu-open');
            menuOverlay.classList.remove('active');
            
            // Возвращаем иконку в исходное состояние
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
            
            // Возвращаем цвет иконок
            if (body.classList.contains('dark-theme')) {
                spans.forEach(span => span.style.backgroundColor = '#ffffff');
            } else {
                spans.forEach(span => span.style.backgroundColor = '#2c3e50');
            }
            
            // Возвращаем скролл
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
            
            // Возвращаем нормальное состояние элементов
            setTimeout(() => {
                menuItems.forEach((item) => {
                    item.style.opacity = '';
                    item.style.transform = '';
                });
            }, 300);
        }, 300);
    }
    
    // ===========================================
    // ФУНКЦИЯ ДЛЯ ПЕРЕКЛЮЧЕНИЯ МЕНЮ
    // ===========================================
    function toggleMobileMenu() {
        if (navLinks.classList.contains('active')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }
    
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

        // Инициализация первого слайда и запуск слайдера
        showSlide(0);
        startSlider();
        
        // Возвращаем функцию для остановки при необходимости
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
            
            // Сравниваем текущую страницу с ссылкой
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
    
    // Инициализация слайдера (только на главной)
    const stopSlider = initSlider();
    
    // Установка активной ссылки в навигации
    setActiveNavLink();
    
    // ===========================================
    // ОБРАБОТЧИКИ СОБЫТИЙ
    // ===========================================
    
    // Переключение мобильного меню
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMobileMenu();
        });
    }
    
    // Переключение темы
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Закрытие меню при клике на ссылку
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            // Проверяем, не является ли ссылка переключателем темы
            if (!link.closest('.theme-toggle')) {
                closeMobileMenu();
            }
        });
    });
    
    // Закрытие меню при клике на оверлей
    menuOverlay.addEventListener('click', closeMobileMenu);
    
    // Закрытие меню при клике вне его
    document.addEventListener('click', (e) => {
        if (navLinks && 
            navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            (!mobileMenuToggle || !mobileMenuToggle.contains(e.target)) &&
            (!document.querySelector('.logo') || !document.querySelector('.logo').contains(e.target))) {
            closeMobileMenu();
        }
    });
    
    // Закрытие меню при изменении размера окна
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
    
    // Закрытие меню при нажатии Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });
    
    // Логотип для мобильного меню
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function(e) {
            // Если меню открыто на мобильном, закрываем его
            if (window.innerWidth <= 768 && navLinks && navLinks.classList.contains('active')) {
                e.preventDefault();
                closeMobileMenu();
            }
        });
    }
    
    // ===========================================
    // ДОПОЛНИТЕЛЬНЫЕ ФУНКЦИИ
    // ===========================================
    
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
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        const cardCategories = card.getAttribute('data-category').split(' ');
                        if (cardCategories.includes(filterValue)) {
                            card.style.display = 'block';
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'translateY(0)';
                            }, 10);
                        } else {
                            card.style.opacity = '0';
                            card.style.transform = 'translateY(20px)';
                            setTimeout(() => {
                                card.style.display = 'none';
                            }, 300);
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
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        const cardCategory = card.getAttribute('data-category');
                        if (cardCategory === filterValue) {
                            card.style.display = 'block';
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'translateY(0)';
                            }, 10);
                        } else {
                            card.style.opacity = '0';
                            card.style.transform = 'translateY(20px)';
                            setTimeout(() => {
                                card.style.display = 'none';
                            }, 300);
                        }
                    }
                });
            });
        });
    }
    
    // Очистка при разгрузке страницы
    window.addEventListener('beforeunload', () => {
        if (stopSlider) stopSlider();
    });
});

// ===========================================
// ФУНКЦИЯ ДЛЯ FAQ (работает на всех страницах)
// ===========================================
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
    initFAQ();
});

// ===========================================
// ГАЛЕРЕЯ (если есть на странице)
// ===========================================
function initGalleryIfExists() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length > 0) {
        // Проверяем, подключен ли уже скрипт галереи
        if (typeof initGallery === 'function') {
            initGallery();
        } else {
            console.log('Галерея найдена, но скрипт не подключен');
        }
    }
}

// Инициализируем галерею при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initGalleryIfExists();
});
