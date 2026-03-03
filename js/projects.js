// Данные проектов с несколькими изображениями
const projectsData = {
    "Дом 'Северный'": {
        images: [
            'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://i.pinimg.com/736x/02/2d/14/022d1470d1410718c857f77e86a99049.jpg',
            'https://i.pinimg.com/1200x/9f/8d/9f/9f8d9fabbacb8e6145caf82c13e89f47.jpg'
        ],
        area: '120 м²',
        time: '3 месяца',
        price: 'от 1 800 000 ₽',
        description: 'Просторный двухэтажный дом в современном стиле с панорамными окнами. Идеальное решение для семьи из 4-5 человек. Дом построен с использованием энергоэффективных технологий и качественных материалов.',
        features: [
            '3 спальни, 2 санузла',
            'Просторная гостиная с камином',
            'Кухня-столовая',
            'Терраса с выходом в сад',
            'Гараж на 2 автомобиля',
            'Энергоэффективные технологии',
            'Панорамные окна',
            'Система "умный дом"'
        ]
    },
    "Дом 'Лесной'": {
        images: [
            'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://i.pinimg.com/736x/02/2d/14/022d1470d1410718c857f77e86a99049.jpg',
            'https://i.pinimg.com/1200x/9f/8d/9f/9f8d9fabbacb8e6145caf82c13e89f47.jpg'
        ],
        area: '120 м²',
        time: '3 месяца',
        price: 'от 1 800 000 ₽',
        description: 'Просторный двухэтажный дом в современном стиле с панорамными окнами. Идеальное решение для семьи из 4-5 человек. Дом построен с использованием энергоэффективных технологий и качественных материалов.',
        features: [
            '3 спальни, 2 санузла',
            'Просторная гостиная с камином',
            'Кухня-столовая',
            'Терраса с выходом в сад',
            'Гараж на 2 автомобиля',
            'Энергоэффективные технологии',
            'Панорамные окна',
            'Система "умный дом"'
        ]
    },
    "Дом 'Солнечный'": {
        images: [
            'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://i.pinimg.com/736x/02/2d/14/022d1470d1410718c857f77e86a99049.jpg',
            'https://i.pinimg.com/1200x/9f/8d/9f/9f8d9fabbacb8e6145caf82c13e89f47.jpg'
        ],
        area: '120 м²',
        time: '3 месяца',
        price: 'от 1 800 000 ₽',
        description: 'Просторный двухэтажный дом в современном стиле с панорамными окнами. Идеальное решение для семьи из 4-5 человек. Дом построен с использованием энергоэффективных технологий и качественных материалов.',
        features: [
            '3 спальни, 2 санузла',
            'Просторная гостиная с камином',
            'Кухня-столовая',
            'Терраса с выходом в сад',
            'Гараж на 2 автомобиля',
            'Энергоэффективные технологии',
            'Панорамные окна',
            'Система "умный дом"'
        ]
    },
    "Дом 'Уютный'": {
        images: [
            'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://i.pinimg.com/736x/02/2d/14/022d1470d1410718c857f77e86a99049.jpg',
            'https://i.pinimg.com/1200x/9f/8d/9f/9f8d9fabbacb8e6145caf82c13e89f47.jpg'
        ],
        area: '120 м²',
        time: '3 месяца',
        price: 'от 1 800 000 ₽',
        description: 'Просторный двухэтажный дом в современном стиле с панорамными окнами. Идеальное решение для семьи из 4-5 человек. Дом построен с использованием энергоэффективных технологий и качественных материалов.',
        features: [
            '3 спальни, 2 санузла',
            'Просторная гостиная с камином',
            'Кухня-столовая',
            'Терраса с выходом в сад',
            'Гараж на 2 автомобиля',
            'Энергоэффективные технологии',
            'Панорамные окна',
            'Система "умный дом"'
        ]
    },
    "Дом 'Современный'": {
        images: [
            'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://i.pinimg.com/736x/02/2d/14/022d1470d1410718c857f77e86a99049.jpg',
            'https://i.pinimg.com/1200x/9f/8d/9f/9f8d9fabbacb8e6145caf82c13e89f47.jpg'
        ],
        area: '120 м²',
        time: '3 месяца',
        price: 'от 1 800 000 ₽',
        description: 'Просторный двухэтажный дом в современном стиле с панорамными окнами. Идеальное решение для семьи из 4-5 человек. Дом построен с использованием энергоэффективных технологий и качественных материалов.',
        features: [
            '3 спальни, 2 санузла',
            'Просторная гостиная с камином',
            'Кухня-столовая',
            'Терраса с выходом в сад',
            'Гараж на 2 автомобиля',
            'Энергоэффективные технологии',
            'Панорамные окна',
            'Система "умный дом"'
        ]
    },
    "Дом 'Классика'": {
        images: [
            'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://i.pinimg.com/736x/02/2d/14/022d1470d1410718c857f77e86a99049.jpg',
            'https://i.pinimg.com/1200x/9f/8d/9f/9f8d9fabbacb8e6145caf82c13e89f47.jpg'
        ],
        area: '120 м²',
        time: '3 месяца',
        price: 'от 1 800 000 ₽',
        description: 'Просторный двухэтажный дом в современном стиле с панорамными окнами. Идеальное решение для семьи из 4-5 человек. Дом построен с использованием энергоэффективных технологий и качественных материалов.',
        features: [
            '3 спальни, 2 санузла',
            'Просторная гостиная с камином',
            'Кухня-столовая',
            'Терраса с выходом в сад',
            'Гараж на 2 автомобиля',
            'Энергоэффективные технологии',
            'Панорамные окна',
            'Система "умный дом"'
        ]
    },
    "Фасад 'Скандинавский'": {
        images: [
            './image/facade3/photo_2025-11-19_10-39-37.jpg',
            './image/facade3/photo_2025-11-19_10-39-57.jpg',
            './image/facade3/photo_2025-11-19_10-39-58.jpg',
            './image/facade3/photo_2025-11-19_10-39-59.jpg',
            './image/facade3/photo_2025-11-19_10-40-03.jpg'
        ],
        area: '85 м²',
        time: '3 недели',
        price: 'от 450 000 ₽',
        description: 'Современный скандинавский стиль в отделке фасада. Использование качественных материалов и современных технологий утепления.',
        features: [
            'Утепление минеральной ватой',
            'Вентилируемый фасад',
            'Деревянная обрешетка',
            'Фиброцементные панели',
            'Пароизоляция',
            'Ветрозащита',
            'Декоративные элементы',
            'Окраска в 2 слоя'
        ]
    },
    "Фасад 'Классический'": {
        images: [
            './image/facade1/5256075123540822993.jpg',
            './image/facade1/5256075123540822992.jpg',
            './image/facade1/5256075123540822991.jpg'
        ],
        area: '120 м²',
        time: '4 недели',
        price: 'от 680 000 ₽',
        description: 'Классический стиль отделки фасада с использованием штукатурки и декоративных элементов. Элегантное решение для загородного дома.',
        features: [
            'Утепление пенополистиролом',
            'Армирующая сетка',
            'Декоративная штукатурка',
            'Лепнина',
            'Русты',
            'Карнизы',
            'Цоколь из камня',
            'Окраска фасадной краской'
        ]
    },
    "Фасад 'Современный'": {
        images: [
            './image/facade2/5256075123540823007.jpg',
            './image/facade2/5256075123540822998.jpg',
            './image/facade2/5256075123540823009.jpg'
        ],
        area: '95 м²',
        time: '2.5 недели',
        price: 'от 520 000 ₽',
        description: 'Современный минималистичный фасад с использованием металлокассет и композитных материалов. Стильное решение для современного дома.',
        features: [
            'Металлокассеты',
            'Утепление базальтовой ватой',
            'Ветрозащитная мембрана',
            'Алюминиевый композит',
            'Скрытый крепеж',
            'Светодиодная подсветка',
            'Плоские линии',
            'Контрастные цвета'
        ]
    }
};

// Переменные для управления галереей
let currentImageIndex = 0;
let currentProjectImages = [];
let imageLoading = false;
let touchStartX = 0;
let touchEndX = 0;

// Функция для открытия модального окна проекта
function openProjectModal(projectName) {
    console.log('Открываем модальное окно для проекта:', projectName);
    
    // Получаем данные проекта
    const projectData = projectsData[projectName];
    
    if (!projectData) {
        console.error('Данные проекта не найдены:', projectName);
        return;
    }
    
    // Сохраняем текущие изображения проекта
    currentProjectImages = projectData.images;
    currentImageIndex = 0;
    imageLoading = true;
    
    // Получаем элементы DOM
    const mainImage = document.getElementById('modalProjectImage');
    const modal = document.getElementById('projectModal');
    const modalBody = document.querySelector('#projectModal .modal-gallery');
    const loadingDiv = document.querySelector('#projectModal .image-loading');
    
    if (!mainImage || !modal) {
        console.error('Элементы модального окна не найдены');
        return;
    }
    
    // Показываем индикатор загрузки
    if (loadingDiv) {
        loadingDiv.style.display = 'block';
    }
    
    // Устанавливаем основное изображение
    mainImage.src = currentProjectImages[currentImageIndex];
    mainImage.alt = projectName;
    mainImage.style.opacity = '0';
    
    // Обработчик загрузки изображения
    mainImage.onload = function() {
        if (loadingDiv) {
            loadingDiv.style.display = 'none';
        }
        this.style.opacity = '1';
        this.classList.add('image-slide-right');
        imageLoading = false;
        
        setTimeout(() => {
            this.classList.remove('image-slide-right');
        }, 300);
    };
    
    mainImage.onerror = function() {
        console.error('Ошибка загрузки изображения:', this.src);
        if (loadingDiv) {
            loadingDiv.style.display = 'none';
        }
        this.alt = 'Изображение не загружено';
        this.style.opacity = '1';
        imageLoading = false;
    };
    
    // Заполняем модальное окно данными
    document.getElementById('modalProjectTitle').textContent = projectName;
    document.getElementById('modalProjectArea').textContent = projectData.area;
    document.getElementById('modalProjectTime').textContent = projectData.time;
    document.getElementById('modalProjectPrice').textContent = projectData.price;
    document.getElementById('modalProjectDescription').textContent = projectData.description;
    
    // Очищаем и добавляем особенности
    const featuresList = document.getElementById('modalProjectFeatures');
    featuresList.innerHTML = '';
    projectData.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    // Создаем миниатюры
    const thumbnailsContainer = document.getElementById('modalProjectThumbnails');
    thumbnailsContainer.innerHTML = '';
    
    projectData.images.forEach((imageUrl, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail';
        if (index === 0) thumbnail.classList.add('active');
        
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = `${projectName} - фото ${index + 1}`;
        img.loading = 'lazy';
        
        thumbnail.appendChild(img);
        thumbnail.addEventListener('click', () => {
            changeProjectImage(index);
        });
        
        thumbnailsContainer.appendChild(thumbnail);
    });
    
    // Показываем/скрываем стрелки
    updateProjectNavigationButtons();
    
    // Показываем модальное окно
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Функция для смены изображения
function changeProjectImage(index) {
    if (index < 0 || index >= currentProjectImages.length || imageLoading) return;
    
    imageLoading = true;
    currentImageIndex = index;
    const mainImage = document.getElementById('modalProjectImage');
    const loadingDiv = document.querySelector('#projectModal .image-loading');
    
    if (mainImage && loadingDiv) {
        loadingDiv.style.display = 'block';
        mainImage.style.opacity = '0';
        
        setTimeout(() => {
            mainImage.src = currentProjectImages[currentImageIndex];
            
            mainImage.onload = function() {
                loadingDiv.style.display = 'none';
                this.style.opacity = '1';
                this.classList.add('image-slide-right');
                imageLoading = false;
                
                // Обновляем активную миниатюру
                document.querySelectorAll('#projectModal .thumbnail').forEach((thumb, i) => {
                    thumb.classList.toggle('active', i === currentImageIndex);
                });
                
                setTimeout(() => {
                    this.classList.remove('image-slide-right');
                }, 300);
            };
        }, 200);
    }
}

// Функция для перехода к следующему изображению
function nextProjectImage() {
    if (currentImageIndex < currentProjectImages.length - 1) {
        changeProjectImage(currentImageIndex + 1);
    } else {
        changeProjectImage(0);
    }
}

// Функция для перехода к предыдущему изображению
function prevProjectImage() {
    if (currentImageIndex > 0) {
        changeProjectImage(currentImageIndex - 1);
    } else {
        changeProjectImage(currentProjectImages.length - 1);
    }
}

// Обновление кнопок навигации
function updateProjectNavigationButtons() {
    const prevArrow = document.querySelector('#projectModal .prev-arrow');
    const nextArrow = document.querySelector('#projectModal .next-arrow');
    
    if (currentProjectImages.length <= 1) {
        if (prevArrow) prevArrow.style.display = 'none';
        if (nextArrow) nextArrow.style.display = 'none';
    } else {
        if (prevArrow) prevArrow.style.display = 'flex';
        if (nextArrow) nextArrow.style.display = 'flex';
    }
}

// Закрытие модального окна
function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Сбрасываем состояние
    currentImageIndex = 0;
    currentProjectImages = [];
    imageLoading = false;
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    console.log('Инициализация обработчиков проектов...');
    
    // Кнопки "Смотреть фото"
    document.querySelectorAll('.project-view-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const projectName = this.getAttribute('data-project');
            openProjectModal(projectName);
        });
    });
    
    // Закрытие по крестику
    const closeBtn = document.querySelector('#projectModal .modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeProjectModal);
    }
    
    // Закрытие по клику вне контента
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeProjectModal();
            }
        });
    }
    
    // Навигация стрелками
    document.querySelector('#projectModal .prev-arrow')?.addEventListener('click', (e) => {
        e.stopPropagation();
        prevProjectImage();
    });
    
    document.querySelector('#projectModal .next-arrow')?.addEventListener('click', (e) => {
        e.stopPropagation();
        nextProjectImage();
    });
    
    // Клавиши
    document.addEventListener('keydown', function(e) {
        const modal = document.getElementById('projectModal');
        if (modal && modal.style.display === 'flex') {
            if (e.key === 'Escape') {
                closeProjectModal();
            } else if (e.key === 'ArrowLeft') {
                prevProjectImage();
            } else if (e.key === 'ArrowRight') {
                nextProjectImage();
            }
        }
    });
    
    // Свайпы для мобильных
    const modalImage = document.getElementById('modalProjectImage');
    if (modalImage) {
        modalImage.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        modalImage.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    nextProjectImage();
                } else {
                    prevProjectImage();
                }
            }
        });
    }
    
    // Фильтрация проектов
    const filterButtons = document.querySelectorAll('.projects-filter .filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'flex';
                } else {
                    const categories = card.getAttribute('data-category').split(' ');
                    card.style.display = categories.includes(filterValue) ? 'flex' : 'none';
                }
            });
        });
    });
});
