var socket = io();

socket.on('connect',function() {
    console.log('connected to server');
});

socket.on('newMessage',function(message){
    console.log(message);
    var li = jQuery('<li></li>');
    li.text(`${message.from}:  ${message.text}`);
    jQuery('#messages').append(li);
});

socket.on('disconnect',function() {
    console.log("disconnected form server");
});

socket.on('newLocationMessage',function(message){
    var li = jQuery('<li></li>');
    var a = jQuery('<a target="_blank">My current location</a>');
    li.text(`${message.from}: `);
    a.attr('href',message.url);
    li.append(a);
    
    jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function(e){
    e.preventDefault();

    socket.emit('createMessage',{
        from:'User',
        text:jQuery('[name="message"]').val()
    }, function(){

    });
});



var locationButton = jQuery('#send-location');
locationButton.on('click',function(){
    if(Navigator.geolocation){
        return alert('Geolocation not  support by your browser');
    }
    navigator.geolocation.getCurrentPosition(function(position){
        console.log(position);
        socket.emit('createLocationMessage',{
            latitude: position.coords.latitude,
            longitude:position.coords.longitude
        })
    },function(){
        alert('Unable to fetch location');
    })
});