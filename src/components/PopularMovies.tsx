import { useNavigate } from 'react-router-dom'
import {
	useGetMovieImageQuery,
	useGetPopularMoviesQuery,
} from '../redux/services/movies'
import Card, { CardImage, CardTitle } from './Card'

function PopularMovies() {
	const { data, isError, isLoading, error, isSuccess } =
		useGetPopularMoviesQuery('')

	if (isSuccess && data) {
		console.log(data.results)
	}

	const navigate = useNavigate()

	return (
		<section>
			<h2 className='font-semibold text-2xl'>Popular Movies</h2>

			<div className='cards py-6 flex gap-2 justify-between'>
				{isSuccess &&
					data.results.slice(0, 7).map(movie => (
						<Card onClick={() => navigate(`/details/${movie.id}`)}>
							<CardImage
								imageSrc={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
							/>
							<CardTitle>{movie.title}</CardTitle>
						</Card>
					))}
			</div>
		</section>
	)
}

export default PopularMovies

