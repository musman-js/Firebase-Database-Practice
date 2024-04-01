var firebaseConfig = {
  apiKey: "AIzaSyB1391JGI-IYgQ963pRAz4GFLBxyFnuA-o",
  authDomain: "database-practice-e8681.firebaseapp.com",
  databaseURL: "https://database-practice-e8681-default-rtdb.firebaseio.com",
  projectId: "database-practice-e8681",
  storageBucket: "database-practice-e8681.appspot.com",
  messagingSenderId: "975474386889",
  appId: "1:975474386889:web:a9a8008a5d298a114aea18"
};

var app = firebase.initializeApp(firebaseConfig);

//  ***********Function to Get Value*************
function getValue(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var section = document.getElementById("section");
 
    let studentObj = {
        name : name.value,
        email : email.value,
        section : section.value
    }

    // =====Sending Data to Database=====
    firebase.database().ref("Student-Details").push(studentObj) 
}


// ***********Recieving Data To Console from Database**************
function receiveData(){
    firebase.database().ref("Student-Details").on("child_added" , function(data){
        console.log(data.val()) 
    })
}

receiveData()

function deleteLaiba(){
    firebase.database().ref("Student-Details/-NjMPmxWKPlKxHlznkeN").remove()
}

deleteLaiba()
