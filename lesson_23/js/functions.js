const userInput = document.getElementById(`textInput`);
const sendBtn = document.getElementById(`sendBtn`)


function sendMessage() {
    let myMessage = userInput.value;
    if (validation(myMessage)) {
        userInput.value='';
        addMessage(myMessage)
        startBotThinking(myMessage)

    }
}

function validation(message) {
    if (message.trim() !== "") {
        userInput.style.border = '1px solid black';
        userInput.style.outline = '1px solid black';
        return true
    } else {
        userInput.placeholder = 'Enter your message first';
        userInput.style.border = '1px solid red';
        userInput.style.outline = '1px solid red';
        return false
    }
}

function addMessage(message) {
    createElement(`li`, `#chatList`, message)
}

function stopChat() {
    userInput.disabled = true;
    sendBtn.disabled = true;
}

async function startBotThinking(myMessage) {
    sendBtn.disabled = true;
    const amountOfTime = Math.floor(Math.random() * 10);
    await new Promise(res => setTimeout(res, amountOfTime * 1000));
    sendBtn.disabled = false;
    botMessaging(myMessage);

}

function botMessaging(myMessage) {
    const messageIndex = Math.floor(Math.random() * answers.length);
    const jokeIndex = Math.floor(Math.random() * jokes.length);
    let botMessage = answers[messageIndex];

    const userInputValue = userInput.value.toLowerCase();
    console.log(userInputValue)

    if (['hi','hello'].includes(myMessage)) {
        botMessage = answers[0];
        addMessage(botMessage)
    } else if (['stop', 'bye', 'my watch has ended'].includes(myMessage)) {
        stopChat()
        botMessage = answers[answers.length-1]
        addMessage(botMessage)
    } else if (myMessage.includes(`joke`)) {
        botMessage = jokes[jokeIndex]
        addMessage(botMessage)
    } else if(botMessage === answers[answers.length -1]){
        stopChat()
    } else{
        addMessage(botMessage)
    }

}
