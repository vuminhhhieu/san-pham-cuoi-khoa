const firebaseConfig = {
  apiKey: "AIzaSyAESWyeH7C7pSVKZEQYHdmCQpfoE_ARJBA",
  authDomain: "vmhieu-36712.firebaseapp.com",
  projectId: "vmhieu-36712",
  storageBucket: "vmhieu-36712.appspot.com",
  messagingSenderId: "869639677013",
  appId: "1:869639677013:web:cea83ef3f2a0188e5d60dc",
  measurementId: "G-JRK7S86XR8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
function signUp() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      showUserInfo(user);
    })
    .catch((error) => {
      console.error('Error signing up:', error.message);
    });
}

var dangky = document.getElementById("Đăng Kí")
var userN = document.getElementById("username").value;
var pass = document.getElementById("password").value;

dangky.addEventListener('click', function(){
    localStorage.setItem("name", userN);
    localStorage.setItem("pass" , pass);
    console.log("thanhcong");       
})


// var dangnhap = document.getElementById("Đăng nhập")
// var userN1 = document.getElementById("username1").value;
// var pass1 = document.getElementById("password1").value;
// dangnhap.addEventListener('click' , function() {
//     var userN = localStorage.getItem("name");
//     var pass = localStorage.getItem("pass")
//     if(userN1 == userN && pass1 == pass){
//         alert("Đăng nhập thành công ")
//     }
// })