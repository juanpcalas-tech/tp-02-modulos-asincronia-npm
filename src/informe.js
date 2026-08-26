function AlinearDatosJuego(juego) {
    const estado = juego.Disponible ? "Juego DISPONIBLE" : "Juego NO DISPONIBLE";
    return `${juego.Titulo} | ${juego.Creacion} | ${juego.Editorial} | ${estado}`;
}
function crearListadoJuegos(juegos) {
    const lineas = juegos.map(AlinearDatosJuego);
    return `LISTADO DE JUEGOS DE MESA
*************************
Cantidad de Juegos: ${juegos.length}
${lineas.join("\n")}
`;
}
module.exports = { crearListadoJuegos };