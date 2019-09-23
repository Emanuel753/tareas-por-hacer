const yarg = require('./config/yargs').argv;
const color = require('colors');
const porHacer = require('./por-hacer/por-hacer');

// console.log("====");
// console.log(yarg);
// console.log("====");

let comando = yarg._[0];
switch (comando) {
    case "listar":
        let listado = porHacer.getListado();

        for (const listar of listado) {
            console.log ("====================".green);
            console.log (listar.descripcion);
            console.log ("Estado:",listar.completado)
            console.log ("====================".green);            
        }


        break;
    case "crear":
        let hacer = porHacer.crear(yarg.descripcion);
        console.log(hacer);
        break;
    case "actualizar":
        console.log(yarg.descripcion,yarg.completado);
        let actualizado = porHacer.actualizar(yarg.descripcion,yarg.completado);
        console.log(actualizado);
        break
    case "borrar":
        console.log(yarg.descripcion);
        let borrado = porHacer.borrar(yarg.descripcion);
        console.log(borrado);
        break;
    default:
        console.log("comando erroneo");
}