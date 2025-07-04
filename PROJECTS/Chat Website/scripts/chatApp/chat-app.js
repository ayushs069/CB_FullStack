// This file is used to handle the server-side logic of the chat application

let userMap = {};

module.exports = (socket, io)=>{
    socket.emit('Welcome',{
        msg:'Hello World'
    });

    socket.on('thankyou',(msg, cb)=>{
        console.log(msg);
        cb({status:'thank you event successful'});
    })
    
    // To handle user connections and disconnections
    const userHandler = require('../handlers/user-handler');
    userHandler(socket, io, userMap);

    // To handle chat messages
    const chatHandler = require('../handlers/chat-handler');
    chatHandler(socket, io, userMap);
    
    // To handle disconnections
    const disconnectHandler = require('../handlers/disconnect');
    disconnectHandler(socket, io, userMap);
    
}