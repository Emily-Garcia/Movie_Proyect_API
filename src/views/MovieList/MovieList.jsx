import axios from 'axios'
import { useEffect, useState } from 'react'
import MovieCard from '../../components/MovieCard'

const MovieList = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true)
      axios.get('https://react-couse-actosoft-api.actosoft.com.mx/movies')
        .then(res => {
          const { data } = res.data;
          setMovies(data);
          setLoading(false)
        })
        .catch(error => console.log(error))

    }, [])

    return(
        <div>
        <h1>Holi</h1>
        {!loading ? movies.map(movie =>
            <MovieCard
                movie={movie}
            />
        )
        : <p>Cargando datos...</p>}
        </div>
    )
}

export default MovieList