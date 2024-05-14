import imdbLogo from '../assets/imdb_logo.svg'

import { useParams } from 'react-router-dom'
import Layout from '../layout/Layout'
import {
	useGetMovieDetailsByIdQuery,
	useGetPopularMoviesQuery,
} from '../redux/services/movies'
import Card, {
	CardCast,
	CardContent,
	CardDetails,
	CardImage,
	CardOverview,
	CardTitle,
	CardVote,
} from '../components/Card'
import { useRef } from 'react'

function Details() {
	const intFormatter = useRef(
		new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			notation: 'compact',
		})
	)

	const { movieId } = useParams()
	const { data: details } = useGetMovieDetailsByIdQuery(Number(movieId))

	return (
		<Layout>
			<div className='px-8 py-8'>
				<h2 className='font-semibold mb-8 text-2xl'>Details</h2>

				<main className='min-h-screen container'>
					<div className='max-w-96 items-center md:items-start mx-auto flex-col gap-y-4 md:max-w-full md:gap-x-8 md:mx-0 md:flex-row flex'>
						{details && (
							<>
								<Card>
									<CardImage
										imageSrc={`https://image.tmdb.org/t/p/w400${details?.poster_path}`}
									/>
									<CardContent>
										<CardTitle
											alternate={
												details.original_language !== 'en'
													? details.original_title
													: undefined
											}
										>
											{details.title}
										</CardTitle>
										<CardDetails movieId={details.id} />

										<div
											className='block xxs:hidden xs:block '
											title={details.overview}
										>
											<CardOverview>{details.overview}</CardOverview>
											<CardCast movieId={details.id} />
											<div className=''>
												<CardVote
													voteAverage={details.vote_average}
													voteCount={details.vote_count}
												/>
											</div>
										</div>
									</CardContent>
								</Card>

								<div className='space-y-2'>
									<div className='max-w-fit img-wrapper relative'>
										{/* <p className='absolute w-full text-center mix-blend-luminosity'> */}
										<p className='absolute bg-[rgba(0_0_0/.1)] bottom-0 backdrop-blur-sm  w-full text-center'>
											{details?.tagline}
										</p>
										<img
											className='rounded'
											src={`https://image.tmdb.org/t/p/w400${details.backdrop_path}`}
											alt=''
										/>
									</div>
									<p>
										Budget:{' '}
										{details?.budget
											? intFormatter.current.format(details?.budget)
											: 'Unkown'}
									</p>
									<p>
										Revenue:{' '}
										{details?.revenue
											? intFormatter.current.format(details?.revenue)
											: 'Unkown'}
									</p>
									<p>
										Release date:{' '}
										{details?.release_date
											? new Date(details?.release_date).toLocaleDateString()
											: ''}
									</p>
									<div className='companies'>
										<p className='mb-2'>Production Companies</p>
										<div className='flex text-xs gap-4 mb-4'>
											{details?.production_companies.map(company => (
												<img
													key={company.name}
													className='w-20 grow-0 flex-1 h-fit'
													src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
													alt={`${company.name}`}
													title={company.name}
												/>
											))}
										</div>
										{/* <pre>{JSON.stringify(selectedMovie, null, 2)}</pre> */}
									</div>
									<p>Status: {details?.status}</p>
									<div className='imdb-link w-fit'>
										<a
											href={`https://www.imdb.com/title/${details?.imdb_id}`}
											target='_blank'
											className='w-fit'
										>
											<img
												src={imdbLogo}
												className='hover:outline-2 max-w-full max-h-full outline-black'
												alt='IMDb'
											/>
										</a>
									</div>
									<div className='tags'></div>
								</div>
							</>
						)}
					</div>
				</main>
			</div>
		</Layout>
	)
}

export default Details

