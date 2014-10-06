



    function Add() {
        var res = validarProducto();
        

        if (res == true) { //verifica si txt esta vacio
           
            var r = VerificarFilaVacia();
            //var cant = $("#txtcantidad").val();
            var prod = $("#txtbuscar").val();
           // $("#txtcantidad").val("");
            $("#txtbuscar").val("");
            if (r == true) { //verifica fila vacia
                if (VerificarExisteProducto(prod) == false) {//verifica si prod existe
                    $.ajax({
                        type: "POST",
                        url: "server/login.aspx/AgregarProducto",
                        data: "{descproducto: '" + prod + "',codcatalogo:'" + localStorage.getItem('Catalogo') + "',codalmacen:'" + localStorage.getItem('Almacen') + "'}",
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function (data) {
                            // alert(data.d[0].tipoprec)
                            if (data.d.length > 0) {
                                document.getElementById("datatable").deleteRow(1);

                                $("#datatable tbody").append("<tr>" +
                                 "<td data-title='Producto'>" + prod + "</td>" +
                                 "<td data-title='Um.'>" + data.d[0].decunidad + "</td>" +
                                 "<td data-title='Cant.'>1</td>" +
                                 "<td data-title='Precio' class='numeric'>" + data.d[0].precventa + "</td>" +
                                 "<td data-title='Total'>12</td>" +
                                 "<td data-title='Accion'> " +
                                "<button id='btneditar' onclick='EditarFila(this);' class='button small cancel'  ><abbr>Editar</abbr></button>" +
                                    "<button id='btnquitar'  onclick='EliminarFila(this);' class='button small cancel'  ><abbr>Quitar</abbr></button>"+
                                 "</td>" +
                                 "<td style='Display:none;' >" + data.d[0].Codigo + "</td>" +
                             "<td style='Display:none;' >" + data.d[0].Codalmacen + "</td>" +
                               "<td style='Display:none;' >" + data.d[0].tipoprec + "</td>" +
                               "<td style='Display:none;' >" + data.d[0].preminimo + "</td>" +
                               "<td style='Display:none;' >" + data.d[0].codunidad + "</td>" +
                                "<td style='Display:none;' >0</td>" +//indicador edicion
                                 "</tr>");
                                SumarColumna();
                                Lungo.Notification.success(
                                        "Success",                  //Title
                                        "Se agrego Exitosamente!",     //Description
                                        "check",                    //Icon
                                        1                          //Time on screen
                                        //afterNotification           //Callback function
                                    );
                            } else {
                                Lungo.Notification.error(
                            "Error",                      //Title
                            "Producto no existe, ingrese otra vez ...",     //Description
                            "cancel",                     //Icon
                            3                          //Time on screen
                            );
                            }

                        },
                        failure: function (response) {
                            alert(response.d);
                        }
                    });

                } else {
                    Lungo.Notification.error(
                   "Error",                      //Title
                   "Producto ya esta agregado!!!",     //Description
                   "cancel",                     //Icon
                   3                          //Time on screen
                   );
                }

            }
            else {
                if (VerificarExisteProducto(prod) == false) {//verifica si prod existe
                    $.ajax({
                        type: "POST",
                        url: "server/login.aspx/AgregarProducto",
                        data: "{descproducto: '" + prod + "',codcatalogo:'" + localStorage.getItem('Catalogo') + "',codalmacen:'" + localStorage.getItem('Almacen') + "'}",
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function (data) {
                            // alert(data.d[0].tipoprec)
                            if (data.d.length > 0) {
                                $("#datatable tbody").append("<tr>" +
                                 "<td data-title='Producto'>" + prod + "</td>" +
                                 "<td data-title='Um.'>" + data.d[0].decunidad + "</td>" +
                                 "<td data-title='Cant.'>1</td>" +
                                 "<td data-title='Precio' class='numeric'>" + data.d[0].precventa + "</td>" +
                                 "<td data-title='Total'>12</td>" +
                                 "<td data-title='Accion'> " +
                                 "<button id='btneditar' onclick='EditarFila(this);' class='button small cancel'  ><abbr>Editar</abbr></button>" +
                                    "<button id='btnquitar'  onclick='EliminarFila(this);' class='button small cancel'  ><abbr>Quitar</abbr></button>" +
                                 "</td>" +
                                 "<td style='Display:none;' >" + data.d[0].Codigo + "</td>" +
                             "<td style='Display:none;' >" + data.d[0].Codalmacen + "</td>" +
                               "<td style='Display:none;' >" + data.d[0].tipoprec + "</td>" +
                               "<td style='Display:none;' >" + data.d[0].preminimo + "</td>" +
                               "<td style='Display:none;' >" + data.d[0].codunidad + "</td>" +
                                 "<td style='Display:none;' >0</td>" +//indicador edicion
                                 "</tr>");
                                SumarColumna();
                                Lungo.Notification.success(
                                       "Success",                  //Title
                                       "Se agrego Exitosamente!",     //Description
                                       "check",                    //Icon
                                       1                          //Time on screen
                                       //afterNotification           //Callback function
                                   );
                            } else {
                                Lungo.Notification.error(
                             "Error",                      //Title
                             "Producto no existe, ingrese otra vez ...",     //Description
                             "cancel",                     //Icon
                             3                          //Time on screen
                             );
                            }

                        },
                        failure: function (response) {
                            alert(response.d);
                        }
                    });
                }
                else {
                    Lungo.Notification.error(
                       "Error",                      //Title
                       "Producto ya esta agregado!!!",     //Description
                       "cancel",                     //Icon
                       3                          //Time on screen
                       );
                }

            }
        }
        else {
            Lungo.Notification.error(
                    "Error",                      //Title
                    "Producto vacio seleccione uno.",     //Description
                    "cancel",                     //Icon
                    3                          //Time on screen
                    );
              }
    }



    function validarCant(cant) {
      
        switch(true){
            case cant == "":
              
                return 1;
                break;
            case cant != "":
               
                return cant;
                break;
        }
    }

    function validarProducto() {
        
        if ($("#txtbuscar").val() == "") {


            return false;
        }
        else {
           
            return true;
        }

    }

    function validarProducto2() {

        if ($("#txtbuscar2").val() == "") {


            return false;
        }
        else {

            return true;
        }

    }

    function EliminarFila(r) {
        if (confirm("Deseas realmente quitar el producto?") == true) {
            var i = r.parentNode.parentNode.rowIndex;
            var numfilas;
            document.getElementById("datatable").deleteRow(i);
            SumarColumna();
            numfilas = CuentaFilas();

            if (numfilas <= 0) {
                $("#datatable tbody").append("<tr>" +
              "<td colspan='8' data-title='Informacion!' style='text-align:center;'>No hay Datos</td>" +
              "</tr>");
            }
            Lungo.Notification.success(
                                       "Success",                  //Title
                                       "Se elimino Exitosamente!",     //Description
                                       "check",                    //Icon
                                       2                          //Time on screen
                                       //afterNotification           //Callback function
                                   );
        }
      

    }



    function EditarFila(r) {
        var indicefila = r.parentNode.parentNode.rowIndex;
        var table = document.getElementById('datatable');
        comprobarIndiceEdit();
        var indicador = table.rows[indicefila].cells[8].innerHTML;
        var codprod = table.rows[indicefila].cells[6].innerHTML;
        // valor = table.rows[indicefila].cells[8].innerHTML;
       
        if (indicador == "U") {
            table.rows[indicefila].cells[5].innerHTML = "<button id='btnEditCant' onclick='EditCantU(this);' class='button small cancel'  ><abbr>Cantidad</abbr></button>" +
                                                    "<button id='btnEditPrec' onclick='EditarPrecU(this);' class='button small cancel'  ><abbr>Precio</abbr></button>" +
                                                     "<button id='btnCancelar' onclick='Cancelar(this);' class='button small cancel'  ><abbr>Regresar</abbr></button>";

            table.rows[indicefila].cells[11].innerHTML = "1";
        }
        else {

            table.rows[indicefila].cells[2].innerHTML = "<input style='width:100px;' onkeypress='ValidaSoloNumeros();' id='txtcant' type='text' value='" + table.rows[indicefila].cells[2].innerHTML + "' >" +
                                                    "<input id='hdcant' type='hidden' value='" + table.rows[indicefila].cells[2].innerHTML + "'>";
           // setFocusToTextBox();
            table.rows[indicefila].cells[5].innerHTML = "<button id='btnsave' onclick='GuardarFila(this);' class='button small cancel'  ><abbr>Guardar</abbr></button>" +
                                                    "<button id='btnregresar' onclick='RegresarFila(this);' class='button small cancel'  ><abbr>Regresar</abbr></button>";

            table.rows[indicefila].cells[11].innerHTML = "1";
        }

    }


    function EditCantU(r) {
        var indicefila = r.parentNode.parentNode.rowIndex;
        var table = document.getElementById('datatable');
        table.rows[indicefila].cells[2].innerHTML = "<input style='width:100px;' onkeypress='return NumCheck(event, this)' id='txtcant' type='text' value='" + table.rows[indicefila].cells[2].innerHTML + "' >" +
                                              "<input id='hdcant' type='hidden' value='" + table.rows[indicefila].cells[2].innerHTML + "'>";
        table.rows[indicefila].cells[5].innerHTML = "<button id='btnsave' onclick='GuardarCantU(this);' class='button small cancel'  ><abbr>Guardar</abbr></button>" +
                                                          "<button id='btnregresar' onclick='RegresarFila(this);' class='button small cancel'  ><abbr>Regresar</abbr></button>";
    }

    function EditarPrecU(r) {
        var indicefila = r.parentNode.parentNode.rowIndex;
        var table = document.getElementById('datatable');
        table.rows[indicefila].cells[3].innerHTML = "<input style='width:100px;' onkeypress='return NumCheck(event, this)' id='txtprec' type='text' value='" + table.rows[indicefila].cells[3].innerHTML + "' >" +
                                              "<input id='hdprec' type='hidden' value='" + table.rows[indicefila].cells[3].innerHTML + "'>";
        table.rows[indicefila].cells[5].innerHTML = "<button id='btnsave' onclick='GuardarPrec(this);' class='button small cancel'  ><abbr>Guardar</abbr></button>" +
                                                          "<button id='btnregresar' onclick='RegresarPrec(this);' class='button small cancel'  ><abbr>Regresar</abbr></button>";
    }

    function Cancelar(r) {
        var indicefila = r.parentNode.parentNode.rowIndex;
        var table = document.getElementById('datatable');
        table.rows[indicefila].cells[5].innerHTML = "<button id='btneditar' onclick='EditarFila(this);' class='button small cancel'  ><abbr>Editar</abbr></button>" +
                                    "<button id='btnquitar'  onclick='EliminarFila(this);' class='button small cancel'  ><abbr>Quitar</abbr></button>";
        table.rows[indicefila].cells[11].innerHTML = "0";
    }

    function RegresarFila(r) {
        var indicefila = r.parentNode.parentNode.rowIndex;
        var table = document.getElementById('datatable');
        table.rows[indicefila].cells[2].innerHTML = "<td data-title='Cant.' >" + $("#hdcant").val() + "</td>";
        table.rows[indicefila].cells[5].innerHTML = "<button id='btneditar' onclick='EditarFila(this);' class='button small cancel'  ><abbr>Editar</abbr></button>" +
                                    "<button id='btnquitar'  onclick='EliminarFila(this);' class='button small cancel'  ><abbr>Quitar</abbr></button>";
        table.rows[indicefila].cells[11].innerHTML = "0";
    }

    function RegresarPrec(r) {
        var indicefila = r.parentNode.parentNode.rowIndex;
        var table = document.getElementById('datatable');
        table.rows[indicefila].cells[3].innerHTML = "<td data-title='Cant.' >" + $("#hdprec").val() + "</td>";
        table.rows[indicefila].cells[5].innerHTML = "<button id='btneditar' onclick='EditarFila(this);' class='button small cancel'  ><abbr>Editar</abbr></button>" +
                                    "<button id='btnquitar'  onclick='EliminarFila(this);' class='button small cancel'  ><abbr>Quitar</abbr></button>";
        table.rows[indicefila].cells[11].innerHTML = "0";
    }

    function GuardarFila(r) {
        var indicefila = r.parentNode.parentNode.rowIndex;
        var table = document.getElementById('datatable');
        var codProd = table.rows[indicefila].cells[6].innerHTML;
        var codAlmacen = table.rows[indicefila].cells[7].innerHTML;
        table.rows[indicefila].cells[11].innerHTML = "0";
        $.ajax({
            type: "POST",
            url: "server/login.aspx/EditarCant",
            data: "{cantidad: '" + $("#txtcant").val() + "',codAlmc: '" + codAlmacen + "',codProd: '" + codProd + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var b = response.d.toString();            
                table.rows[indicefila].cells[2].innerHTML = "<td data-title='Cant.' >" + $("#txtcant").val() + "</td>";
                table.rows[indicefila].cells[3].innerHTML = b.replace(".", ",");
                table.rows[indicefila].cells[5].innerHTML = "<button id='btneditar' onclick='EditarFila(this);' class='button small cancel'  ><abbr>Editar</abbr></button>" +
                                    "<button id='btnquitar'  onclick='EliminarFila(this);' class='button small cancel'  ><abbr>Quitar</abbr></button>";
                SumarColumna();
                Lungo.Notification.success(
                             "Success",                  //Title
                             "Se GUardo Exitosamente!",     //Description
                             "check",                    //Icon
                             1                          //Time on screen
                             //afterNotification           //Callback function
                         );
            },
            failure: function (response) {
                alert(response.d);
            }
        });


        //table.rows[indicefila].cells[2].innerHTML = "<td data-title='Cant.' >" + $("#txtcant").val() + "</td>";
        //table.rows[indicefila].cells[5].innerHTML = "<button id='btnquitar'  onclick='EliminarFila(this);' class='button tiny cancel margin-bottom'  ><abbr>Quitar</abbr></button>" +
        //                                    "<button id='btneditar' onclick='EditarFila(this);' class='button tiny cancel margin-bottom'  ><abbr>Editar</abbr></button>";
        //SumarColumna();
    }

    function GuardarCantU(r) {
        var indicefila = r.parentNode.parentNode.rowIndex;
        var table = document.getElementById('datatable');
        table.rows[indicefila].cells[2].innerHTML = "<td data-title='Cant.' >" + $("#txtcant").val() + "</td>";
        table.rows[indicefila].cells[5].innerHTML = "<button id='btneditar' onclick='EditarFila(this);' class='button small cancel'  ><abbr>Editar</abbr></button>" +
                                    "<button id='btnquitar'  onclick='EliminarFila(this);' class='button small cancel'  ><abbr>Quitar</abbr></button>";
        table.rows[indicefila].cells[11].innerHTML = "0";
        SumarColumna();
        Lungo.Notification.success(
                             "Success",                  //Title
                             "Se GUardo Exitosamente!",     //Description
                             "check",                    //Icon
                             1                          //Time on screen
                             //afterNotification           //Callback function
                         );
    }

    function GuardarPrec(r) {
        var indicefila = r.parentNode.parentNode.rowIndex;
        var table = document.getElementById('datatable');
        var precminimo = table.rows[indicefila].cells[9].innerHTML;
        var inputprec = parseFloat($("#txtprec").val());
        if (inputprec < precminimo) {
            table.rows[indicefila].cells[3].innerHTML = "<td data-title='Cant.' >" + $("#hdprec").val() + "</td>";
            table.rows[indicefila].cells[5].innerHTML = "<button id='btneditar' onclick='EditarFila(this);' class='button small cancel'  ><abbr>Editar</abbr></button>" +
                                    "<button id='btnquitar'  onclick='EliminarFila(this);' class='button small cancel'  ><abbr>Quitar</abbr></button>";
            table.rows[indicefila].cells[11].innerHTML = "0";
            //Lungo.Notification.html('<h2>El Precio sobrepasa el minimo!</h2>', "cerrar");
            Lungo.Notification.error(
                 "Error",                      //Title
                 "El precio no puede ser menor al minimo!!!",     //Description
                 "cancel",                     //Icon
                 3                          //Time on screen
                 );
        } else {
            table.rows[indicefila].cells[3].innerHTML = "<td data-title='Cant.' >" + $("#txtprec").val() + "</td>";
            table.rows[indicefila].cells[5].innerHTML = "<button id='btneditar' onclick='EditarFila(this);' class='button small cancel'  ><abbr>Editar</abbr></button>" +
                                    "<button id='btnquitar'  onclick='EliminarFila(this);' class='button small cancel'  ><abbr>Quitar</abbr></button>";
            table.rows[indicefila].cells[11].innerHTML = "0";
            Lungo.Notification.success(
                            "Success",                  //Title
                            "Se Guardo Exitosamente!",     //Description
                            "check",                    //Icon
                            1                          //Time on screen
                            //afterNotification           //Callback function
                        );
        }
        SumarColumna();
       
    }

    function OnSuccess(response) {
        table.rows[indicefila].cells[2].innerHTML = "<td data-title='Cant.' >" + $("#txtcant").val() + "</td>";
        table.rows[indicefila].cells[2].innerHTML = "<td data-title='Cant.' >" + $("#txtcant").val() + "</td>";
        table.rows[indicefila].cells[5].innerHTML = "<button id='btnquitar'  onclick='EliminarFila(this);' class='button small cancel'  ><abbr>Quitar</abbr></button>" +
                                            "<button id='btneditar' onclick='EditarFila(this);' class='button small cancel'  ><abbr>Editar</abbr></button>";
        SumarColumna();

    }

    function CuentaFilas() {
        var i = 0;
        $("#datatable tbody tr").each(function (index) {
            i++;

        });
        return i;
    }

    function CuentaFilas2() {
        var i = 0;
        $("#datatable2 tbody tr").each(function (index) {
            i++;

        });
        return i;
    }

    function VerificarFilaVacia() {
      
        var resp = false;
        var palabra;
        $("#datatable tbody tr").each(function (index) {
            $(this).children("td").each(function (index2) {
                switch (index2) {
                    case 0:
                        palabra = $(this).text();
                        break;
                }
            });
        });
       if (palabra == "No hay Datos") {
           resp = true;
       }
        return resp;
    }

    function VerificarFilaVacia2() {

        var resp = false;
        var palabra;
        $("#datatable2 tbody tr").each(function (index) {
            $(this).children("td").each(function (index2) {
                switch (index2) {
                    case 0:
                        palabra = $(this).text();
                        break;
                }
            });
        });
        if (palabra == "No hay Datos") {
         
            resp = true;
        }
        return resp;
    }

    


//VALIDAR SOLO NUMEROS
//    $(document).ready(function () {
//        $("#txtcant").keydown(function (event) {
//            if (event.shiftKey) {
//                event.preventDefault();
//            }

//            if (event.keyCode == 46 || event.keyCode == 8) {
//            }
//            else {
//                if (event.keyCode < 95) {
//                    if (event.keyCode < 48 || event.keyCode > 57) {
//                        event.preventDefault();
//                    }
//                }
//                else {
//                    if (event.keyCode < 96 || event.keyCode > 105) {
//                        event.preventDefault();
//                    }
//                }
//            }
//        });
//});




    function EnviarTabla(data) {
        //CODE VENTA Y SEC !RA POSICION DEL ARREGLO
        //FALTA ESTO
        var jsonTablaProd = '{"TablaProd":[{ "descprod": "' + data.d[0] + '", "codunidad": "' + localStorage.Sucursal + '", "Cantidad": "' + localStorage.Catalogo + '", "precfinal": "' + localStorage.Caja + '", "importe": "' + localStorage.idUsu + '" }]}';
       
       var obj = JSON.parse(jsonTablaProd);
       
       var descprod, codunidad, cantidad, precfinal, importe, Codigo, Codalmacen;
        $("#datatable tbody tr").each(function (index) {
          
            $(this).children("td").each(function (index2) {
                switch (index2) {
                    case 0:
                        descprod = $(this).html();
                        break;

                 

                    case 2:
                        cantidad = $(this).text();
                        break;

                    case 3:
                        precfinal = $(this).text();
                        break;

                    case 4:
                        importe = $(this).text();
                        break;

                    case 6:
                        Codigo = $(this).text();
                        break;

                    case 7:
                        Codalmacen = $(this).text();
                        break;

                    case 10:
                        codunidad = $(this).text();
                        break;
                }
             
                
            });
            obj["TablaProd"].push({ "descprod": descprod, "codunidad": codunidad, "cantidad": cantidad, "precfinal": precfinal, "importe": importe, "Codigo": Codigo, "Codalmacen": Codalmacen});
          
            jsonTablaProd = JSON.stringify(obj);
        });
       
        
        $.ajax({
            type: "POST",
            url: "server/login.aspx/AddVenta",
            data: jsonTablaProd,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                // alert(data.d[0].tipoprec)
                //alert(data.d[0].codVenta);
                if (data.d == "OK") {
                   
                    document.getElementById('bodytable1').innerHTML = "<tr><td colspan='8' data-title='Informacion!' style='text-align:center;'>No hay Datos</td></tr>";
                    SumarColumna();
                    Lungo.Notification.success(
                            "Success",                  //Title
                            "Se Genero la venta correctamente!",     //Description
                            "check",                    //Icon
                            3                          //Time on screen
                            //afterNotification           //Callback function
                        );

                }
                else {
                    Lungo.Notification.error(
                     "Error",                      //Title
                     "Error al generar la venta",     //Description
                     "cancel",                     //Icon
                     1                          //Time on screen
                                   //Callback function
                   );

                }
            },
            failure: function (response) {
                alert(response.d);
            }
        });
    }


    function ValidaSoloNumeros() {
        if ((event.keyCode < 48) || (event.keyCode > 57))
            event.returnValue = false;
    }

    function LimpiarInput() { 
    $("#txtbuscar").val("");
    }

    function LimpiarInput2() {
        $("#txtbuscar2").val("");
    }

    function GenerarVenta() {
       
        res = VerificarFilaVacia();
       
        if (res == true) {
            Lungo.Notification.error(
                             "Error",                      //Title
                             "No hay productos para generar venta!",     //Description
                             "cancel",                     //Icon
                             3                          //Time on screen
                             );
        
        }
        else {
            if (comprobarEdicion() == false) { //verifica si hay una fila editandose
                $.ajax({
                    type: "POST",
                    url: "server/login.aspx/InsertarVenta",
                    data: "{codCatalogo: '" + localStorage.getItem('Catalogo') + "',codSucursal:'" + localStorage.getItem('Sucursal') + "',codCaja:'" + localStorage.getItem('Caja') + "',codUsu:'" + localStorage.getItem('CodUsu') + "',idUsu:'" + localStorage.getItem('idUsu') + "'}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: EnviarTabla,
                    failure: function (response) {
                        alert(response.d);
                    }
                });
            }
            else {
                Lungo.Notification.error(
                                            "Error",                      //Title
                                            "Hay una fila editandose,termine la edicion!!!",     //Description
                                            "cancel",                     //Icon
                                            3                          //Time on screen
                                            );

            }
        }
    }


    function getVentas() {
        var i;
        var b = "v12233333";
        var V123456 = "";
        var c= String(b);
        var a = " <li class='dark'><strong> Bienvenido a El Nomade Movil 1.0!</strong></li>";
        $.ajax({
            type: "POST",
            url: "server/login.aspx/getVentas",
            data: "{idUsu:'" + localStorage.getItem('CodUsu') + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                // alert(data.d[0].tipoprec)
                //alert(data.d[0].codVenta);
                if (data.d.length > 0) {
                    for (i = 0 ; i < data.d.length ; i++) {
                        a += "<li class='selectable accept' onclick=verDetVenta('" + data.d[i].codVenta + "');><a href='#ListarProductos' data-router='section'><strong>N° Venta " + data.d[i].codVenta + "</strong><small>Total: S/." + data.d[i].Total + "</small> </a></li>";
                    }
                  
                }
                else {
                    a += "   <li>" +
                       "     <strong>No tienes ventas!!!</strong>" +
                        " </li>";
                }
                //  alert(a);
                document.getElementById('ulventa').innerHTML = a;
            },
            failure: function (response) {
                alert(response.d);
            }
        });

    }
   
    function verDetVenta(codVenta) {
    //   alert(codVenta);
        //alert(val)
        var a = "";
        localStorage.codVenta = codVenta;
        $.ajax({
            type: "POST",
            url: "server/login.aspx/getDetVenta",
            data: "{codventa:'" + codVenta + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                // alert(data.d[0].tipoprec)
                //alert(data.d[0].codVenta);
                for (i = 0 ; i < data.d.length ; i++) {
                    a += "<tr>" +
                "<td data-title='Producto'>" + data.d[i].descprod + "</td>" +
                "<td data-title='Und.'>" + data.d[i].decunidad + "</td>" +
                "<td data-title='Cant.'>" + parseInt(data.d[i].cantidad) + "</td>" +
                "<td data-title='Precio S/.' class='numeric'>" + data.d[i].precventa + "</td>" +
                "<td data-title='Importe S/.'>" + data.d[i].importe + "</td>" +
                 "<td data-title='Accion'>" +
                 "<a href='#' class='button small cancel' onclick=EditarFilaDet(this);>Editar</a>" +
                 " <a href='#' class='button small cancel' onclick=quitarProdList('" + data.d[i].item + "','" + data.d[i].tipoprodind + "',this);>Quitar</a>" +
                 "</td>" +
                  "<td style='Display:none;'>" + data.d[i].Codigo + "</td>" +
                   " <td style='Display:none;'>" + data.d[i].Codalmacen + "</td>" +
                   " <td style='Display:none;'>" + data.d[i].tipoprec + "</td>" +
                    " <td style='Display:none;'>" + data.d[i].preminimo + "</td>" +
                     " <td style='Display:none;'>" + data.d[i].codunidad + "</td>" +
                     " <td style='Display:none;'>" + data.d[i].item + "</td>" +
                        "<td style='Display:none;' >0</td>" +
               "</tr>";


                       
                }
                document.getElementById('table_body').innerHTML = a;
                SumarColumnatabla2();

      





            },
            failure: function (response) {
                alert(response.d);
            }
        });

      

    }

    //$("#ulventa .selectable accept").click(function () {
    //    alert($(this).html);

//})

    function quitarProdList(item, tipoprod, r) {

        if (confirm("Deseas eliminar el producto realmente?") == true) {
            $.ajax({
                type: "POST",
                url: "server/login.aspx/EliminarDetProd",
                data: "{codventa:'" + localStorage.getItem('codVenta') + "',vtacnum:'1',item:'" + item + "',tipoprod:'" + tipoprod + "',idUsu:'" + localStorage.getItem('idUsu') + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    // alert(data.d[0].tipoprec)
                    //alert(data.d[0].codVenta);
                    if (data.d == "OK") {
                        var i = r.parentNode.parentNode.rowIndex;
                        var numfilas;
                        Lungo.Notification.success(
                                 "Success",                  //Title
                                 "Se elimino correctamente!",     //Description
                                 "check",                    //Icon
                                 1                          //Time on screen
                                 //afterNotification           //Callback function
                             );
                        document.getElementById("datatable2").deleteRow(i);
                        SumarColumnatabla2();
                        numfilas = CuentaFilas2();

                        if (numfilas <= 0) {
                            $("#datatable2 tbody").append("<tr>" +
                          "<td colspan='12' data-title='Informacion!' style='text-align:center;'>No hay Datos</td>" +
                          "</tr>");
                        }



                    }
                    else {

                        Lungo.Notification.error(
                          "Error",                      //Title
                          "Error al eliminar producto",     //Description
                          "cancel",                     //Icon
                          2                          //Time on screen
                                        //Callback function
                        );
                    }
                    //for (i = 0 ; i < data.d.length ; i++) {
                    //    a += "<li class='selectable accept' onclick=verDetVenta('" + data.d[i].codVenta + "');><a href='#ListarProductos' data-router='section'><strong>N° Venta " + data.d[i].codVenta + "</strong><small>Total: S/." + data.d[i].Total + "</small> </a></li>";
                    //}
                    //document.getElementById('ulventa').innerHTML = a;
                    //  alert(a);
                },
                failure: function (response) {
                    alert(response.d);
                }
            });
        }
       
    }

    function logout() {
        location.href = "http://localhost:6798/index.html"
        localStorage.clear();
    }

    function eliminacodVenta() {
        //alert("entre")
        localStorage.removeItem('codVenta');
        getVentas();
    }

    function SumarColumnatabla2() {



        var total = 0.0;
        var subtotal = 0.0;

        $("#datatable2 tbody tr").each(function (index) {
            var campo3, campo4, campo5;
            $(this).children("td").each(function (index2) {
                switch (index2) {
                    case 2:
                        if (document.getElementById('txtcant2')) {
                            campo3 = $("#hdcant2").val();
                        } else {
                            campo3 = $(this).text();
                        }

                        break;

                    case 3:
                        if (document.getElementById('hdprec2')) {
                            campo4 = $("#hdprec2").val();
                            subtotal = parseFloat(campo4.replace(',', '.')) * parseFloat(campo3.replace(',', '.'));
                            total += parseFloat(campo4.replace(',', '.')) * parseFloat(campo3.replace(',', '.'));
                        } else {
                            campo4 = $(this).text();
                            subtotal = parseFloat(campo4.replace(',', '.')) * parseFloat(campo3.replace(',', '.'));
                            total += parseFloat(campo4.replace(',', '.')) * parseFloat(campo3.replace(',', '.'));
                        }
                        break;

                    case 4:
                        $(this).html(subtotal.toFixed(3).toString().replace('.', ','));
                        break;
                }
            });
        });

        $("#datatable2 tfoot tr").each(function (index) {

            $(this).children("td").each(function (index2) {
                switch (index2) {
                    case 1:

                        $(this).html(total.toFixed(3).toString().replace('.', ','));
                        break;

                }
            });
        });


    }


    function AddProdDetVent() {
       
        var res = validarProducto2();

      
        if (res == true) {

            var r = VerificarFilaVacia2();
            var prod = $("#txtbuscar2").val();

            $("#txtbuscar2").val("");
            if (r == true) {
                if (comprobarEdicion2() == false) {//comprueba si hay fial editandose
                    if (VerificarExisteProducto2(prod) == false) {
                        $.ajax({
                            type: "POST",
                            url: "server/login.aspx/AgregarProductoDetalle",
                            data: "{descproducto: '" + prod + "',vtacode:'" + localStorage.getItem('codVenta') + "',codCatalogo:'" + localStorage.getItem('Catalogo') + "',codSucursal:'" + localStorage.getItem('Sucursal') + "',codCaja:'" + localStorage.getItem('Caja') + "',idUsu:'" + localStorage.getItem('idUsu') + "',codalmacen:'" + localStorage.getItem('Almacen') + "'}",
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function (data) {

                                document.getElementById("datatable2").deleteRow(1);
                                $("#datatable2 tbody").append("<tr>" +
                                 "<td data-title='Producto'>" + prod + "</td>" +
                                 "<td data-title='Um.'>" + data.d[0].decunidad + "</td>" +
                                 "<td data-title='Cant.'>1</td>" +
                                 "<td data-title='Precio' class='numeric'>" + data.d[0].precventa + "</td>" +
                                 "<td data-title='Total'>12</td>" +
                                 "<td data-title='Accion'> " +
                                   "<a href='#' class='button small cancel'  onclick=EditarFilaDet(this);>Editar</a>" +
                               " <a href='#' class='button small cancel' onclick=quitarProdList('" + data.d[0].item + "','" + data.d[0].tipoprodind + "',this);>Quitar</a>" +
                                 "</td>" +
                                 "<td style='Display:none;' >" + data.d[0].Codigo + "</td>" +
                             "<td style='Display:none;' >" + data.d[0].Codalmacen + "</td>" +
                               "<td style='Display:none;' >" + data.d[0].tipoprec + "</td>" +
                               "<td style='Display:none;' >" + data.d[0].preminimo + "</td>" +
                               "<td style='Display:none;' >" + data.d[0].codunidad + "</td>" +
                                "<td style='Display:none;' >" + data.d[0].item + "</td>" +
                                  "<td style='Display:none;' >0</td>" +
                                 "</tr>");
                                SumarColumnatabla2();
                                Lungo.Notification.success(
                                        "Success",                  //Title
                                        "Se agrego Exitosamente!",     //Description
                                        "check",                    //Icon
                                        1                          //Time on screen
                                        //afterNotification           //Callback function
                                    );
                            },
                            failure: function (response) {
                                alert(response.d);
                            }
                        });
                    }
                    else {
                        Lungo.Notification.error(
                      "Error",                      //Title
                      "Producto ya esta agregado!!",     //Description
                      "cancel",                     //Icon
                      3                          //Time on screen
                      );
                    }
                }
                else {
                    Lungo.Notification.error(
                                        "Error",                      //Title
                                        "No se agrego por haber una fila editandose!!",     //Description
                                        "cancel",                     //Icon
                                        3                          //Time on screen
                                        );
                }
            }
            else {
                if (comprobarEdicion2() == false) {//comprueba si hay fial editandose
                    if (VerificarExisteProducto2(prod) == false) {
                        $.ajax({
                            type: "POST",
                            url: "server/login.aspx/AgregarProductoDetalle",
                            data: "{descproducto: '" + prod + "',vtacode:'" + localStorage.getItem('codVenta') + "',codCatalogo:'" + localStorage.getItem('Catalogo') + "',codSucursal:'" + localStorage.getItem('Sucursal') + "',codCaja:'" + localStorage.getItem('Caja') + "',idUsu:'" + localStorage.getItem('idUsu') + "',codalmacen:'" + localStorage.getItem('Almacen') + "'}",
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function (data) {

                                $("#datatable2 tbody").append("<tr>" +
                                 "<td data-title='Producto'>" + prod + "</td>" +
                                 "<td data-title='Um.'>" + data.d[0].decunidad + "</td>" +
                                 "<td data-title='Cant.'>1</td>" +
                                 "<td data-title='Precio' class='numeric'>" + data.d[0].precventa + "</td>" +
                                 "<td data-title='Total'>12</td>" +
                                   "<td data-title='Accion'> " +
                                   "<a href='#' class='button small cancel' onclick=EditarFilaDet(this);>Editar</a>" +
                               " <a href='#' class='button small cancel' onclick=quitarProdList('" + data.d[0].item + "','" + data.d[0].tipoprodind + "',this);>Quitar</a>" +
                                 "</td>" +
                                 "<td style='Display:none;' >" + data.d[0].Codigo + "</td>" + //6
                             "<td style='Display:none;' >" + data.d[0].Codalmacen + "</td>" +
                               "<td style='Display:none;' >" + data.d[0].tipoprec + "</td>" +
                               "<td style='Display:none;' >" + data.d[0].preminimo + "</td>" +
                               "<td style='Display:none;' >" + data.d[0].codunidad + "</td>" +
                                  "<td style='Display:none;' >" + data.d[0].item + "</td>" +
                                    "<td style='Display:none;' >0</td>" +
                                 "</tr>");
                                SumarColumnatabla2();
                                Lungo.Notification.success(
                                       "Success",                  //Title
                                       "Se agrego Exitosamente!",     //Description
                                       "check",                    //Icon
                                       1                          //Time on screen
                                       //afterNotification           //Callback function
                                   );


                            },
                            failure: function (response) {
                                alert(response.d);
                            }
                        });
                    }
                    else {
                        Lungo.Notification.error(
                                        "Error",                      //Title
                                        "Producto ya esta agregado!!",     //Description
                                        "cancel",                     //Icon
                                        3                          //Time on screen
                                        );
                    }
                }
                else {
                    Lungo.Notification.error(
                                     "Error",                      //Title
                                     "No se agrego por haber una fila editandose!!",     //Description
                                     "cancel",                     //Icon
                                     3                          //Time on screen
                                     );

                }
            }
        }
        else {
            Lungo.Notification.error(
                    "Error",                      //Title
                    "Producto vacio seleccione uno.",     //Description
                    "cancel",                     //Icon
                    3                          //Time on screen
                    );
        }
    }


//EDITAR LISTA PRODUCTO DETALLE
    function EditarFilaDet(r) {
        var indicefila = r.parentNode.parentNode.rowIndex;
        var table = document.getElementById('datatable2');
        comprobarIndiceEdit2();
        var indicador = table.rows[indicefila].cells[8].innerHTML;
        var codprod = table.rows[indicefila].cells[6].innerHTML;
        // valor = table.rows[indicefila].cells[8].innerHTML;

        if (indicador == "U") {
            table.rows[indicefila].cells[5].innerHTML = 
            "  <a href='#' class='button small cancel'  onclick=EditCantUDet(this);>Cantidad</a>" +
              " <a href='#' class='button small cancel'  onclick=EditarPrecUDet(this);>Precio</a>" +
             "  <a href='#' class='button small cancel'  onclick=CancelarDet(this);>Regresar</a>";
            table.rows[indicefila].cells[12].innerHTML = "1";
        }
        else {

            table.rows[indicefila].cells[2].innerHTML = "<input style='width:100px;' onkeypress='ValidaSoloNumeros();' id='txtcant2' type='text' value='" + table.rows[indicefila].cells[2].innerHTML + "' >" +
                                                    "<input id='hdcant2' type='hidden' value='" + table.rows[indicefila].cells[2].innerHTML + "'>";
            // setFocusToTextBox();
            table.rows[indicefila].cells[5].innerHTML = "<a href='#' class='button small cancel'  onclick=GuardarFilaDetCant(this);>Guardar</a>" +
                                                      "<a href='#' class='button small cancel'  onclick=RegresarFilaDet(this);>Regresar</a>";
            table.rows[indicefila].cells[12].innerHTML = "1";
          
        }

    }


    function EditCantUDet(r) {
        var indicefila = r.parentNode.parentNode.rowIndex;
        var table = document.getElementById('datatable2');
        table.rows[indicefila].cells[2].innerHTML = "<input style='width:100px;' onkeypress='return NumCheck(event, this)' id='txtcant2' type='text' value='" + table.rows[indicefila].cells[2].innerHTML + "' >" +
                                              "<input id='hdcant2' type='hidden' value='" + table.rows[indicefila].cells[2].innerHTML + "'>";
        table.rows[indicefila].cells[5].innerHTML = "<a href='#' class='button small cancel'  onclick=GuardarCantUDet(this);>Guardar</a>" +
                                                    "<a href='#' class='button small cancel'  onclick=RegresarFilaDet(this);>Regresar</a>";

       
       

    }

    function GuardarCantUDet(r) {
        var indicefila = r.parentNode.parentNode.rowIndex;
        var table = document.getElementById('datatable2');
        var item = table.rows[indicefila].cells[11].innerHTML;
        var codpro = table.rows[indicefila].cells[6].innerHTML;
        var coduni = table.rows[indicefila].cells[10].innerHTML;
        var precio = table.rows[indicefila].cells[3].innerHTML;
        var importe = table.rows[indicefila].cells[4].innerHTML;
        var descprod = table.rows[indicefila].cells[0].innerHTML;
        $.ajax({
            type: "POST",
            url: "server/login.aspx/ActualizarDetProd",
            data: "{codvta: '" + localStorage.getItem('codVenta') + "',vtacnum:'1', codprod:'" + codpro + "',item:'" + item + "',codunidad:'" + coduni + "',cantidad:'" + $("#txtcant2").val() + "',precio:'" + precio + "',importe:'" +  parseFloat( precio * $("#txtcant2").val() )+ "',codcatalogo:'" + localStorage.getItem('Catalogo') + "',codsucursal:'" + localStorage.getItem('Sucursal') + "',codcaja:'" + localStorage.getItem('Caja') + "',idUsu:'" + localStorage.getItem('idUsu') + "',descprod:'" + descprod + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {

                if (data.d == "OK") {
                    table.rows[indicefila].cells[2].innerHTML = "<td data-title='Cant.' >" + $("#txtcant2").val() + "</td>";
                    table.rows[indicefila].cells[5].innerHTML = "<a href='#' class='button small cancel'  onclick=EditarFilaDet(this);>Editar</a>" +
                                                                "<a href='#' class='button small cancel'  onclick=quitarProdList('" + item + "','E',this);>Quitar</a>";



                    SumarColumnatabla2();
                    Lungo.Notification.success(
                           "Success",                  //Title
                           "Se actualizo Exitosamente!",     //Description
                           "check",                    //Icon
                           1                          //Time on screen
                           //afterNotification           //Callback function
                       );

                }
            },
            failure: function (response) {
                alert(response.d);
            }
        });










    }

    function RegresarFilaDet(r) {
        var indicefila = r.parentNode.parentNode.rowIndex;
        var table = document.getElementById('datatable2');
        var item = table.rows[indicefila].cells[11].innerHTML;
       // alert(item)
       
        table.rows[indicefila].cells[2].innerHTML = "<td data-title='Cant.' >" + $("#hdcant2").val() + "</td>";
        table.rows[indicefila].cells[5].innerHTML = "<a href='#' class='button small cancel'  onclick=EditarFilaDet(this);>Editar</a>" +
                                                    "<a href='#' class='button small cancel'  onclick=quitarProdList('" + item + "','E',this);>Quitar</a>";
        table.rows[indicefila].cells[12].innerHTML = "0";
    }


    function CancelarDet(r) {
        var indicefila = r.parentNode.parentNode.rowIndex;
        var table = document.getElementById('datatable2');
        var item = table.rows[indicefila].cells[11].innerHTML;
        table.rows[indicefila].cells[5].innerHTML = "<a href='#' class='button small cancel'  onclick=EditarFilaDet(this);>Editar</a>" +
                                                    "<a href='#' class='button small cancel'  onclick=quitarProdList('" + item + "','E',this);>Quitar</a>";

        table.rows[indicefila].cells[12].innerHTML = "0";

    }

    function EditarPrecUDet(r) {
        var indicefila = r.parentNode.parentNode.rowIndex;
        var table = document.getElementById('datatable2');
        table.rows[indicefila].cells[3].innerHTML = "<input style='width:100px;' onkeypress='return NumCheck(event, this)' id='txtprec2' type='text' value='" + table.rows[indicefila].cells[3].innerHTML + "' >" +
                                              "<input id='hdprec2' type='hidden' value='" + table.rows[indicefila].cells[3].innerHTML + "'>";
        table.rows[indicefila].cells[5].innerHTML = "<a href='#' class='button small cancel'  onclick=GuardarPrecDet(this);>Guardar</a>" +
                                                    "<a href='#' class='button small cancel'  onclick='RegresarPrecDet(this);'>Regresar</a>";


        
    }




    function RegresarPrecDet(r) {
        var indicefila = r.parentNode.parentNode.rowIndex;
        var table = document.getElementById('datatable2');
        var item = table.rows[indicefila].cells[11].innerHTML;
        table.rows[indicefila].cells[3].innerHTML = "<td data-title='Cant.' >" + $("#hdprec2").val() + "</td>";
        table.rows[indicefila].cells[5].innerHTML = "<a href='#' class='button small cancel'  onclick=EditarFilaDet(this);>Editar</a>" +
                                                    "<a href='#' class='button small cancel'  onclick=quitarProdList('" + item + "','E',this);>Quitar</a>";
        table.rows[indicefila].cells[12].innerHTML = "0";
      
    }

    function GuardarPrecDet(r) {
        var indicefila = r.parentNode.parentNode.rowIndex;
        var table = document.getElementById('datatable2');
        var precminimo = table.rows[indicefila].cells[9].innerHTML;
        var item = table.rows[indicefila].cells[11].innerHTML;
        var codpro = table.rows[indicefila].cells[6].innerHTML;
        var coduni = table.rows[indicefila].cells[10].innerHTML;
        var cantidad = table.rows[indicefila].cells[2].innerHTML;
        var importe = table.rows[indicefila].cells[4].innerHTML;
        var descprod = table.rows[indicefila].cells[0].innerHTML;
        var inputprec =  parseFloat( $("#txtprec2").val());
        if (inputprec < precminimo) {
            table.rows[indicefila].cells[3].innerHTML = "<td data-title='Cant.' >" + $("#hdprec2").val() + "</td>";
            table.rows[indicefila].cells[5].innerHTML = "<a href='#' class='button small cancel'  onclick=EditarFilaDet(this);>Editar</a>" +
                                                        "<a href='#' class='button small cancel'  onclick=quitarProdList('" + item + "','E',this);>Quitar</a>";

        
            //  Lungo.Notification.html('<h3><b>El Precio sobrepasa el minimo!</b></h3>', "Close");
            Lungo.Notification.error(
              "Error",                      //Title
              "El precio no puede ser menor al minimo!!!",     //Description
              "cancel",                     //Icon
              3                          //Time on screen
              );
        } else {

            $.ajax({
                type: "POST",
                url: "server/login.aspx/ActualizarDetProd",
                data: "{codvta: '" + localStorage.getItem('codVenta') + "',vtacnum:'1', codprod:'" + codpro + "',item:'" + item + "',codunidad:'" + coduni + "',cantidad:'" + cantidad + "',precio:'" + $("#txtprec2").val() + "',importe:'" + parseFloat(  $("#txtprec2").val() * cantidad) + "',codcatalogo:'" + localStorage.getItem('Catalogo') + "',codsucursal:'" + localStorage.getItem('Sucursal') + "',codcaja:'" + localStorage.getItem('Caja') + "',idUsu:'" + localStorage.getItem('idUsu') + "',descprod:'" + descprod + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {

                    if (data.d == "OK") {
                        table.rows[indicefila].cells[3].innerHTML = "<td data-title='Cant.' >" + $("#txtprec2").val() + "</td>";
                        table.rows[indicefila].cells[5].innerHTML = "<a href='#' class='button small cancel'  onclick=EditarFilaDet(this);>Editar</a>" +
                                                                    "<a href='#' class='button small cancel'  onclick=quitarProdList('" + item + "','E',this);>Quitar</a>";

                       

                        SumarColumnatabla2();
                        Lungo.Notification.success(
                                        "Success",                  //Title
                                        "Se Actualizo Exitosamente!",     //Description
                                        "check",                    //Icon
                                        1                          //Time on screen
                                        //afterNotification           //Callback function
                                    );
                    }
                },
                failure: function (response) {
                    alert(response.d);
                }
            });
        }
      

    }

    function GuardarFilaDetCant(r) {
        var indicefila = r.parentNode.parentNode.rowIndex;
        var table = document.getElementById('datatable2');
        var item = table.rows[indicefila].cells[11].innerHTML;
        var codpro = table.rows[indicefila].cells[6].innerHTML;
        var coduni = table.rows[indicefila].cells[10].innerHTML;
        var precio = table.rows[indicefila].cells[3].innerHTML;
        var importe = table.rows[indicefila].cells[4].innerHTML;
        var descprod = table.rows[indicefila].cells[0].innerHTML;
       // alert(item+codpro+coduni)
        $.ajax({
            type: "POST",
            url: "server/login.aspx/ActualizarDetProdPreC",
            data: "{codvta: '" + localStorage.getItem('codVenta') + "',vtacnum:'1', codprod:'" + codpro + "',item:'" + item + "',codunidad:'" + coduni + "',cantidad:'" + $("#txtcant2").val() + "',precio:'" + precio + "',codcatalogo:'" + localStorage.getItem('Catalogo') + "',codsucursal:'" + localStorage.getItem('Sucursal') + "',codcaja:'" + localStorage.getItem('Caja') + "',idUsu:'" + localStorage.getItem('idUsu') + "',descprod:'" + descprod + "',codAlmc:'" + localStorage.getItem('Almacen') + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                //var b = response.d.toString();
                var element = data.d.split(",");
               // alert(element[0])
                if (element[0] == "OK") {
                    table.rows[indicefila].cells[2].innerHTML = "<td data-title='Cant.' >" + $("#txtcant2").val() + "</td>";
                    table.rows[indicefila].cells[3].innerHTML = element[1].replace(".", ",");
                    table.rows[indicefila].cells[5].innerHTML = "<a href='#' class='button small cancel'  onclick=EditarFilaDet(this);>Editar</a>" +
                                                           "<a href='#' class='button small cancel'  onclick=quitarProdList('" + item + "','E',this);>Quitar</a>";
                    SumarColumnatabla2();
                    Lungo.Notification.success(
                                 "Success",                  //Title
                                 "Se Actualizo Exitosamente!",     //Description
                                 "check",                    //Icon
                                 1                          //Time on screen
                                 //afterNotification           //Callback function
                             );
                }
                else { //error
                }
            },
            failure: function (response) {
                alert(response.d);
            }
        });


        //table.rows[indicefila].cells[2].innerHTML = "<td data-title='Cant.' >" + $("#txtcant").val() + "</td>";
        //table.rows[indicefila].cells[5].innerHTML = "<button id='btnquitar'  onclick='EliminarFila(this);' class='button tiny cancel margin-bottom'  ><abbr>Quitar</abbr></button>" +
        //                                    "<button id='btneditar' onclick='EditarFila(this);' class='button tiny cancel margin-bottom'  ><abbr>Editar</abbr></button>";
        //SumarColumna();
    }



    function comprobarIndiceEdit() {
        var ind, fila;
        var table = document.getElementById('datatable');
        $("#datatable tbody tr").each(function (index) {

            $(this).children("td").each(function (index2) {
                switch (index2) {
                    case 11:
                        ind = $(this).text();
                        //     alert(ind)
                        if (ind == "1") {
                            fila = index + 1;
                            //alert(fila)
                            if (fila != null) {
                                table.rows[fila].cells[5].innerHTML = "<button id='btneditar' onclick='EditarFila(this);' class='button small cancel'  ><abbr>Editar</abbr></button>" +
                                    "<button id='btnquitar'  onclick='EliminarFila(this);' class='button small cancel'  ><abbr>Quitar</abbr></button>";
                              
                                table.rows[fila].cells[11].innerHTML = "0";
                                if (document.getElementById('txtcant')) {
                                    table.rows[fila].cells[2].innerHTML = "<td data-title='Cant.' >" + $("#hdcant").val() + "</td>";

                                }
                                else {
                                    if (document.getElementById('txtprec'))
                                        table.rows[fila].cells[3].innerHTML = "<td data-title='Cant.' >" + $("#hdprec").val() + "</td>";


                                }
                            }
                        }

                        break;
                }
            });
        });
    }

    function comprobarIndiceEdit2() {
        var ind, fila,item;
        var table = document.getElementById('datatable2');
        $("#datatable2 tbody tr").each(function (index) {

            $(this).children("td").each(function (index2) {
                switch (index2) {
                    case 11:
                        item = $(this).text();
                        break;
                    case 12:
                        ind = $(this).text();
                        //     alert(ind)
                        if (ind == "1") {
                            fila = index + 1;
                            //alert(fila)
                            if (fila != null) {
                                table.rows[fila].cells[5].innerHTML = "<a href='#' class='button small cancel'  onclick=EditarFilaDet(this);>Editar</a>" +
                                                    "<a href='#' class='button small cancel'  onclick=quitarProdList('" + item + "','E',this);>Quitar</a>";

                                table.rows[fila].cells[12].innerHTML = "0";
                                if (document.getElementById('txtcant2')) {
                                    table.rows[fila].cells[2].innerHTML = "<td data-title='Cant.' >" + $("#hdcant2").val() + "</td>";

                                }
                                else {
                                    if (document.getElementById('txtprec2'))
                                        table.rows[fila].cells[3].innerHTML = "<td data-title='Cant.' >" + $("#hdprec2").val() + "</td>";


                                }
                            }
                        }

                        break;
                }
            });
        });
    }

    function comprobarEdicion() {
        var ind, fila,resp;
        var table = document.getElementById('datatable');
        $("#datatable tbody tr").each(function (index) {

            $(this).children("td").each(function (index2) {
                switch (index2) {
                    case 11:
                        ind = $(this).text();
                        //     alert(ind)
                        if (ind == "1") {
                            resp = true;
                        }
                        else {
                            resp = false;
                        }

                        break;
                }
            });
        });
        return resp;
    }

    function comprobarEdicion2() {
        var ind, fila, resp;
        var table = document.getElementById('datatable2');
        $("#datatable2 tbody tr").each(function (index) {

            $(this).children("td").each(function (index2) {
                switch (index2) {
                    case 12:
                        ind = $(this).text();
                        //     alert(ind)
                        if (ind == "1") {
                            resp = true;
                        }
                        else {
                            resp = false;
                        }

                        break;
                }
            });
        });
        return resp;
    }
  

    function SumarColumna() {



        var total = 0.0;
        var subtotal = 0.0;

        $("#datatable tbody tr").each(function (index) {
            var campo3, campo4, campo5;
            $(this).children("td").each(function (index2) {
                switch (index2) {
                    case 2:
                        if (document.getElementById('txtcant')) {
                            campo3 = $("#hdcant").val();
                        } else {
                            campo3 = $(this).text();
                        }

                        break;

                    case 3:
                        if (document.getElementById('hdprec')) {
                            campo4 = $("#hdprec").val();
                            subtotal = parseFloat(campo4.replace(',', '.')) * parseFloat(campo3.replace(',', '.'));
                            total += parseFloat(campo4.replace(',', '.')) * parseFloat(campo3.replace(',', '.'));
                        } else {
                            campo4 = $(this).text();
                            subtotal = parseFloat(campo4.replace(',', '.')) * parseFloat(campo3.replace(',', '.'));
                            total += parseFloat(campo4.replace(',', '.')) * parseFloat(campo3.replace(',', '.'));
                        }
                        break;

                    case 4:
                        $(this).html(subtotal.toFixed(3).toString().replace('.', ','));
                        break;
                }
            });
        });

        $("#datatable tfoot tr").each(function (index) {

            $(this).children("td").each(function (index2) {
                switch (index2) {
                    case 1:

                        $(this).html(total.toFixed(3).toString().replace('.', ','));
                        break;

                }
            });
        });


    }



    function VerificarExisteProducto(descproducto) {
        var resp = false;

        $("#datatable tbody tr").each(function (index) {
            $(this).children("td").each(function (index2) {
                switch (index2) {
                    case 0:
                        if ($(this).text() == descproducto) {
                            resp = true;

                        }

                        break;
                }
            });
        });

        return resp;
    }

    function VerificarExisteProducto2(descproducto) {
        var resp = false;

        $("#datatable2 tbody tr").each(function (index) {
            $(this).children("td").each(function (index2) {
                switch (index2) {
                    case 0:
                        if ($(this).text() == descproducto) {
                            resp = true;

                        }

                        break;
                }
            });
        });

        return resp;
    }