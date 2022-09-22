function login(){
    let usuario = document.getElementById('user').value
    let password = document.getElementById('password').value

    let user ="niels"
    let pass='12345'

     if(usuario==user && password==pass){
        alert('BIENVENIDOS')
        location.href='index.html'
     }else{
        alert('usuario o contrasena incorrecta')
        location.href='login.html'
     }
}