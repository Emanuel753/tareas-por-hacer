const descripcion = {
    alias: 'd',
    require: true,
    desc: "Descripcion de la tarea por hacer"
}

const completado ={
    alias: 'c',
    default: false,
    desc: "completa una tarea"
}

const argv = require('yargs').command("crear","crear tarea por hacer",{
    descripcion
}).command("actualizar","Actualizar una tarea por hacer",{
    descripcion,
    completado
}).command("borrar","Borrar una tarea",{
    descripcion
}).help().argv;

module.exports = {
    argv
}