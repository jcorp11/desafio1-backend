import { readFile, writeFile } from "fs/promises";

async function read() {
  try {
    const data = await readFile("citas.json", "utf-8");
    return JSON.parse(data);
  } catch (error) {
    await escribir([]);
    console.log(error);
    return [];
  }
}

async function escribir(citas) {
  try {
    await writeFile("citas.json", JSON.stringify(citas));
  } catch (error) {
    console.log(error);
  }
}

async function registrar(nombre, edad, tipo, color, enfermedad) {
  const citas = await read();
  const nuevaCita = {
    nombre,
    edad,
    tipo,
    color,
    enfermedad,
  };
  citas.push(nuevaCita);
  escribir(citas);
  console.log(nuevaCita);
  console.log("Se ha registrado la nueva cita");
}

async function leer() {
  const citas = await read();
  console.log(citas);
}

export { registrar, leer };
