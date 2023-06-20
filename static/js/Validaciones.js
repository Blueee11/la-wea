$(function(){

    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/
    
    $('#btnLimpiar').click(function(){
        $('#txtRut, #txtDv, #txtNombre, #txtEmail, #txtNum, #txtApellido, #SelectReg, #SelectNVL').val('');
        $('#txtRut').focus();
        $('#SelectReg, #SelectNVL').val('0');
    })

    let numeros = '0123456789';
    let letras  = 'qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNMÁÉÍÓÚáéíóú';

    $('#txtRut').keypress(function(e){ 
        let caracter = String.fromCharCode(e.which);
        if(numeros.indexOf(caracter) < 0)
            return false;
    });

    $('#txtDv').keypress(function(e){ 
        let patron = numeros + 'kK';
        let caracter = String.fromCharCode(e.which);
        if(patron.indexOf(caracter) < 0)
            return false;
    });
    
    $('#txtNombre').keypress(function(e){ 
        let caracter = String.fromCharCode(e.which);
        if(letras.indexOf(caracter) < 0)
            return false;
    });

    $('#txtApellido').keypress(function(e){ 
        let caracter = String.fromCharCode(e.which);
        if(letras.indexOf(caracter) < 0)
            return false;
    });

    $('#txtEmail').keypress(function(e){ 
        let patron = numeros + letras + '-_.@';
        let caracter = String.fromCharCode(e.which);
        if(patron.indexOf(caracter) < 0)
            return false;
    });

    $('#txtNum').keypress(function(e){ 
        let patron = numeros ;
        let caracter = String.fromCharCode(e.which);
        if(patron.indexOf(caracter) <0)
            return false;
    });

    // validación campos vacios RegistroAdopcion
    $('#btnRegistrar').click(function(){
        if(!$(' #txtRut').val())
        {
            alert("Falta especificar el rut");
            $('#txtRut').focus();
        }
        else if(!$('#txtDv').val())
        {
            alert("Falta especificar el DV")
            $('#txtDv').focus();
        }
        else if(! esValidoElRut($('#txtRut').val(),$('#txtDv').val()))
        {
            alert("El rut no es válido")
            $('#txtRut').focus();
        }
        else if(!$('#txtNombre').val())
        {
            alert("Falta especificar el nombre")
            $('#txtNombre').focus();
        }
        else if(!$('#txtApellido').val())
        {
            alert("Falta especificar el apellido")
            $('#txtApellido').focus();
        }
        else if(!$('#txtEmail').val())
        {
            alert("Falta especificar el email")
            $('#txtEmail').focus();
        }
        else if(! emailRegex.test($('#txtEmail').val()))
        {
            alert("El formato del correo no es válido")
            $('#txtEmail').focus();
        }
        else if(!$('#txtNum').val())
        {
            alert("Falta especificar el número")
            $('#txtNum').focus();
        }
        else if($('#SelectReg').val()==0)
        {
            alert("Falta especificar la region")
            $('#SelectReg').focus();
        }
        else if($('#SelectNVL').val()==0)
        {
            alert("Falta especificar el Nivel educacional")
            $('#SelectNVL').focus();
        }
        else
        {
            let rut = $('#txtRut').val(); // get
            let dv = $('#txtDv').val(); // get
            let nombre = $('#txtNombre').val(); // get
            let apellido = $('#txtApellido').val(); // get
            let correo = $('#txtEmail').val(); // get
            let num = $('#txtNum').val(); // get
            let region = $('#SelectReg').val(); // get
            let educacion = $('#SelectNVL').val(); // get
            alert("Registrado con éxito. Sus datos son los siguientes:\n" 
            + rut + "-" + dv + "\n"
            + nombre + "\n"
            + apellido + "\n"
            + correo + "\n"
            + num + "\n"
            + region + "\n"
            + educacion); 
        }
    })

    // validación campos vacios CrearCuenta
    $('#btnCrear').click(function(){
        if(!$('#txtNombreUsuario').val())
        {
            alert("Falta especificar el nombre de usuario")
            $('#txtNombreUsuario').focus();
        }
        else if(!$('#txtNombre').val())
        {
            alert("Falta especificar el nombre")
            $('#txtNombre').focus();
        }
        else if(!$('#txtApellido').val())
        {
            alert("Falta especificar el apellido")
            $('#txtApellido').focus();
        }
        else if(!$('#txtEmail').val())
        {
            alert("Falta especificar el email")
            $('#txtEmail').focus();
        }
        else if(! emailRegex.test($('#txtEmail').val()))
        {
            alert("El formato del correo no es válido")
            $('#txtEmail').focus();
        }
        else if(!$('#txtNum').val())
        {
            alert("Falta especificar el número")
            $('#txtNum').focus();
        }
        else if(!$('#txtCrearContraseña').val())
        {
            alert("Falta especificar la contraseña")
            $('#txtCrearContraseña').focus();
            event.preventDefault();
        }
        else if(!$('#txtConfirmarContraseña').val())
        {
            alert("Falta especificar la contraseña")
            $('#txtConfirmarContraseña').focus();
            event.preventDefault();
        }
        else
        {
            let NombreUsuario = $('#txtNombreUsuario').val(); // get
            let nombre = $('#txtNombre').val(); // get
            let apellido = $('#txtApellido').val(); // get
            let correo = $('#txtEmail').val(); // get
            let num = $('#txtNum').val(); // get
            alert("Registrado con éxito. Sus datos son los siguientes:\n" 
            + NombreUsuario + "\n"
            + nombre + "\n"
            + apellido + "\n"
            + correo + "\n"
            + num + "\n"); 
        }
    })

    // validación campos vacios IniciarSesionAdmi
    $('#btnIniciarSesion').click(function(event){
        if(!$(' #txtRut').val())
        {
            alert("Falta especificar el rut");
            $('#txtRut').focus();
            event.preventDefault();
        }
        else if(!$('#txtDv').val())
        {
            alert("Falta especificar el DV")
            $('#txtDv').focus();
            event.preventDefault();
        }
        else if(! esValidoElRut($('#txtRut').val(),$('#txtDv').val()))
        {
            alert("El rut no es válido")
            $('#txtRut').focus();
            event.preventDefault();
        }
        else if(!$('#txtEmail').val())
        {
            alert("Falta especificar el email")
            $('#txtEmail').focus();
            event.preventDefault();
        }
        else if(! emailRegex.test($('#txtEmail').val()))
        {
            alert("El formato del correo no es válido")
            $('#txtEmail').focus();
            event.preventDefault();
        }
        else if(!$('#txtContraseña').val())
        {
            alert("Falta especificar la contraseña")
            $('#txtContraseña').focus();
            event.preventDefault();
        }
        else
        {
            let rut = $('#txtRut').val(); // get
            let dv = $('#txtDv').val(); // get
            let correo = $('#txtEmail').val(); // get
            alert("Registrado con éxito. Sus datos son los siguientes:\n" 
            + rut + "-" + dv + "\n"
            + correo + "\n"); 
        }
    })

    $('#txtEmail').keypress(function(e) {
          if (e.key === '@' && $(this).val().indexOf('@') !== -1) {
            e.preventDefault(); // Evita que se introduzca otro "@"
          }
        });
   
    function esValidoElRut(Rut,Digito){
		let contador= Rut.length-1;
		let factor  = 2;
		let suma    = 0;
		let caracter= 0;
 
		for( ; contador>=0 ; contador--){
			caracter = Rut.charAt(contador);
			suma += (factor * caracter);
			if (++factor > 7)
				factor=2;		
		}
        return "-123456789K0".charAt(11-(suma % 11)) == Digito.toUpperCase();            
    }  

    // validación campos vacios IniciarSesion
    $('#btnIniciarsesion').click(function(event){
        if(!$('#txtEmail').val())
        {
            alert("Falta especificar el email")
            $('#txtEmail').focus();
            event.preventDefault();
        }
        else if(! emailRegex.test($('#txtEmail').val()))
        {
            alert("El formato del correo no es válido")
            $('#txtEmail').focus();
            event.preventDefault();
        }
        else if(!$('#txtContraseña').val())
        {
            alert("Falta especificar la contraseña")
            $('#txtContraseña').focus();
            event.preventDefault();
        }
        else
        {
            let correo = $('#txtEmail').val(); // get
            alert("Registrado con éxito. Sus datos son los siguientes:\n" 
            + correo + "\n"); 
        }
    })

    $('#txtEmail').keypress(function(e) {
          if (e.key === '@' && $(this).val().indexOf('@') !== -1) {
            e.preventDefault(); // Evita que se introduzca otro "@"
          }
        });
})