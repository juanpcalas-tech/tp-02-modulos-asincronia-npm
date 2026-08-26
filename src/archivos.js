const fs = require("node:fs/promises");
const path = require("node:path");
async function leoJuegos(rutaJuegos) {
    const DatosJuego = await fs.readFile(rutaJuegos, "utf8");
    return JSON.parse(DatosJuego);
}
async function EscriboDatosJuego(rutaJuegos, DatosJuego) {
    await fs.mkdir(path.dirname(rutaJuegos), { recursive: true });
    await fs.writeFile(rutaJuegos, DatosJuego, "utf8");
}
module.exports = {
    leoJuegos,
    EscriboDatosJuego,
};