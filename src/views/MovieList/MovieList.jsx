import axios from 'axios'
import { useEffect, useState } from 'react'
import MovieCard from '../../components/MovieCard'
import './movieList.css'

const MovieList = (props) => {

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

    const handleShowMovieDetail = (id) => {
        props.history.push(`/movies/${id}`)
    }

    return(
        <div className='movieList-container'>
        <h1>Holi</h1>
        {!loading ? movies.map(movie =>
            <MovieCard
                onClick={handleShowMovieDetail}
                key={movie._id}
                movie={movie}
            />
        )
        : <p>Cargando datos...</p>}
        </div>
    )
}

export default MovieList