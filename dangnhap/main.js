// var dangky = document.getElementById("dangkix1")
// var userN = document.getElementById("email").value;
// var pass = document.getElementById("password").value;

// dangnhap.addEventListener('click', function(){
//     localStorage.setItem("name", userN);
//     localStorage.setItem("pass" , pass);
//     console.log("thanhcong");       
// })


// var dangnhap = document.getElementById("Đăng nhập")
// var userN = document.getElementById("username").value;
// var pass = document.getElementById("password").value;
// dangnhap.addEventListener('click' , function() {
//     var userN = localStorage.getItem("name");
//     var pass = localStorage.getItem("pass")
//     if(userN1 == userN && pass1 == pass){
//         alert("Đăng nhập thành công ")
//     }
//     if (userN == null || userN == "") {
//         alert("Tên đăng nhập không được để trống!");
//         return false;}
// })

// function signIn() {
//     var userN = document.getElementById("username").value;
// var pass = document.getElementById("password").value;
// dangnhap.addEventListener('click' , function() {
//     var userN = localStorage.getItem("name");
//     var pass = localStorage.getItem("pass")
//     if(userN == userN && pass == pass){
//         alert("Đăng nhập thành công ")
//     }
//     if (userN == null || userN == "") {
//         alert("Tên đăng nhập không được để trống!");
//         return false;}
// })

// }

// validation form login
const inputUsername = document.querySelector(".name");
const inputPassword = document.querySelector(".pass");
const btnLogin = document.querySelector(".submit");

// validation form login

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputUsername.value === "" || inputPassword.value === "") {
    alert("vui lòng không để trống");
  } else {
    const user = JSON.parse(localStorage.getItem(inputUsername.value));
    if (
      user.username === inputUsername.value &&
      user.password === inputPassword.value
    ) {
      alert("Đăng Nhập Thành Công");
      window.location.href = "../trangchu/index.html";
    } else {
      alert("Đăng Nhập Thất Bại");
    }
  }
});