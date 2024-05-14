import { ReactNode } from 'react'
import {
	useGetCastsQuery,
	useGetMovieDetailsByIdQuery,
} from '../redux/services/movies'

function Card({
	children,
	onClick,
}: {
	children: ReactNode
	onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
}) {
	return (
		<>
			<div
				className='cursor-grab relative max-w-80 aspect-[18/34]  bg-[#1e1b26] transition-transform
       border rounded-sm shadow border-gray-700 overflow-hidden'
				onClick={onClick}
			>
				{children}
			</div>
		</>
	)
}

export function CardTitle({
	children,
	alternate,
}: {
	children: ReactNode
	alternate?: string
}) {
	return (
		<div className='inline line-clamp-2'>
			<h3 className='text-base inline text-left text-white'>{children}</h3>
			{alternate && (
				<h3 className='pl-2 text-sm inline text-left text-gray-500'>
					({alternate})
				</h3>
			)}
		</div>
	)
}

export function CardRating({ children }: { children: ReactNode }) {
	return (
		<div className=''>
			<p className='text-xs text-left text-gray-600'>{children}</p>
		</div>
	)
}

export function CardVote({
	voteAverage,
	voteCount,
}: {
	voteAverage?: number
	voteCount?: number
}) {
	return (
		<div className='pt-4'>
			<p className='text-xs text-left'>
				Vote: {voteAverage?.toFixed(2)} ({voteCount})
			</p>
		</div>
	)
}

export function CardOverview({ children }: { children: ReactNode }) {
	return (
		<div className='pt-4 line-clamp-4  md:line-clamp-6 text-sm'>
			<p title={children?.toString()}>{children}</p>
		</div>
	)
}

export function CardContent({ children }: { children: ReactNode }) {
	return <div className='pt-4 px-2 h-1/2'>{children}</div>
}

function parseRuntime(runtime: number | undefined) {
	if (!runtime) return { hours: 0, mins: 0 }
	const hours = Math.floor(runtime / 60)
	const mins = runtime - hours * 60
	return { hours, mins }
}

export function CardDetails({
	movieId,
}: {
	children?: ReactNode
	movieId: number
}) {
	const { data } = useGetMovieDetailsByIdQuery(movieId)

	const genresString = data?.genres?.map(genre => genre.name).join(', ')
	const { hours, mins } = parseRuntime(data?.runtime)

	return (
		<div className=''>
			<p className='text-xs text-left text-gray-600'>
				{data?.release_date.substring(0, 4)} / {`${hours}h ${mins}min`} /{' '}
				{genresString}
			</p>
		</div>
	)
}

export function CardCast({ movieId }: { movieId: number }) {
	const { data } = useGetCastsQuery(movieId)

	console.log(data)

	const castString = data?.cast
		.slice(0, 3)
		.map(actor => actor.name)
		.join(', ')
		.toString()

	const director = data?.crew.find(crew => crew.job === 'Director')

	return (
		<div className='pt-1 sm:pt-4'>
			<i className='font-sans italic text-xs text-gray-200'>{castString}</i>
			<br />
			{director && (
				<i className='font-sans italic text-xs text-gray-200'>
					Director: {director.name}
				</i>
			)}
		</div>
	)
}

export function CardImage({ imageSrc }: { imageSrc: string }) {
	return (
		<div className='overflow-hidden h-1/2'>
			<img
				src={imageSrc}
				alt='Poster'
				className='object-scale- object-center rounded-t-sm w-full max-w-full transition-transform hover:scale-110 '
			/>
		</div>
	)
}

export default Card

