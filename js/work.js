// Данные выполненных работ (только фотографии)
const worksData = {
    "Загородный дом в Подмосковье": {
        images: [
             './image/house/photo_2026-02-05_14-46-56.jpg',
            './image/house/photo_2026-02-05_14-46-58.jpg',
            './image/house/photo_2026-02-05_14-47-00.jpg',
            './image/house/photo_2026-02-05_14-47-02.jpg',
            './image/house/photo_2026-02-05_14-47-04.jpg',
            './image/house/photo_2026-02-05_14-47-05.jpg',
            './image/house/photo_2026-02-05_14-47-06.jpg',
            './image/house/photo_2026-02-05_14-47-08.jpg',
            './image/house/photo_2026-02-05_14-47-09.jpg',
            './image/house/photo_2026-02-05_14-47-10.jpg',
            './image/house/photo_2026-02-05_14-47-11.jpg',
            './image/house/photo_2026-02-05_14-47-13.jpg'
        ],
        category: "house"
    },
    "Терраса 1": {
        images: [
            './image/facade2/5256075123540823006.jpg',
            './image/facade2/5256075123540823007.jpg',
            './image/facade2/5256075123540823008.jpg',
            './image/facade2/5256075123540823009.jpg',
            './image/facade2/5256075123540823010.jpg',
            './image/facade2/5256075123540823011.jpg',
            './image/facade2/5256075123540823012.jpg',
            './image/facade2/5256075123540823013.jpg',
            './image/facade2/5256075123540823014.jpg',
            './image/facade2/5256075123540823016.jpg'
        ],
        category: "terrace"
    },
    "Дачный дом для семьи": {
        images: [
            'https://i.pinimg.com/736x/02/2d/14/022d1470d1410718c857f77e86a99049.jpg',
            'https://i.pinimg.com/736x/5a/3d/fe/5a3dfe8d4737ed1292b5a2514e4a287f.jpg'
        ],
        category: "dacha"
    },
    "Фасад 1": {
        images: [
            './image/finishing1/photo_2026-02-05_14-40-00.jpg',
            './image/finishing1/photo_2026-02-05_14-40-02.jpg',
            './image/finishing1/photo_2026-02-05_14-40-04.jpg',
            './image/finishing1/photo_2026-02-05_14-40-07.jpg',
            './image/finishing1/photo_2026-02-05_14-40-08.jpg',
            './image/finishing1/photo_2026-02-05_14-40-10.jpg',
            './image/finishing1/photo_2026-02-05_14-40-12.jpg',
            './image/finishing1/photo_2026-02-05_14-40-14.jpg',
            './image/finishing1/photo_2026-02-05_14-40-16.jpg',
            './image/finishing1/photo_2026-02-05_14-40-18.jpg'
        ],
        category: "facade"
    },
    "Дом с мансардой": {
        images: [
            'https://i.pinimg.com/1200x/00/8f/20/008f20405aaea27836e9b66e6bdd5809.jpg',
            'https://i.pinimg.com/1200x/3d/8a/2d/3d8a2d9cd4ea0f68eac68b2d07500715.jpg'
        ],
        category: "house"
    },
    "Терраса 2": {
        images: [
             './image/facade3/photo_2025-11-19_10-39-37.jpg',
            './image/facade3/photo_2025-11-19_10-39-57.jpg',
            './image/facade3/photo_2025-11-19_10-39-58.jpg',
            './image/facade3/photo_2025-11-19_10-39-59.jpg',
            './image/facade3/photo_2025-11-19_10-40-03.jpg'
        ],
        category: "terrace"
    },
    "Коттедж в современном стиле": {
        images: [
            'https://i.pinimg.com/1200x/9f/8d/9f/9f8d9fabbacb8e6145caf82c13e89f47.jpg',
            'https://i.pinimg.com/1200x/6b/9d/01/6b9d015a5f4fcedd2d7f7d2dce78e4b7.jpg'
        ],
        category: "cottage"
    },
    "Отделка фасада деревянного дома": {
        images: [
            './image/facade2/5256075123540822998.jpg',
            './image/facade2/5256075123540823007.jpg'
        ],
        category: "cladding"
    },
    "Фасад 2": {
        images: [
            './image/finishing/photo_2026-02-05_14-45-22.jpg',
            './image/finishing/photo_2026-02-05_14-45-24.jpg',
            './image/finishing/photo_2026-02-05_14-45-25.jpg',
            './image/finishing/photo_2026-02-05_14-45-26.jpg',
            './image/finishing/photo_2026-02-05_14-45-28.jpg'
        ],
        category: "insulation"
    },
    "Облицовка фасада кирпичом": {
        images: [


            
        ],
        category: "cladding"
    },

    "Утепление пенопластом с отделкой": {
        images: [
            './image/facade3/photo_2025-11-19_10-39-37.jpg'
        ],
        category: "insulation"
    },
    "Терраса 3": {
        images: [
            './image/facade4/photo_2025-11-19_10-40-21.jpg',
            './image/facade4/photo_2025-11-19_10-40-23.jpg',
            './image/facade4/photo_2025-11-19_10-40-24.jpg',
            './image/facade4/photo_2025-11-19_10-40-26.jpg'
        ],
        category: "terrace"
    },
    "Терраса 4": {
        images: [
            './image/facade5/photo_2026-02-05_14-36-54.jpg',
            './image/facade5/photo_2026-02-05_14-36-55.jpg',
            './image/facade5/photo_2026-02-05_14-36-58.jpg',
            './image/facade5/photo_2026-02-05_14-37-00.jpg',
            './image/facade5/photo_2026-02-05_14-37-01.jpg',
            './image/facade5/photo_2026-02-05_14-37-02.jpg',
            './image/facade5/photo_2026-02-05_14-37-03.jpg',
            './image/facade5/photo_2026-02-05_14-37-04.jpg'
        ],
        category: "deck"
    },
    "Терраса 5": {
        images: [
             './image/facade1/5256075123540822991.jpg',
            './image/facade1/5256075123540822992.jpg',
            './image/facade1/5256075123540822993.jpg',
            './image/facade1/5256075123540822994.jpg',
            './image/facade1/5256075123540822995.jpg'
        ],
        category: "terrace"
    },
    "Терраса 6": {
        images: [
             './image/facade6/photo_2026-02-05_14-44-07.jpg',
            './image/facade6/photo_2026-02-05_14-44-08.jpg',
            './image/facade6/photo_2026-02-05_14-44-10.jpg',
            './image/facade6/photo_2026-02-05_14-44-54.jpg'
        ],
        category: "terrace"
    },
    "Терраса 7": {
        images: [
              './image/facade7/photo_2026-02-05_14-42-22.jpg',
            './image/facade7/photo_2026-02-05_14-42-24.jpg',
            './image/facade7/photo_2026-02-05_14-42-25.jpg',
            './image/facade7/photo_2026-02-05_14-42-26.jpg'
        ],
        category: "terrace"
    },
    "Крытая терраса с москитными сетками": {
        images: [
            'https://i.pinimg.com/1200x/9a/8b/7c/9a8b7c6d5e4f3d2c1b0a9f8e7d6c5b4a.jpg'
        ],
        category: "terrace"
    }
};
// Переменные для управления галереей
let currentWorkImageIndex = 0;
let currentWorkImages = [];

// Функция для открытия модального окна работы
function openWorkModal(workName) {
    console.log('Открываем модальное окно для работы:', workName);
    
    // Получаем данные работы
    const workData = worksData[workName];
    
    if (!workData) {
        console.error('Данные работы не найдены:', workName);
        return;
    }
    
    // Сохраняем текущие изображения работы
    currentWorkImages = workData.images;
    currentWorkImageIndex = 0;
    
    // Устанавливаем основное изображение
    const mainImage = document.getElementById('modalWorkImage');
    if (mainImage) {
        mainImage.src = currentWorkImages[currentWorkImageIndex];
        mainImage.alt = workName;
        mainImage.style.opacity = '1';
    }
    
    // Обновляем индикатор текущего фото
    updateImageCounter();
    
    // Показываем/скрываем кнопки навигации в зависимости от количества изображений
    updateNavigationButtons(workData.images.length);
    
    // Показываем модальное окно
    const modal = document.getElementById('workModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
    }
}

// Функция для смены основного изображения
function changeWorkMainImage(index) {
    if (index < 0 || index >= currentWorkImages.length) return;
    
    currentWorkImageIndex = index;
    const mainImage = document.getElementById('modalWorkImage');
    
    if (mainImage) {
        // Плавное исчезновение
        mainImage.style.opacity = '0';
        
        setTimeout(() => {
            mainImage.src = currentWorkImages[currentWorkImageIndex];
            mainImage.style.opacity = '1';
            
            // Обновляем индикатор текущего фото
            updateImageCounter();
        }, 200);
    }
}

// Функция для перехода к следующему изображению
function nextWorkImage() {
    if (currentWorkImageIndex < currentWorkImages.length - 1) {
        changeWorkMainImage(currentWorkImageIndex + 1);
    } else {
        changeWorkMainImage(0); // Циклическая навигация
    }
}

// Функция для перехода к предыдущему изображению
function prevWorkImage() {
    if (currentWorkImageIndex > 0) {
        changeWorkMainImage(currentWorkImageIndex - 1);
    } else {
        changeWorkMainImage(currentWorkImages.length - 1); // Циклическая навигация
    }
}

// Функция для обновления индикатора текущего фото
function updateImageCounter() {
    const counter = document.getElementById('imageCounter');
    if (counter && currentWorkImages.length > 0) {
        counter.textContent = `${currentWorkImageIndex + 1} / ${currentWorkImages.length}`;
        counter.style.display = currentWorkImages.length > 1 ? 'block' : 'none';
    }
}

// Функция для обновления состояния кнопок навигации
function updateNavigationButtons(imageCount) {
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    const counter = document.getElementById('imageCounter');
    
    // Показываем кнопки только если есть более одного изображения
    if (imageCount <= 1) {
        if (prevArrow) prevArrow.style.display = 'none';
        if (nextArrow) nextArrow.style.display = 'none';
        if (counter) counter.style.display = 'none';
    } else {
        if (prevArrow) prevArrow.style.display = 'flex';
        if (nextArrow) nextArrow.style.display = 'flex';
        if (counter) counter.style.display = 'block';
    }
}

// Закрытие модального окна
function closeWorkModal() {
    const modal = document.getElementById('workModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
    }
    
    // Сбрасываем состояние галереи
    currentWorkImageIndex = 0;
    currentWorkImages = [];
}

// Инициализация после полной загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM загружен, инициализация обработчиков работ...');
    
    // Добавляем обработчики для кнопок "Смотреть фото"
    const viewButtons = document.querySelectorAll('.work-view-btn');
    console.log('Найдено кнопок просмотра:', viewButtons.length);
    
    viewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const workName = this.getAttribute('data-work');
            console.log('Клик по кнопке просмотра:', workName);
            
            openWorkModal(workName);
        });
    });
    
    // Закрытие модального окна при клике на крестик
    const closeBtn = document.querySelector('#workModal .modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeWorkModal);
    }
    
    // Закрытие модального окна при клике вне его области
    const modal = document.getElementById('workModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeWorkModal();
            }
        });
    }
    
    // Закрытие модального окна при нажатии Escape
    document.addEventListener('keydown', function(e) {
        const modal = document.getElementById('workModal');
        if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
            closeWorkModal();
        }
        
        // Навигация по галерее с помощью клавиш
        if (modal && modal.style.display === 'flex') {
            if (e.key === 'ArrowLeft') {
                prevWorkImage();
            } else if (e.key === 'ArrowRight') {
                nextWorkImage();
            }
        }
    });
    
    // Добавляем обработчики для кнопок навигации
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    
    if (prevArrow) {
        prevArrow.addEventListener('click', (e) => {
            e.stopPropagation();
            prevWorkImage();
        });
    }
    
    if (nextArrow) {
        nextArrow.addEventListener('click', (e) => {
            e.stopPropagation();
            nextWorkImage();
        });
    }
    
    // Свайпы для мобильных устройств
    let touchStartX = 0;
    let touchEndX = 0;
    
    const modalImage = document.getElementById('modalWorkImage');
    if (modalImage) {
        modalImage.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, false);
        
        modalImage.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, false);
    }
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const difference = touchStartX - touchEndX;
        
        if (Math.abs(difference) > swipeThreshold) {
            if (difference > 0) {
                // Свайп влево - следующее фото
                nextWorkImage();
            } else {
                // Свайп вправо - предыдущее фото
                prevWorkImage();
            }
        }
    }
    
    // Фильтрация работ (если есть фильтры на странице)
    const filterButtons = document.querySelectorAll('.work-filter .filter-btn');
    const workCards = document.querySelectorAll('.work-card');
    
    if (filterButtons.length > 0 && workCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Убираем активный класс у всех кнопок
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Добавляем активный класс текущей кнопке
                button.classList.add('active');
                
                const filterValue = button.getAttribute('data-filter');
                
                workCards.forEach(card => {
                    if (filterValue === 'all') {
                        card.style.display = 'flex';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        const cardCategory = card.getAttribute('data-category');
                        if (cardCategory === filterValue) {
                            card.style.display = 'flex';
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
    }
});

// Функция для предзагрузки изображений
function preloadWorkImages(images) {
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Предзагрузка изображений при загрузке страницы
window.addEventListener('load', function() {
    Object.values(worksData).forEach(work => {
        preloadWorkImages(work.images);
    });
});
