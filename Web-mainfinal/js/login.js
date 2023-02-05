function validate() {
    var username = document.querySelector("#username")
    var password = document.querySelector("#password")

    if( username.ariaValueMax.lenght <= 0) {
        pass = false;
        Swal.fire({
            icon: 'error',
            title: "username?",
            text:"Please insert username"
        })
    }
    else if( password.ariaValueMax.lenght <= 0) {
        pass = false;
        Swal.fire({
            icon: 'error',
            title: "password?",
            text:"Please insert password"
        })
    }

    return pass;
}



function clickAlertlogin() {
	swal("ผิดพลาด", "นี้เป็นเพียงเว็บทดลองเท่านั้นไม่สามารถเข้าสู่ระบบได้", "error");
}


function clickAlertregister() {
	swal("ผิดพลาด", "นี้เป็นเพียงเว็บทดลองเท่านั้นไม่สามารถลงทะเบียนได้", "error");
}