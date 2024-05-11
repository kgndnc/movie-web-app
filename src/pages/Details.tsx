import { useParams } from 'react-router-dom'
import Layout from '../layout/Layout'
import { useGetPopularMoviesQuery } from '../redux/services/movies'

function Details() {
	const { movieId } = useParams()
	const { data, isError, isLoading, error, isSuccess } =
		useGetPopularMoviesQuery('')

	const selectedMovie = data?.results.find(
		movie => movie.id === Number(movieId)
	)

	return (
		<Layout>
			<h3>Details</h3>

			<main className='min-h-screen'>
				<pre>{JSON.stringify(selectedMovie, null, 2)}</pre>
			</main>
		</Layout>
	)
}

export default Details

