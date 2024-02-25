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

function signIn() {
    var userN = document.getElementById("username").value;
var pass = document.getElementById("password").value;
dangnhap.addEventListener('click' , function() {
    var userN = localStorage.getItem("name");
    var pass = localStorage.getItem("pass")
    if(userN == userN && pass == pass){
        alert("Đăng nhập thành công ")
    }
    if (userN == null || userN == "") {
        alert("Tên đăng nhập không được để trống!");
        return false;}
})

}