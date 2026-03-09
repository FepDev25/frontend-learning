// Funciones en objetos (métodos)

const reproductor = {
    song : '',

    reproducir : id => console.log("Reproduciendo: " + id),
    borrar : id => console.log("Borrando: " + id),
    pausar : () => console.log("Pausando"),
    crearPlaylist : nombrePlaylist => console.log("Crear playlist: " + nombrePlaylist),
    reproducirPlaylist : nombrePlaylist => console.log("Reproduciendo Playlist: " + nombrePlaylist),

    setSong(song){
        this.song = song;
    },

    get getSong(){
        return this.song
    }
}

reproductor.setSong("Close to the edge");
console.log(reproductor.getSong); // sin los paréntesis porque es un getter

reproductor.reproducir(2);
reproductor.pausar();
reproductor.borrar(2);
reproductor.crearPlaylist("Rock 90s");
reproductor.reproducirPlaylist("Rock 90s");
