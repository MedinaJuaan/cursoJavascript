let camaras = 15000 ;
let alarma = 20000 ;
let casa = 25000 ;
let negocio = 30000 ;
let cableado1 = 5000;
let cableado2 = 10000;
let usuario = "juan"
let contraseña = "homero"

function login() {
  let ingresar = false;

  for (let i = 2; i >= 0; i--) {
    let user = prompt("Ingresa tu nombre de usuario");
    let password = prompt("Ingresa tu constraseña")
    if (user == usuario && password==contraseña) {
      alert("Bienvenido/a. Ingreso Exitoso");
      ingresar = true;
      break;
    } else {
      alert("Error te quedan " + i + " oportunidades");
    }
  }
  return ingresar;
}
let ingreso = login()
if (ingreso){
    alert("Bienvenido/a por favor indicanos que estas buscando");

let opcion1 = prompt(
    "Elige la opcion que necesitas: \n1 Camaras \n2 Alarmas"
);
if(opcion1 == "1"){
    opcion1 = camaras
}else{
    opcion1 = alarma
}
let opcion2 = prompt(
    "Que quieres proteger? : \n1 Casa \n2 Negocio");
        if(opcion2 == "1"){
           opcion2 = casa
        }else{
           opcion2 = negocio
        }
    let opcion3 = prompt("Que tan grande es el lugar? \n1 Hasta 70m2 \n2 Mas de 100m2");
    if(opcion3 =="1"){
        opcion3 = cableado1
    }else{
        opcion3 = cableado2
    }
   total = opcion1 + opcion2 + opcion3;
    alert("Tu cotizacion es de $" + total);

}else{
    alert("Ingreso erroneo, intente nuevamente mas tarde")
}

    alert("Gracias por confiar en nosotros, para mas informacion comuniquese al 4556-6233")
