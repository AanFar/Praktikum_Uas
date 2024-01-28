function login(){
    //mengambil nilai inputan user berdasarkan id
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (user == "SimpegNF" && pass == "SimpeginAja"){
        alert('Selamat Anda Berhasil Login');
        window.location = "../backend_admin/index.html"
        return false;
    } else if (username == "" || password == "") {
        alert('username & password tidak boleh kosong');
        return false;
    } else {
        alert('username & password salah')
        return false;
    }
}