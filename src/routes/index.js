import { Switch, Route } from 'react-router-dom'
import MovieList from '../views/MovieList'

function Routes() {
    return(
        <Switch>
            <Route path='/movies' component={MovieList} />
        </Switch>
    )
}

export default Routes