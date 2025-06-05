function iniciar(){
    console.log("Bienvenidos a mi Aplicación")
    login();
}

function login(){
    let usr = prompt("Ingrese su usuario:");
    let pass = prompt("Ingrese su contraseña:");
    validar(usr, pass)
}

function validar(usuario, password){
    if(usuario === "admin" && password=== "1234"){
        console.log("Bienvenido " + usuario);
    }else {
        console.log("Usuario o contraseña incorrectos");
        login();
    }
}

iniciar()
