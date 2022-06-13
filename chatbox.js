let button = document.getElementById("clickBtn")
console.log(button)

let msgInput=document.getElementById("text-messages")
console.log(msgInput);

let chatArea=document.getElementById("messagebox")



button.addEventListener('click', function (button) {
    let message = msgInput.value;
    let myTextMsg = document.createElement('div');
    
    myTextMsg.classList.add('messages')

    let pOne = document.createElement('p');
    pOne.innerHTML = message;
    myTextMsg.appendChild(pOne);
    chatArea.appendChild(myTextMsg);
    msgInput.value = "";

    let myResponses = document.createElement('div');
    myResponses.classList.add('responses');
    let pTwo = document.createElement('p');
     pTwo.innerHTML = message;
    myResponses.appendChild(pTwo);
    chatArea.appendChild(myResponses);

    if (msgInput.value.toLowercase.includes=="hi") {
        let testText = document.createElement('div');
        testText.classList.add('inclusivetext');
        let newMsg = document.createElement("p");
        newMsg.innerHTML = "Welcome back boss!";
        testText.appendChild(newMsg);
        chatArea.appendChild(testText);
    }
    

}          
)


 





    



