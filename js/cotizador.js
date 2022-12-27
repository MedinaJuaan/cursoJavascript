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
   let total = opcion1 + opcion2 + opcion3;
    alert("Tu cotizacion es de $" + total);

}else{
    alert("Ingreso erroneo, intente nuevamente mas tarde")
}

    alert("Gracias por confiar en nosotros, para mas informacion comuniquese al 4556-6233")


    


   
/*Funcion productos*/

function Producto (id, nombre, precio){
    this.id=id;
    this.nombre=nombre;
    this.precio=precio;
    }
    
    /*Productos*/
    
    const KitAlarma= new Producto(1,"Kit de alarma", 30000);
    const KitCamaras= new Producto(2, "Kit de camaras", 40000);
    const Sensor= new Producto(3,"Sensor de movimiento", 6000);
    const Magnetico= new Producto(4,"Sensor magnetico", 2000);
    const SirenaInterior= new Producto(5, "Sirena interior", 3000);
    const Camara= new Producto(6, "Camara", 8000);
    const DVR= new Producto(7,"Dvr 8 canales",15000);
    const Cableado1= new Producto(8, "Cableado 70m2", 5000);
    const Cableado2= new Producto(9, "Cableado 100m2", 10000);
    
    let nombre=prompt("Ingresa tu nombre");
    alert ("Bienvenido/a " + nombre + " Por favor indicanos que estas buscando");
    
    
    let opcion1 = prompt(
        "Elige la opcion que necesitas: \n1 Camaras \n2 Alarmas"
    );
    if(opcion1 == 1){
        let opcion1 = KitCamaras.precio;
        let Cam = prompt("El kit basico incluye un dvr y 2 camaras, necesitas agregar mas?: \nSi \nNo ");
        if (Cam == "si") {
           let Cam1 = prompt("Que cantidad queres agregar?");
          let CamExtra = Camara.precio * Cam1 ;
           if (Cam1 > 2) {
        DVR.precio = DVR.precio + KitCamaras.precio;
            
           } else {
            DVR.precio = 0;
           }
        } else { 
            CamExtra = 0;
            let CableCam= prompt("Que tan grande es el lugar? \n1 Hasta 70m2 \n2 Mas de 100m2");
            if (CableCam = 1) {
                CableCam = Cableado1.precio;
            } else { 
                CableCam= Cableado2.precio;
            }
           let total= opcion1 + CamExtra + DVR.precio + CableCam ;
           alert("Tu cotizacion es $ " + total);
           alert(" Gracias por confiar en nosotros");    
        }
    }else{
        let opcion2 = KitAlarma.precio
        let Alar = prompt("El kit basico incluye Central,2 sensores de movimiento y 2 sensores magneticos, necesitas agregar mas?: \nsi \nno");
        if (Alar == "si") {
            let SensorEx = prompt("Cuantos Sensores de movimiento queres agregar?");
            SensorEx = SensorEx * Sensor.precio;
            let MagEx= prompt("Cuantos sensores magneticos queres agregar?");
            MagEx= MagEx * Magnetico.precio;
            let Sirena= prompt ("Queres agregar una sirena de interior \nSi \nNo?");
            if (Sirena = "si") {
                Sirena=SirenaInterior.precio;
                
            } else {
                Sirena= 0;
                
            }
            let AlarCab = prompt("Que tan grande es el lugar? \n1 Hasta 70m2 \n2 Mas de 100m2");
            if (AlarCab == 1) {
                AlarCab = Cableado1.precio;
            } else { 
                AlarCab = Cableado2.precio;
            }
            total = opcion2 + SensorEx + MagEx + Sirena + Alarcab
            alert("Tu cotizacion es $ " + total);
            alert(" Gracias por confiar en nosotros");
            
        } else {
            total = KitAlarma.precio;
            alert("Tu cotizacion es $ " + total);
            alert(" Gracias por confiar en nosotros");
            
        }
    
    }
    