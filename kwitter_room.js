

    var firebaseConfig = {
      apiKey: "AIzaSyAeOQp-NujijP5SrmVTJAyKeFMLHEqG424",
      authDomain: "navimumbai-kxpb.firebaseapp.com",
      databaseURL: "https://navimumbai-kxpb-default-rtdb.firebaseio.com",
      projectId: "navimumbai-kxpb",
      storageBucket: "navimumbai-kxpb.appspot.com",
      messagingSenderId: "589459597511",
      appId: "1:589459597511:web:4d369d9fa4c449180ff6e2"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");


document.getElementById("user_name").innerHTML = "Welcome "+ user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";

      //End code
      });});}
getData();



function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}