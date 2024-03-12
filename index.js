import { leer, registrar } from "./operaciones.js";

const arg = process.argv.slice(2);
const [operacion, ...params] = arg;
// console.log(arg);
// console.log(params);

const [nombre, edad, tipo, color, enfermedad] = params;
// console.log({ nombre, edad, tipo, color, enfermedad });

const main = async () => {
  switch (operacion) {
    case "registrar":
      await registrar(nombre, edad, tipo, color, enfermedad);
      break;
    case "leer":
      await leer();
      break;
    default:
      console.log("Unknown option:", operacion);
  }
};

main();
// node index.js registrar Benito "2 años" perro blanco vomitos
//node index.js leer
