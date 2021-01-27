const MovieCard = ({ movie }) => {
    return (
        <div>
            <h3>{movie.title}</h3>
            <img src={movie.img} alt={`Foto de la pelicula: ${movie.title}`}/>
            <p>Sinopsis: {movie.description}</p>
            <p>Duracion en minutos: {movie.durationMinutes}</p>
        </div>
    )
}

export default MovieCard