const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('open');
});

document.getElementById('chatbot-button').addEventListener('click', function() {
    document.getElementById('chatbot-widget').style.display = 'block';
});

document.getElementById('close-chatbot').addEventListener('click', function() {
    document.getElementById('chatbot-widget').style.display = 'none';
});

function getBotResponse(userMessage) {
    const responses = {
        "hello": "Hi there! How can I help you today?",
        "hi": "Hello! What can I assist you with?",
        "help": "Sure, I'm here to help. What do you need assistance with?",
        "price": "Could you please specify the product you are inquiring about?",
        "return": "You can return products within 30 days of receipt. Please visit our returns page for more details.",
        "shipping": "Shipping is free for orders over $50. Standard shipping takes 5-7 business days.",
        "problem": "Tell me what is your Problem and How I can help you",
    };

    let lowerCaseMessage = userMessage.toLowerCase();
    return responses[lowerCaseMessage] || " Jai Shree Ram 🙏";
}

document.getElementById('send-chatbot-message').addEventListener('click', function() {
    var inputField = document.getElementById('chatbot-input-field');
    var userMessage = inputField.value.trim();
    if (userMessage) {
        var userMessageContainer = document.createElement('div');
        userMessageContainer.textContent = userMessage;
        userMessageContainer.className = 'chatbot-user-message';
        document.querySelector('.chatbot-messages').appendChild(userMessageContainer);
        
        // Get bot response
        var botResponse = getBotResponse(userMessage);
        var botMessageContainer = document.createElement('div');
        botMessageContainer.textContent = botResponse;
        botMessageContainer.className = 'chatbot-bot-message';
        document.querySelector('.chatbot-messages').appendChild(botMessageContainer);

        inputField.value = '';
    }
});

document.getElementById('chatbot-input-field').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('send-chatbot-message').click();
    }
});