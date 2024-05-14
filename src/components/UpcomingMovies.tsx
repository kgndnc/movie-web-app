import { useNavigate } from 'react-router-dom'
import { useGetUpcomingMoviesQuery } from '../redux/services/movies'
import MySwiper from './MySwiper'
import { SwiperSlide } from 'swiper/react'
import Card, {
	CardCast,
	CardContent,
	CardDetails,
	CardImage,
	CardOverview,
	CardTitle,
	CardVote,
} from './Card'

function UpcomingMovies() {
	const { data, isSuccess } = useGetUpcomingMoviesQuery()

	const navigate = useNavigate()

	return (
		<section>
			<h2 className='font-semibold text-2xl'>Upcoming Movies</h2>

			{/* <div className='cards py-6 grid gap-3 grid-cols-2 sm:grid-cols-4 md:grid-cols-7'> */}
			<div className='py-6 relative flex '>
				{isSuccess && (
					<MySwiper>
						{data.results.map(movie => (
							<SwiperSlide key={movie.id}>
								<Card onClick={() => navigate(`/details/${movie.id}`)}>
									<CardImage
										imageSrc={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
									/>
									<CardContent>
										<CardTitle
											alternate={
												movie.original_language !== 'en'
													? movie.original_title
													: undefined
											}
										>
											{movie.title}
										</CardTitle>
										<CardDetails movieId={movie.id} />

										<div
											className='block xxs:hidden xs:block '
											title={movie.overview}
										>
											<CardOverview>{movie.overview}</CardOverview>
											<CardCast movieId={movie.id} />
											<div className='hidden lg:block'>
												<CardVote
													voteAverage={movie.vote_average}
													voteCount={movie.vote_count}
												/>
											</div>
										</div>
									</CardContent>
								</Card>
							</SwiperSlide>
						))}
					</MySwiper>
				)}
			</div>
		</section>
	)
}

export default UpcomingMovies

