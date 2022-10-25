const fs = require ('fs');
fs.readFile("package.json", "utf8", (err, contenido) => {
    if (err) throw new Error("Error en la lectura: ${error}");

console.log("package.json: lectura exitosa");



    const info={
contenidoStr: contenido,
contenidoObj: JSON.parse(contenido),
size: contenido.length



    }
    console.log(info);
    
    fs.writeFile("info.txt", JSON.stringify(info, null, 2), error => {
        if (error) {throw new Error("Error en la escritura: ${error}");
    }
  
        
    
})
    console.log("info.txt: escritura exitosa");
}
        )


        