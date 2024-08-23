
let item, tipo, siNo ="";
let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = []

 do {
    siNo = prompt("Deseas agregar un alimento a tu lista de compras (S/N).");

    if (siNo.toUpperCase() == "S") {
        //Agregando items a la lista

        item = prompt("¿Qué alimento deseas agregar?");
        tipo = prompt("¿En qué categoría se encaja ese alimento? Frutas=1, Lacteos=2, Congelados=3, Dulces=4");

        switch (tipo) {
            case "1":
                frutas.push(item);
                alert("Alimento ingresado a la lista.");
                break;
            case "2":
                lacteos.push(item);
                alert("Alimento ingresado a la lista.");
                break;
            case "3":
                congelados.push(item);
                alert("Alimento ingresado a la lista.");
                break;
            case "4":
                dulces.push(item);
                alert("Alimento ingresado a la lista.");
                break;
            default:
                alert("Error de categoría, alimento NO aregado.")
                break;
        }

    }else if (siNo.toUpperCase() == "N"){
        //Salimos del while
        alert("Ok, ya tu lista está terminada.");
        break;
    }else{
        //Error en la variable a ingresar
        alert(`Ingresate "${siNo}" y debe ser "S" o "N".`);
    }
    
 } while (true);
alert(`Lista de Compras: \nFrutas: ${frutas} \nLacteos: ${lacteos} \nCongelados: ${congelados} \nDulces: ${dulces}`);
alert("Gracias por usar nuetro sistema...");

