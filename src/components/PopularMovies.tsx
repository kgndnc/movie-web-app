import { useNavigate } from 'react-router-dom'

import {
	useGetMovieImageQuery,
	useGetPopularMoviesQuery,
} from '../redux/services/movies'
import Card, {
	CardCast,
	CardContent,
	CardDetails,
	CardImage,
	CardOverview,
	CardRating,
	CardTitle,
	CardVote,
} from './Card'

// Import Swiper React components
import { Swiper, SwiperClass, SwiperSlide, useSwiper } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { useRef } from 'react'

function PopularMovies() {
	const { data, isError, isLoading, error, isSuccess } =
		useGetPopularMoviesQuery()

	const navigate = useNavigate()
	const swiperRef = useRef<SwiperClass>()

	return (
		<section>
			<h2 className='font-semibold text-2xl'>Popular Movies</h2>

			{/* <div className='cards py-6 grid gap-3 grid-cols-2 sm:grid-cols-4 md:grid-cols-7'> */}
			<div className='py-6 relative flex '>
				{/* <button
					className='absolute text-2xl z-10 left-0 hover:bg-[rgb(0_0_0/.1)]'
					onClick={() => swiperRef.current?.slidePrev()}
				>
					<PrevIcon />
				</button> */}

				{isSuccess && (
					<Swiper
						slidesPerView={1}
						spaceBetween={10}
						// Responsive breakpoints
						breakpoints={{
							// when window width is >= 320px
							320: {
								slidesPerView: 2,
								spaceBetween: 5,
							},
							// when window width is >= 480px
							480: {
								slidesPerView: 2,
								spaceBetween: 10,
							},
							// when window width is >= 640px
							640: {
								slidesPerView: 3,
								spaceBetween: 10,
							},
							780: {
								slidesPerView: 3,
								spaceBetween: 10,
							},
							1100: {
								slidesPerView: 4,
								spaceBetween: 15,
							},
						}}
						grabCursor={true}
						onSwiper={swiper => {
							swiperRef.current = swiper
						}}
						navigation={{ enabled: true, hideOnClick: true }}
						modules={[Navigation]}
						// modules={[Navigation, Pagination]}
					>
						{data.results.slice(0, 20).map(movie => (
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
					</Swiper>
				)}
			</div>
		</section>
	)
}

export default PopularMovies

function NextIcon({ className }: { className?: string }) {
	return (
		<svg
			fill='#000000'
			height='33px'
			width='33px'
			version='1.1'
			id='Layer_1'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			viewBox='0 0 330 330'
			xmlSpace='preserve'
			className={className ?? ''}
		>
			<path
				id='XMLID_222_'
				d='M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z'
			/>
		</svg>
	)
}

function PrevIcon() {
	return <NextIcon className='rotate-180' />
}

