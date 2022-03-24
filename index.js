
//Cogemos el input
const inputFile = document.querySelector(".input");

//cogemos la lista para meter las canciones
const lista = document.querySelector(".canciones--lista");

let canciones;
let cancion;

inputFile.addEventListener("change", cargarArchivos);

function cargarArchivos(e){
    canciones = Array.from(e.target.files);
    
    canciones.forEach((cancion,index) =>{
        const cancionTitulo = document.createElement("p");
        cancionTitulo.textContent = cancion.name;
        cancionTitulo.className = "cancion";
        cancionTitulo.setAttribute("indice",index);
        console.log(cancionTitulo.getAttribute("indice"));
        cancionTitulo.addEventListener("click",reproducirCancion);
        console.log(cancion.name);

        lista.appendChild(cancionTitulo);
    });
}

function reproducirCancion(e){
    //cogemos el indice de la canción >.<
    console.log(e.target.getAttribute("indice"));
    const indice = e.target.getAttribute("indice");
    cancion = canciones[indice];
    console.log(cancion);
}