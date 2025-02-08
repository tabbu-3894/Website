document.addEventListener('DOMContentLoaded', function() {
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

const chatbotToggle = document.querySelector('.chatbot-toggle');
const chatbot = document.querySelector('.chatbot');
const chatbotClose = document.querySelector('.chatbot-close');
const chatbotMessages = document.querySelector('.chatbot-messages');
const chatbotInput = document.querySelector('.chatbot-input input');
const chatbotButton = document.querySelector('.chatbot-input button');

chatbotToggle.addEventListener('click', () => {
    chatbot.style.display = 'flex';
    chatbotToggle.style.display = 'none';
});

chatbotClose.addEventListener('click', () => {
    chatbot.style.display = 'none';
    chatbotToggle.style.display = 'flex';
});

chatbotButton.addEventListener('click', () => {
    const message = chatbotInput.value.trim();
    if (message) {
        const userMessage = document.createElement('div');
        userMessage.textContent = message;
        userMessage.classList.add('bg-gray-200', 'p-2', 'rounded', 'mb-2', 'self-end');
        chatbotMessages.appendChild(userMessage);
        chatbotInput.value = '';

        // Simulate bot response
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.textContent = 'This is a bot response.';
            botMessage.classList.add('bg-green-200', 'p-2', 'rounded', 'mb-2', 'self-start');
            chatbotMessages.appendChild(botMessage);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }, 1000);
    }
});

chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        chatbotButton.click();
    }
});
});