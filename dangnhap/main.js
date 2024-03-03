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

function signIn() {
    const emailsi = document.getElementById('username').value;
    const passwordsi = document.getElementById('password').value;
    const errormessage = document.getElementById('error-message')

    const auth = getAuth();
signInWithEmailAndPassword(auth, emailsi, passwordsi)
    .then((userCredential) => {  
        const user = userCredential.user;
        console.log('dang nhap thanh cong:'+user.email);

        window.location.href = 'taikhoandangnhap.html';
    })
    .catch((error) => {
        console.error('Lỗi đăng nhap', error.message);
        var errorcode = error.code;
        var errormessage = error.message;
        errormessage.textContent = errormessage;
    });
}