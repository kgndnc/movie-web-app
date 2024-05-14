function HamburgerMenu({ isOpen }: { isOpen: boolean }) {
	return (
		<svg
			className='h-6 w-6 fill-current'
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
		>
			{isOpen ? (
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M17.707 6.293a1 1 0 0 0-1.414 0L12 10.586 7.707 6.293a1 1 0 1 0-1.414 1.414L10.586 12l-4.293 4.293a1 1 0 0 0 1.414 1.414L12 13.414l4.293 4.293a1 1 0 0 0 1.414-1.414L13.414 12l4.293-4.293a1 1 0 0 0 0-1.414z'
					// fill='#000000'
				/>
			) : (
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z'
				/>
			)}
		</svg>
	)
}

export default HamburgerMenu

