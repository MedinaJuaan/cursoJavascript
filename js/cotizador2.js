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


let opcion1 = prompt("Elige la opcion que necesitas: \n1 Camaras \n2 Alarmas");
switch (opcion1) {
    case "1":
       let cam = prompt("El kit basico incluye un dvr y 2 camaras, necesitas agregar mas?: \nsi \nno");
        switch (cam) {
            case "si":
                let cam1= prompt("Que cantidad queres agregar?");
                cam1=Camara.precio*cam1;
                let cab=prompt("Que tan grande es el lugar? \n1 Hasta 70m2 \n2 Mas de 100m2")
                switch (cab) {
                    case "1":
                        let total=KitCamaras.precio + cam1 + Cableado1.precio ;
                        alert ("Tu cotizacion es de $ " + total);
                        alert("Gracias por elegirnos");
                    case "2": 
                    let total2=KitCamaras.precio+ cam1 + Cableado2.precio; 
                    alert ("Tu cotizacion es de $ " + total2);
                    alert("Gracias por elegirnos");
                        break; 
                    default:
                        alert("Gracias por elegirnos");
                        break;
                }
            break;
            case "no": 
            let cab2=prompt("Que tan grande es el lugar? \n1 Hasta 70m2 \n2 Mas de 100m2")
            switch (cab2) {
                case "1":
                    let total=KitCamaras.precio + Cableado1.precio ;
                    alert ("Tu cotizacion es de $ " + total);
                    alert("Gracias por elegirnos");
                case "2": 
                let total2=KitCamaras.precio + Cableado2.precio; 
                alert ("Tu cotizacion es de $ " + total2);
                alert("Gracias por elegirnos");
                    break; 
                    default:
                    alert("Gracias por elegirnos");
                    break;
            }
    break;
    default:
    break;
        
}
case "2":
    let alar = prompt("El kit basico incluye Central,2 sensores de movimiento y 2 sensores magneticos, necesitas agregar mas?: \nsi \nno");
    switch (alar) {
        case "si":
            let SenEx= prompt("Cuantos Sensores de movimiento queres agregar?");
                SenEx=Sensor.precio*SenEx;
            let MagEx= prompt("Cuantos sensores magneticos queres agregar?");
            MagEx=Magnetico.precio*MagEx;
            let Sirena= prompt ("Queres agregar una sirena de interior \nSi \nNo");
            switch (Sirena) {
                case "si":
                    let cab=prompt("Que tan grande es el lugar? \n1 Hasta 70m2 \n2 Mas de 100m2")
                    switch (cab) {
                        case "1":
                        let total= KitAlarma.precio+SenEx+MagEx+SirenaInterior.precio+Cableado1.precio;
                        alert ("Tu cotizacion es de $ " + total);
                        alert("Gracias por elegirnos");  
                            break;
                    
                        default:
                            break;
                    }

                    break;
                case"no":
                let cab2=prompt("Que tan grande es el lugar? \n1 Hasta 70m2 \n2 Mas de 100m2");
                switch (cab2) {
                    case "1":
                        let total= KitAlarma.precio+SenEx+MagEx+Cableado1.precio;
                        alert ("Tu cotizacion es de $ " + total);
                        alert("Gracias por elegirnos");
                        break;
                    case"2":
                    let total2= KitAlarma.precio+SenEx+MagEx+Cableado2.precio;
                    alert ("Tu cotizacion es de $ " + total2);
                    alert("Gracias por elegirnos");
                
                    default:
                        break;
                }
                default:
                    alert("Gracias por elegirnos");
                    break;
            }
        case"no":
        let cab=prompt("Que tan grande es el lugar? \n1 Hasta 70m2 \n2 Mas de 100m2")
        switch (cab) {
            case "1":
                let total= KitAlarma.precio+Cableado1.precio;
                alert ("Tu cotizacion es de $ " + total);
                alert("Gracias por elegirnos"); 
                
                break;
            case "2":
                let total2= KitAlarma.precio+Cableado2.precio;
                alert ("Tu cotizacion es de $ " + total2);
                alert("Gracias por elegirnos"); 
                
            default:
                break;
        }
        break;
    
        default:
            alert("Gracias por elegirnos");
            break;
    }

}

