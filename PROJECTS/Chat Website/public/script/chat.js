// socket io is used to create a connection between the client and server

//This file is used to handle the client-side logic of the chat application


const socket = io();

socket.on('Welcome',(msg)=>{
    console.log(msg);
    console.log(socket.id);

    socket.emit('thankyou','Thank you',(res)=>{
        console.log(res.status);
    });
})

const chatBox = document.querySelector('.chat-box');
const msgList = document.querySelector('.msg-list');
chatBox.classList.add('hide');
msgList.classList.add('hide');
const userBox = document.querySelector('.user-details');
const username = document.querySelector('#username');
const usernameBtn = document.querySelector('#btn1');
const chatInput = document.querySelector('#chat-input');
const chatBtn = document.querySelector('#btn2');
const activeList = document.querySelector('.active-list');


usernameBtn.addEventListener('click',(ev)=>{
    socket.emit('saveuser',{
        username: username.value
    })
    userBox.classList.add('hide');
    chatBox.classList.remove('hide');
    msgList.classList.remove('hide');
})


chatBtn.addEventListener('click',(ev)=>{
    if(chatInput.value==='') return;
    socket.emit('chatmsg',
        { msg: chatInput.value },
        (res)=>{
            console.log(res.status);
        }
    );
    chatInput.value = '';
})

socket.on('msg',(t)=>{
 
    let text = t.msg;
    let senderName = t.senderName;

    let li = document.createElement('li');
    li.innerHTML = `
    <span class="chat-item">
        <span class="sender-name">${senderName}: </span>
        <span class="text">${text}</span>
    </span>
    `;

    if (senderName === username.value.trim()) {
        li.classList.add('self');
    }

    msgList.append(li);
})

updateUser = (activeUsers)=>{
    activeList.innerHTML = '';
    activeUsers.forEach(element => {
        let item = document.createElement('div');
        item.innerText = element;
        activeList.append(item);
    });
}

socket.on('user-connected',({username, activeUsers})=>{
    console.log(`${username} has joined the chat`)
    console.log(`Active users: ${activeUsers}`);
    updateUser(activeUsers);
});

socket.on('user-disconnected',({username, activeUsers})=>{
    console.log(`${username} has left the chat`);
    console.log(`Active users: ${activeUsers}`);
    updateUser(activeUsers);
});
