module.exports = (socket, io, userMap)=>{
    socket.on('saveuser',({username})=>{
        userMap[socket.id] = username;

        let activeUsers = [];
        for(let i in userMap) activeUsers.push(userMap[i]);

        io.emit('user-connected',{
            username, 
            activeUsers
        })

        console.log(userMap);
    })
}