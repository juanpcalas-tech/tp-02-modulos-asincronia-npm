const pathjuegos = require("node:path");
const pcolors = require("picocolors");
const { leoJuegos, EscriboDatosJuego } = require("./archivos.js");
const { crearInforme } = require("./informe.js");
const rutaDatosJuegos = pathjuegos.join(__dirname, "..", "datos", "juegos.json");
const rutaSalidaTxt = pathjuegos.join(__dirname, "..", "salida", "FichaJuegosDeMesa.txt");
async function main() {
    try {
        console.log(pcolors.magenta("Leyendo Listado de JUEGOS..."));
        const Juegos = await leoJuegos(rutaDatosJuegos);
        const informe = crearListadoJuegos(Juegos);
        await EscriboDatosJuego(rutaSalidaTxt, informe);
        console.log(informe);
        console.log(pcolors.blue(`Informe generado en: ${rutaSalidaTxt}`));
    } catch (error) {
        console.error(pcolors.red(`No se pudo generar el informe: ${error.message}`));
        process.exitCode = 1;
    }
}
main();