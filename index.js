//cogemos la lista para meter las canciones
const lista = document.querySelector(".canciones--lista");



window.onload = ()=>{
    //Cogemos el input
    const file = document.querySelector(".input");

    //el audio
    const audio = document.querySelector(".audio");

    //vamos a detectar un cambio, al seleccionar una canción ocurre un cambio
    //Otra manera de hacerlo seria con el file.addeventlistener('change',nombreFuncion)
    file.onchange = function(){
        const files = this.files;
        //creamos un objeto de tipo url a partir del path que recibimos en files
        audio.src = URL.createObjectURL(files[0])
    }
}