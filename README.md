Trabajo Practico nro 2

Descripcion: El trabajo practico lee de un archivo .json un listado de juegos de mesa e imprime un listado de dichos juegos con sus caracteristicas en un archivo .txt en una carpeta Salida y ademas lo muestra por consola.

Instalacion: Para la Instalacion se ejecuta en una terminal de VSC la sentencia "npm init -y" que crea los archivos package.json que es el programa principal del proyectocon los scripts y dependencias para la ejecucion y package-lock.json donde estan los detalles del proyecto y los paquetes o librerias que se intalan para su ejecucion

Ejecucion: Para ejecutar el proyecto se escribe en una Terminal abierta en VSC las sentencia "nmp start"

Estuctura del Proyecto:

Nombre_del_Proyecto/    (Carpeta creado por el usuario)
├── datos               (Carpeta_de_Datos creada por el usuario con archivo .json donde se incluye la informacion a leer)
├── node_modules/       (Archivo creado por npm con las librerias isntaladas en el proyecto) 
├── src/                (Carpeta creada por el usuario conteniendo codigo fuente : archivos index.js, informes.js etc)   
├── .gitignore          (Archivo creado por el usurio para indicar a GitHub que carpetas debe no subir al proyecto) 
├── package-lock.json   (Archivo creado con npm install con versiones del proyecto y Dependencias o paquetes instalados)   
├── package.json        (Archivo creado con npm install scripts y paquetes para iniciar el proyecto)   
└── README.md           (Archivo con detalles del Proyecto e informacion necesaria)

Flujo Asíncrono: Try - Catch

Dependencias: picocolors: 1.1.1

**************************************************************************
1. ¿Qué responsabilidad tiene cada módulo?
2. ¿Qué diferencia existe entre exportar una función y ejecutarla?
    Exportar una funcion: Es definirla y ponerla a dispociosion para que cualquier modulo del proyecto pueda llamarla y utilizarla
    Ejecutar una funcion es hacer andar o trabajar esa funcion para que de un resultado
3. ¿Qué representa la promesa devuelta por fs.readFile ?
    Representa la lectura de un archivo que estamos solicitando de una ruta determinada
4. ¿Por qué await se utiliza dentro de una función async ?
    Es utilizado para decirle a JS que al encontrar esa sentencia no debe detener la continudad del proyecto mientras se ejecute la sentencia ahi incluida y que al finalizar le informara y le dara el resultado 
5. ¿Qué errores pueden llegar al catch de main ?
6. ¿Por qué se publican package.json y package-lock.json , pero no node_modules ?
    Porque node_modules contiene archivos y datos ya existentes en librerias e internet y subirlo seria muy pesado y lerdo
7. ¿Para qué se utiliza picocolors y por qué figura en dependencies ?
    Sirve para dar color a cualquier texto en ejecucion del proyecto y esta en dependencias ya que el proyecto la solicita cada vez que es necesario