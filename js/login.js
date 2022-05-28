function login() {
    var tk = document.getElementById('txt-tai-khoan').value
    var mk = document.getElementById('txt-mat-khau').value
    if (tk == 'admin' && mk == 'admin') {
        location.replace("../admin/sanpham.html")
    } else {
        alert("Tài khoản hoặc mật khẩu không chính xác")
    }
}