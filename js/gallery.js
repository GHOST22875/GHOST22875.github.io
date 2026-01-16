// Данные для галерей проектов
const galleries = {
    project1: {
        title: "Терраса из ДПК",
        location: "Загородный дом, Московская область",
        description: "Просторная терраса из древесно-полимерного композита площадью 45 м². Современный дизайн с минималистичным подходом.",
        images: [
            "/image/facade1/5256075123540822991.jpg",
            "/image/facade1/5256075123540822992.jpg",
            "/image/facade1/5256075123540822993.jpg",
            "/image/facade1/5256075123540822994.jpg",
            "/image/facade1/5256075123540822995.jpg"
        ]
    },
    project2: {
        title: "Терраса из лиственницы",
        location: "Дачный участок, Ленинградская область",
        description: "Уютная терраса из сибирской лиственницы площадью 32 м² с классическим дизайном.",
        images: [
            "/image/facade2/5256075123540823006.jpg",
            "/image/facade2/5256075123540823007.jpg",
            "/image/facade2/5256075123540823008.jpg",
            "/image/facade2/5256075123540823009.jpg",
            "/image/facade2/5256075123540823010.jpg",
            "/image/facade2/5256075123540823011.jpg",
            "/image/facade2/5256075123540823012.jpg",
            "/image/facade2/5256075123540823013.jpg",
            "/image/facade2/5256075123540823014.jpg",
            "/image/facade2/5256075123540823016.jpg"
        ]
    },
    project3: {
        title: "Комбинированная терраса",
        location: "Частный дом, Калужская область",
        description: "Терраса площадью 38 м² с комбинированным покрытием из ДПК и натурального камня.",
        images: [
            "/image/facade3/photo_2025-11-19_10-39-37.jpg",
            "/image/facade3/photo_2025-11-19_10-39-57.jpg",
            "/image/facade3/photo_2025-11-19_10-39-58.jpg",
            "/image/facade3/photo_2025-11-19_10-39-59.jpg",
            "/image/facade3/photo_2025-11-19_10-40-03.jpg"
        ]
    },
    project4: {
        title: "Терраса с навесом",
        location: "Коттеджный поселок, Новорижское шоссе",
        description: "Терраса площадью 50 м² с современным навесом из поликарбоната.",
        images: [
            "/image/facade4/photo_2025-11-19_10-40-21.jpg",
            "/image/facade4/photo_2025-11-19_10-40-23.jpg",
            "/image/facade4/photo_2025-11-19_10-40-24.jpg",
            "/image/facade4/photo_2025-11-19_10-40-26.jpg"
        ]
    },
    project5: {
        title: "Терраса из термодревесины",
        location: "Элитный коттедж, Рублевское шоссе",
        description: "Эксклюзивная терраса из термообработанной древесины площадью 42 м².",
        images: [
            "https://i.pinimg.com/736x/23/fb/80/23fb80e93698635dc44b2fb9c664da3c.jpg",
            "https://i.pinimg.com/736x/d4/26/3b/d4263bb93d82a2bea3ba25a3573b45a8.jpg",
            "https://i.pinimg.com/736x/b8/68/cf/b868cf28c80d5fc663ab01344d0a5534.jpg"
        ]
    },
    project6: {
        title: "Большая семейная терраса",
        location: "Загородный дом, Тверская область",
        description: "Просторная терраса площадью 65 м² для большой семьи с зонами отдыха и барбекю.",
        images: [
            "https://i.pinimg.com/736x/d4/26/3b/d4263bb93d82a2bea3ba25a3573b45a8.jpg",
            "https://i.pinimg.com/736x/a5/7b/38/a57b38b8ab04dd83e66895bb3d96d978.jpg",
            "https://i.pinimg.com/736x/9e/47/cb/9e47cb699e37288fa745f2868f40a0e8.jpg",
            "https://i.pinimg.com/736x/0f/92/c5/0f92c5f1ee2bce5d0ee792415b6ef6eb.jpg"
        ]
    }
};

// Инициализация галереи
document.addEventListener('DOMContentLoaded', function() {
    initGallery();
});

function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const galleryModal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalCounter = document.getElementById('modalCounter');
    const closeBtn = document.getElementById('closeGallery');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentGallery = null;
    let currentImageIndex = 0;
    
    // Проверяем, есть ли элементы галереи на странице
    if (galleryItems.length === 0) return;
    
    // Открытие галереи при клике на проект
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const galleryId = this.getAttribute('data-gallery');
            openGallery(galleryId);
        });
    });
    
    // Функция открытия галереи
    function openGallery(galleryId) {
        if (!galleries[galleryId]) return;
        
        currentGallery = galleryId;
        currentImageIndex = 0;
        
        updateModal();
        galleryModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
    }
    
    // Функция обновления модального окна
    function updateModal() {
        if (!currentGallery) return;
        
        const gallery = galleries[currentGallery];
        modalImage.src = gallery.images[currentImageIndex];
        modalTitle.textContent = `${gallery.title} (${currentImageIndex + 1}/${gallery.images.length})`;
        modalCounter.textContent = gallery.location;
    }
    
    // Закрытие галереи
    function closeGallery() {
        galleryModal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Возвращаем скролл
        currentGallery = null;
    }
    
    // Переход к предыдущему изображению
    function prevImage() {
        if (!currentGallery) return;
        
        const gallery = galleries[currentGallery];
        currentImageIndex = (currentImageIndex - 1 + gallery.images.length) % gallery.images.length;
        updateModal();
    }
    
    // Переход к следующему изображению
    function nextImage() {
        if (!currentGallery) return;
        
        const gallery = galleries[currentGallery];
        currentImageIndex = (currentImageIndex + 1) % gallery.images.length;
        updateModal();
    }
    
    // Обработчики событий
    if (closeBtn) {
        closeBtn.addEventListener('click', closeGallery);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevImage);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', nextImage);
    }
    
    // Закрытие по клику вне изображения
    if (galleryModal) {
        galleryModal.addEventListener('click', function(e) {
            if (e.target === galleryModal) {
                closeGallery();
            }
        });
    }
    
    // Управление клавиатурой
    document.addEventListener('keydown', function(e) {
        if (!galleryModal || !galleryModal.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeGallery();
                break;
            case 'ArrowLeft':
                prevImage();
                break;
            case 'ArrowRight':
                nextImage();
                break;
        }
    });
}
