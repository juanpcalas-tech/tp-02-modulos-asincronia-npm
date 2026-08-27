const fs = require("node:fs/promises");
const path = require("node:path");

async function leoJuegos(rutaJuegos) {
    try {
        const datos = await fs.readFile(rutaJuegos, "utf8");
        return JSON.parse(datos);
    } catch (error) {
        console.error(`Error al leer el archivo de juegos: ${error.message}`);
        throw Error;
    }
}

async function EscriboDatosJuego(rutaJuegos, DatosJuego) {
    try {
        await fs.mkdir(path.dirname(rutaJuegos), { recursive: true });
        await fs.writeFile(rutaJuegos, DatosJuego, "utf8");
    } catch (error) {
        console.error(`Error al escribir el archivo de juegos: ${error.message}`);
        throw Error;
    }
}
module.exports = {
    leoJuegos,
    EscriboDatosJuego,
};