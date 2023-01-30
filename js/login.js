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