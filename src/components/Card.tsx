import { ReactNode } from 'react'

function Card({
	children,
	onClick,
}: {
	children: ReactNode
	onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
}) {
	return (
		<div
			className='cursor-pointer rounded-sm w-[15%] relative aspect-[12/24] border-2 hover:scale-110 transition-transform'
			onClick={onClick}
		>
			{children}
		</div>
	)
}

export function CardTitle({ children }: { children: ReactNode }) {
	return (
		<div className='absolute left-0 right-0 bottom-0 border h-1/4 overflow-clip'>
			<h3 className='text-[clamp(0.6rem,1.2vw,1.4rem)] text-center text-teal-400'>
				{children}
			</h3>
		</div>
	)
}

export function CardImage({ imageSrc }: { imageSrc: string }) {
	return (
		<div className='h-3/4 w-full'>
			<img src={imageSrc} alt='Poster' className='object-cover max-w-full' />
		</div>
	)
}

export default Card

