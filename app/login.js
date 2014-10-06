

function login() {
    //res = validaLogin();
    //alert(res)
    //if (res == true) {
    if ($("#txtUser").val() && $("#txtPass").val() != "") {
        $.ajax({
            type: "POST",
            url: "http://190.40.94.184:2099/server/login.aspx/Login",
            data: "{user: '" + $("#txtUser").val() + "',clave:'" + $("#txtPass").val() + "',tipo:1}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: OnSuccess,
            failure: function (response) {
                alert(response.d);
            }
        });
    }
    else {
        alert("Campos no pueden estar vacios!!");
    }
    //}
}
function OnSuccess(data) {

   
    if (data.d.length == 0) {
        alert("No existe el usuario y/o contrasena es erronea..")
            $("#txtUser").val('');
            $("#txtPass").val('');
            $("#txtUser").focus();
       
    }
    else {
            localStorage.Almacen = data.d[0].Almacen;
            localStorage.Caja = data.d[0].Caja;
            localStorage.Catalogo = data.d[0].Catalogo;
            localStorage.CodUsu = data.d[0].idUsu;
            localStorage.idUsu = data.d[0].CodUsu;
            localStorage.Nombres = data.d[0].Nombres;
            localStorage.Rol = data.d[0].Rol;
            localStorage.Sucursal = data.d[0].Sucursal;
            location.href = "http://190.40.94.184:2099/home.html"

    }
    //if (data.d ) {
    //    localStorage.Almacen = data.d[0].Almacen;
    //    localStorage.Caja = data.d[0].Caja;
    //    localStorage.Catalogo = data.d[0].Catalogo;
    //    localStorage.CodUsu = data.d[0].idUsu;
    //    localStorage.idUsu = data.d[0].CodUsu;
    //    localStorage.Nombres = data.d[0].Nombres;
    //    localStorage.Rol = data.d[0].Rol;
    //    localStorage.Sucursal = data.d[0].Sucursal;
    //    location.href = "http://../home.html"
    //}
    //else {

    //    alert("No existe usuario y/o contraseña erronea..")
    //}

}





//la función recibe como parámetros el numero de la columna a ocultar 


//function validaLogin() {
//    var resp ;
//    if ($("#txtUser").val() || $("#txtPass").val() == "") {
//        alert("Campos no pueden estar vacios!!")
//        resp = false;
//    } else {
//        resp = true;
       
//    }
//    return resp;
//}