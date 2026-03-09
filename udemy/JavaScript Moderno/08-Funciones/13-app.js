// Funciones dentro de objetos

const reproductor = {

    reproducir : function(id){
        console.log('Reproduciendo canción con el id: ' + id);
    },

    borrar : function(id){
        console.log('Borrando canción con el id: ' + id);
    },

    pausar : function(){
        console.log('Pausando');
    },

    crearPlaylist : function(playlist){
        console.log('Crear Playlist: ' + playlist);
    }
}

reproductor.reproducir(2);
reproductor.pausar();
reproductor.borrar(2);
reproductor.crearPlaylist("Rock 90s")
