function AlinearDatosJuego(juego,indice) {
    const estado = juego.Disponible === true ? "Juego DISPONIBLE" : "Juego NO DISPONIBLE";
    return `${indice + 1}. ${juego.Titulo} 
    Año Creacion :  ${juego.Creacion} 
    Editorial/Fabricante:  ${juego.Editorial} 
    Cant. Minima Jugadores: ${juego.Min_Jugadores} 
    Cant. Maxima Jugadores ${juego.Max_Jugadores} 
    Categorías: ${juego.Categorias} 
    Disponibilidad: ${estado}
    `;
/*
    return `${juego.Titulo} | ${juego.Creacion} | ${juego.Editorial} | ${juego.Min_Jugadores} - ${juego.Max_Jugadores} | ${juego.Categorias} | ${estado}`;
*/    
}
function crearListadoJuegos(juegos) {
    const lineas = juegos.map(AlinearDatosJuego);
    return `LISTADO DE JUEGOS DE MESA
*************************
Cantidad de Juegos: ${juegos.length}
*************************
${lineas.join("\n")}
`;
}
module.exports = { crearListadoJuegos };