import { useParams } from 'react-router-dom'
import Layout from '../layout/Layout'
import { useGetPopularMoviesQuery } from '../redux/services/movies'
import Card, { CardImage, CardTitle } from '../components/Card'

function Details() {
	const { movieId } = useParams()
	const { data, isError, isLoading, error, isSuccess } =
		useGetPopularMoviesQuery()

	const selectedMovie = data?.results.find(
		movie => movie.id === Number(movieId)
	)

	return (
		<Layout>
			<div className='px-8 py-8'>
				<h3>Details</h3>

				<main className='min-h-screen container'>
					<div className='max-w-40'>
						<Card>
							<CardImage
								imageSrc={`https://image.tmdb.org/t/p/w200${selectedMovie?.poster_path}`}
							/>
							<CardTitle>{selectedMovie?.title}</CardTitle>
						</Card>
					</div>
					<pre>{JSON.stringify(selectedMovie, null, 2)}</pre>
				</main>
			</div>
		</Layout>
	)
}

export default Details

