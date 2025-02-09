import sdk from 'matrix-js-sdk';

const client = sdk.createClient("https://matrix.org");
client.login("m.login.password", {"user": "Ayaan28", "password": "p·YÔ?¾d¸&Sø´c·ÀçDX½d"}).then((response) => {
    console.log(response.access_token);
});

console.log(client.getAccessToken());

//DEBUG
console.log("This WOrks!")

client.startClient();

client.once('sync', function(state, prevState, res) {
    console.log(state); // state will be 'PREPARED' when the client is ready to use
});

client.on("event", function(event){
    console.log(event.getType());
    console.log(event);
})

client.on("Room.timeline", function(event, room, toStartOfTimeline) {
    console.log(event.event);
});

var rooms = client.getRooms();
rooms.forEach(room => {
    console.log(room.roomId);
});


