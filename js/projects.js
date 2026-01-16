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
     "Фасад 'Классический'": {
        images: [
            './image/facade1/5256075123540822993.jpg',
            './image/facade1/5256075123540822992.jpg',
            './image/facade1/5256075123540822991.jpg'
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
     "Фасад 'Современный'": {
        images: [
            './image/facade2/5256075123540823007.jpg',
            './image/facade2/5256075123540822998.jpg',
            './image/facade2/5256075123540823009.jpg'
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
    }
    
};

// Переменные для управления галереей
let currentImageIndex = 0;
let currentProjectImages = [];

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
    
    // Устанавливаем основное изображение
    const mainImage = document.getElementById('modalProjectImage');
    if (mainImage) {
        mainImage.src = currentProjectImages[currentImageIndex];
        mainImage.alt = projectName;
    }
    
    // Заполняем модальное окно данными
    const titleElement = document.getElementById('modalProjectTitle');
    if (titleElement) titleElement.textContent = projectName;
    
    const areaElement = document.getElementById('modalProjectArea');
    if (areaElement) areaElement.textContent = projectData.area;
    
    const timeElement = document.getElementById('modalProjectTime');
    if (timeElement) timeElement.textContent = projectData.time;
    
    const priceElement = document.getElementById('modalProjectPrice');
    if (priceElement) priceElement.textContent = projectData.price;
    
    // Добавляем описание
    const descriptionElement = document.getElementById('modalProjectDescription');
    if (descriptionElement) descriptionElement.textContent = projectData.description;
    
    // Очищаем и добавляем особенности
    const featuresList = document.getElementById('modalProjectFeatures');
    if (featuresList) {
        featuresList.innerHTML = '';
        
        projectData.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
    }
    
    // Создаем миниатюры
    const thumbnailsContainer = document.getElementById('modalProjectThumbnails');
    if (thumbnailsContainer) {
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
                changeMainImage(index);
            });
            
            thumbnailsContainer.appendChild(thumbnail);
        });
    }
    
    // Обновляем состояние кнопок навигации
    updateNavigationButtons();
    
    // Показываем модальное окно
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Функция для смены основного изображения
function changeMainImage(index) {
    if (index < 0 || index >= currentProjectImages.length) return;
    
    currentImageIndex = index;
    const mainImage = document.getElementById('modalProjectImage');
    
    if (mainImage) {
        // Плавное исчезновение
        mainImage.style.opacity = '0';
        
        setTimeout(() => {
            mainImage.src = currentProjectImages[currentImageIndex];
            mainImage.style.opacity = '1';
            
            // Обновляем активную миниатюру
            document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
                thumb.classList.toggle('active', i === currentImageIndex);
            });
            
            // Обновляем состояние кнопок навигации
            updateNavigationButtons();
        }, 200);
    }
}

// Функция для перехода к следующему изображению
function nextImage() {
    if (currentImageIndex < currentProjectImages.length - 1) {
        changeMainImage(currentImageIndex + 1);
    } else {
        changeMainImage(0); // Циклическая навигация
    }
}

// Функция для перехода к предыдущему изображению
function prevImage() {
    if (currentImageIndex > 0) {
        changeMainImage(currentImageIndex - 1);
    } else {
        changeMainImage(currentProjectImages.length - 1); // Циклическая навигация
    }
}

// Функция для обновления состояния кнопок навигации
function updateNavigationButtons() {
    // Можно добавить логику для скрытия/показа кнопок если нужно
}

// Закрытие модального окна
function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Сбрасываем состояние галереи
    currentImageIndex = 0;
    currentProjectImages = [];
}

// Инициализация после полной загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM загружен, инициализация обработчиков проектов...');
    
    // Добавляем обработчики для кнопок "Смотреть фото"
    const viewButtons = document.querySelectorAll('.project-view-btn');
    console.log('Найдено кнопок просмотра:', viewButtons.length);
    
    viewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const projectName = this.getAttribute('data-project');
            console.log('Клик по кнопке просмотра:', projectName);
            
            openProjectModal(projectName);
        });
    });
    
    // Закрытие модального окна при клике на крестик
    const closeBtn = document.querySelector('.modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeProjectModal);
    }
    
    // Закрытие модального окна при клике вне его области
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeProjectModal();
            }
        });
    }
    
    // Закрытие модального окна при нажатии Escape
    document.addEventListener('keydown', function(e) {
        const modal = document.getElementById('projectModal');
        if (e.key === 'Escape' && modal && modal.style.display === 'block') {
            closeProjectModal();
        }
        
        // Навигация по галерее с помощью клавиш
        if (modal && modal.style.display === 'block') {
            if (e.key === 'ArrowLeft') {
                prevImage();
            } else if (e.key === 'ArrowRight') {
                nextImage();
            }
        }
    });
    
    // Добавляем кнопки навигации для галереи
    const modalImage = document.querySelector('.modal-image');
    if (modalImage) {
        // Проверяем, не добавлены ли уже кнопки
        if (!modalImage.querySelector('.slide-arrow')) {
            const prevArrow = document.createElement('button');
            prevArrow.className = 'slide-arrow prev-arrow';
            prevArrow.innerHTML = '‹';
            prevArrow.addEventListener('click', (e) => {
                e.stopPropagation();
                prevImage();
            });
            
            const nextArrow = document.createElement('button');
            nextArrow.className = 'slide-arrow next-arrow';
            nextArrow.innerHTML = '›';
            nextArrow.addEventListener('click', (e) => {
                e.stopPropagation();
                nextImage();
            });
            
            modalImage.appendChild(prevArrow);
            modalImage.appendChild(nextArrow);
        }
    }
    
    // Фильтрация проектов
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Убираем активный класс у всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Добавляем активный класс текущей кнопке
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    const cardCategories = card.getAttribute('data-category').split(' ');
                    if (cardCategories.includes(filterValue)) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });
});

// Функция для предзагрузки изображений
function preloadImages(images) {
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Предзагрузка изображений при загрузке страницы
window.addEventListener('load', function() {
    Object.values(projectsData).forEach(project => {
        preloadImages(project.images);
    });
});
