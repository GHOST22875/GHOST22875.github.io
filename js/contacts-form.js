// Конфигурация Telegram бота
// ВАЖНО: Замените эти значения на свои!
const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN';  // Токен вашего бота от @BotFather
const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID';      // Ваш Chat ID (можно получить у @userinfobot)

// URL API Telegram
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

// Функция форматирования сообщения для отправки в Telegram
function formatTelegramMessage(formData) {
    const date = new Date().toLocaleString('ru-RU');
    
    return `
🏠 <b>НОВАЯ ЗАЯВКА С САЙТА SOFT NATURE</b>
━━━━━━━━━━━━━━━━━━━━━━━
👤 <b>Имя:</b> ${escapeHtml(formData.name)}
📞 <b>Телефон:</b> ${escapeHtml(formData.phone)}
📧 <b>Email:</b> ${formData.email ? escapeHtml(formData.email) : 'не указан'}
🛠️ <b>Услуга:</b> ${formData.service || 'не указана'}
💬 <b>Сообщение:</b> ${formData.message ? escapeHtml(formData.message) : 'не указано'}
━━━━━━━━━━━━━━━━━━━━━━━
🕐 <b>Дата и время:</b> ${date}
🌐 <b>Источник:</b> Страница контактов
    `.trim();
}

// Функция для экранирования HTML-символов (безопасность)
function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Функция валидации телефона
function validatePhone(phone) {
    const phoneRegex = /^[\+\(]?[0-9\-\s\(\)]{10,20}$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// Функция валидации email
function validateEmail(email) {
    if (!email) return true; // Email необязательный
    const emailRegex = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
    return emailRegex.test(email);
}

// Функция показа уведомления
function showNotification(isSuccess, title, message) {
    const modal = document.getElementById('notificationModal');
    const icon = document.getElementById('notificationIcon');
    const titleEl = document.getElementById('notificationTitle');
    const messageEl = document.getElementById('notificationMessage');
    
    if (isSuccess) {
        icon.textContent = '✅';
        titleEl.textContent = title || 'Заявка отправлена!';
        messageEl.textContent = message || 'Спасибо за обращение. Мы свяжемся с вами в ближайшее время.';
    } else {
        icon.textContent = '❌';
        titleEl.textContent = title || 'Ошибка!';
        messageEl.textContent = message || 'Что-то пошло не так. Попробуйте позже или свяжитесь с нами по телефону.';
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Функция закрытия уведомления
function closeNotification() {
    const modal = document.getElementById('notificationModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Функция отправки данных в Telegram
async function sendToTelegram(formData) {
    const message = formatTelegramMessage(formData);
    
    const response = await fetch(TELEGRAM_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: 'HTML',
            disable_web_page_preview: true
        })
    });
    
    if (!response.ok) {
        const errorData = await response.json();
        console.error('Telegram API error:', errorData);
        throw new Error(`Telegram API error: ${response.status}`);
    }
    
    return await response.json();
}

// Функция сброса ошибок в форме
function clearFormErrors(form) {
    const errorInputs = form.querySelectorAll('.error');
    errorInputs.forEach(input => {
        input.classList.remove('error');
    });
}

// Функция показа ошибки на поле
function showFieldError(field, isValid) {
    if (!isValid) {
        field.classList.add('error');
    } else {
        field.classList.remove('error');
    }
    return isValid;
}

// Основная функция отправки формы
async function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitBtn = form.querySelector('.feedback-submit-btn');
    
    // Сбрасываем предыдущие ошибки
    clearFormErrors(form);
    
    // Получаем данные из формы
    const nameInput = document.getElementById('feedbackName');
    const phoneInput = document.getElementById('feedbackPhone');
    const emailInput = document.getElementById('feedbackEmail');
    const serviceSelect = document.getElementById('feedbackService');
    const messageTextarea = document.getElementById('feedbackMessage');
    
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();
    const service = serviceSelect.value;
    const message = messageTextarea.value.trim();
    
    // Валидация
    let isValid = true;
    
    isValid = showFieldError(nameInput, name.length >= 2) && isValid;
    isValid = showFieldError(phoneInput, validatePhone(phone)) && isValid;
    isValid = showFieldError(emailInput, validateEmail(email)) && isValid;
    
    if (!isValid) {
        showNotification(false, 'Проверьте форму', 'Пожалуйста, заполните все обязательные поля корректно.');
        return;
    }
    
    // Подготовка данных для отправки
    const formData = {
        name: name,
        phone: phone,
        email: email,
        service: service,
        message: message
    };
    
    // Блокируем кнопку и показываем состояние загрузки
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = 'Отправка...';
    
    try {
        // Проверяем, настроен ли бот
        if (TELEGRAM_BOT_TOKEN === 'YOUR_BOT_TOKEN' || TELEGRAM_CHAT_ID === 'YOUR_CHAT_ID') {
            // Режим разработки - просто показываем демо-уведомление
            console.log('DEMO MODE: Bot not configured');
            console.log('Form data:', formData);
            
            // В демо-режиме показываем успешное уведомление
            showNotification(true, 'Демо-режим', 'В демо-режиме заявка не отправлена. Настройте бота для реальной отправки.');
            
            // Очищаем форму
            form.reset();
        } else {
            // Реальная отправка в Telegram
            await sendToTelegram(formData);
            
            showNotification(true, 'Заявка отправлена!', 'Спасибо за обращение. Мы свяжемся с вами в ближайшее время.');
            
            // Очищаем форму
            form.reset();
        }
    } catch (error) {
        console.error('Error sending message:', error);
        showNotification(false, 'Ошибка отправки', 'Не удалось отправить заявку. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.');
    } finally {
        // Разблокируем кнопку
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
        submitBtn.textContent = originalBtnText;
    }
}

// Инициализация формы
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedbackForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
    
    // Закрытие модального окна уведомлений
    const closeBtn = document.querySelector('.notification-close-btn');
    const notificationModal = document.getElementById('notificationModal');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeNotification);
    }
    
    if (notificationModal) {
        notificationModal.addEventListener('click', function(e) {
            if (e.target === notificationModal) {
                closeNotification();
            }
        });
    }
    
    // Автоматическое форматирование телефона (опционально)
    const phoneInput = document.getElementById('feedbackPhone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 11) value = value.slice(0, 11);
            
            if (value.length >= 1) {
                if (value[0] === '7' || value[0] === '8') {
                    if (value[0] === '8') value = '7' + value.slice(1);
                    let formatted = '+7';
                    if (value.length > 1) formatted += ' (' + value.slice(1, 4);
                    if (value.length > 4) formatted += ') ' + value.slice(4, 7);
                    if (value.length > 7) formatted += '-' + value.slice(7, 9);
                    if (value.length > 9) formatted += '-' + value.slice(9, 11);
                    e.target.value = formatted;
                } else {
                    e.target.value = '+' + value;
                }
            } else {
                e.target.value = '';
            }
        });
    }
});
