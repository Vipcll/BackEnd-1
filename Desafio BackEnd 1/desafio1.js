class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros =  libros
        this.mascotas = mascotas;
        this.Usuario=0;
    }

    static UsuarioGeneral= 0
getFullName(){
    return this.nombre + " " + this.apellido;
}

countMascotas(){
// cantidad de mascotas
    return this.mascotas[0].split(" ").length;	
}
incrementarUsuario(){
    this.Usuario++;
    Usuario.UsuarioGeneral++;
  
  
}

addMascota(mascota){
    this.mascotas.push(mascota);
}






addBooks(libros){   //falta agregar un  parametro 



    this.libros.push(libros);  //el  parametro debe ir aqui

}
getBookNames(){

    return this.libros[0].Nombre + " Y " + this.libros[1].Nombre;
}    

obtenerResponsable(){
    return "${this.nombre} ${this.apellido}";
}

}
let usuario1 = new Usuario("Maria", "Perez", [{Nombre:"Viaje al fin de la noche", Autor:"Louis-Ferdinand Céline"},{Nombre:"Don Quijote de la Mancha", Autor:"Miguel de Cervantes"}], ["Perro", "Gato"]);
usuario1.incrementarUsuario();

console.log(usuario1);
let countMascotas=usuario1.countMascotas();
let responsable= usuario1.obtenerResponsable
let getBookNames= usuario1.getBookNames();
let getFullName= usuario1.getFullName();

addMascota= usuario1.addMascota("Loro");

addBooks= usuario1.addBooks({Nombre:"El señor de los anillos",Autor:"J.R.R. Tolkien"});
console.log(countMascotas)
console.log(getFullName);
console.log(getBookNames)
console.log(usuario1);