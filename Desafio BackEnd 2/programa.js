const { clear } = require("console");
const fs = require ("fs")



class Contenedor{
constructor(archivo  ){
this.archivo=archivo;

}
async save(archivoSave){
try {

const respuesta = await fs.promises.readFile(this.archivo, "utf8")
if (respuesta ==""){
    archivoSave.id=1;
    const arrObj=[archivoSave];
    await fs.promises.appendFile(this.archivo, JSON.stringify(arrObj, null, 2));
    return console.log(archivoSave.id);

}
else{
    const datosObj=JSON.parse(respuesta);
    archivoSave.id=datosObj.length + 1;
    datosObj.push(archivoSave);
    await fs.promises.writeFile(this.archivo, JSON.stringify((datosObj), null, 2));
    return console.log(archivoSave.id);

}

}
catch(error){
    console.log("El error es ${error}");
}}


async getById(id){
try {
    const respuesta= await fs.promises.readFile(this.archivo, "utf8");
    const datos=JSON.parse(respuesta);
    const resultado= datos.findIndex((elemento)=>elemento.id===id);
    if (resultado>0){
        return console.log( ("El articulo es el siguiente:"), datos[resultado]);
    }
    else{
        return console.log("No se encontro el id");

    }
}
catch(error){
    console.log("El error es ${error}");
}}


async getAll(){
try {
    const respuesta= await fs.promises.readFile(this.archivo, "utf8");
    const datos= await JSON.parse(respuesta);
    return console.log(datos);
}
catch(error){
    console.log("El error es ${error}");
}
}

async deleteById(id){
    try{
        const respuesta= await fs.promises.readFile(this.archivo, "utf8");
        const datos = await JSON.parse(respuesta);
        const objEliminado= datos.splice((id - 1 ), 1);
    if (objEliminado.length>0){
        await fs.promises.writeFile( this.archivo, JSON.stringify(JSON.stringify( datos)));
        return console.log("El objeto :", objEliminado, "se elimino correctamente");
    } else{
    console.log("El objeto no se encontro");
}
}catch(error){
    console.log("El error es ${error}");
}
}
async deleteAll(){
try {
 await fs.promises.writeFile(this.archivo, "");
    return console.log("Se elimino todo de " + this.archivo);

}
catch(error){
    console.log("El error es ${error}");
}
}
} 

const items= new Contenedor("productos.json")
     const item1 = {
      articulo:  "mouse",
     precio:4000,
     imgURL:"https://cdn.shopify.com/s/files/1/0077/5513/7083/products/6036edb6-14be-4b74-a488-67b3219d2ef6_2048x.jpg?v=1625741960"}
const item2 = {
    articulo:"teclado",
precio: 5000,
imgURL:"https://www.edgans.cl/wp-content/uploads/2021/06/TECLADO-GAMER-MECANICO-PHILIPS-SPK8605.jpg"}
 const item3 ={
    articulo:"monitor",
 precio:10000,
 imgURL: "https://www.puntonet.net/34291-large_default/monitor-led-24-pulgadas-aoc-24b2xda-ips-hdmi-vga-dvi-75hz-4ms-altavoces-vesa-100x100.jpg"}
setTimeout(()=>{items.save(item1)}, 500)
setTimeout(()=>{items.save(item2)}, 1000)
setTimeout(()=>{items.save(item3)}, 1500)
setTimeout(()=>{items.getById(3)}, 2000)
 setTimeout(()=>{items.getAll()}, 3500)
 setTimeout(()=>{items.deleteById(1)}, 5000)
 setTimeout(()=>{items.deleteAll()}, 6000)
setTimeout(()=>{console.clear()}, 6500)
setTimeout(()=>{console.log("Como costo jaja")}, 7000)
setTimeout(()=>{console.clear()}, 8000)