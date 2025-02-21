const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

// Функция добавления сообщения в чат
function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender === 'user' ? 'user-message' : 'ai-message');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Автопрокрутка вниз
}

// Обработчик отправки сообщений
function sendMessage() {
    const message = userInput.value.trim();
     if (message !== '' ) {
        
        userInput.value = '';
       

        // Имитация ответа ИИ
         // Задержка для эффекта ответа
        setTimeout(() => {
            addMessage("...", 'ai');
        }, 500);

    } 
   /* if(message=="Hello") {
            addMessage(message, 'user');
        userInput.value="";
        setTimeout(() => {
            addMessage("Hi! How can I help you?", 'ai');
        }, 2500); } */
        
    
    if(message!==" ") {
        addMessage(message, 'user')
        userInput.value=" ";
        setTimeout(() => {
            addMessage("While I am in development, I can offer a few tips for better sleep: ", 'ai');
            addMessage("1. Stick to a consistent sleep schedule: Go to bed and wake up at the same time every day, even on weekends. This helps regulate your body's internal clock.", 'ai');
            addMessage("2. Create a relaxing bedtime routine: Engage in calming activities before bed, such as reading a book, taking a warm bath, or practicing meditation. ", 'ai');
            addMessage("3.Limit screen time before bed: Avoid phones, computers, and TV at least an hour before sleep, as the blue light from screens can interfere with melatonin production. ", 'ai');
            addMessage("4. Make your sleep environment comfortable: Ensure your room is cool, quiet, and dark. Consider blackout curtains, earplugs, or a white noise machine if needed.  ", 'ai');
     addMessage("If sleep problems persist, it might be a good idea to consult a healthcare professional for personalized advice.");
        }, 2500);
    }
    if(message=="Fuck you") {
        addMessage(message, 'user');
    userInput.value="";
    setTimeout(() => {
        addMessage("Fuck off, you bitch", 'ai');
    }, 2500);
}

}

// Отправка по клику на кнопку
sendButton.addEventListener('click', sendMessage);

// Отправка по нажатию клавиши Enter
userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage();
    
});
