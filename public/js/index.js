var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'phi@g.co',
        text: 'mesage from phi@g.co'
    })
});

socket.on('disconnect', function () {
    console.log('Disconnected from server')
});

socket.on('newMessage', function (newMessage) {
    console.log('New message', newMessage);
});
