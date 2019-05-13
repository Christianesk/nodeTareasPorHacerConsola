const { argv } = require('./config/yargs.js');

const porHacer = require('./por-hacer/por-hacer.js');

const colors = require('colors');



let comando = argv._[0];


switch (comando) {
    case 'crear':
        console.log('Crear por hacer');
        let tarea = porHacer.crear(argv.descripcion);


        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();

        listado.forEach(element => {
            console.log('===========Por Hacer============='.green);
            console.log(element.descripcion);
            console.log('Estado: ', element.completado == true ? 'Realizado' : 'No realizado');
            console.log('================================='.green);
        });




        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido');
        break;
}

