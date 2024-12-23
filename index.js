document.addEventListener('DOMContentLoaded', function () {
    const appealTextArea = document.getElementById('appealText');
    const appealTypeSelect = document.getElementById('appealType');
    const defaultText = 'Здравствуйте! Я хотел бы оставить обращение по следующему вопросу...';

    appealTextArea.addEventListener('focus', () => {
        if (appealTextArea.value === defaultText) {
            appealTextArea.value = '';
        }
    });

    appealTextArea.addEventListener('blur', () => {
        if (appealTextArea.value.trim() === '') {
            appealTextArea.value = defaultText;
        }
    });

    document.getElementById('sendEmailButton').addEventListener('click', function () {
        const appealText = appealTextArea.value.trim();
        const appealType = appealTypeSelect.value;
        const recipient = 'info@onay.kz';
        const subject = 'Тестовое обращение';
        const platform = navigator.platform || 'Неизвестно';
        const userAgent = navigator.userAgent || 'Неизвестно';
        let body = `Текст обращения:\n${appealText}`;

        if (appealText === '' || appealText === defaultText) {
            alert('Пожалуйста, заполните текст обращения перед отправкой.');
            return;
        }

        if (appealType === 'app') {
            body += `\n\nДополнительная информация об устройстве:\nПлатформа: ${platform}\nМодель устройства/браузера: ${userAgent}`;
        }

        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        try {
            window.location.href = mailtoLink;
        } catch (error) {
            console.error('Ошибка при отправке письма:', error);
            alert('Произошла ошибка при отправке письма. Проверьте настройки вашего почтового клиента.');
        }
    });
});
