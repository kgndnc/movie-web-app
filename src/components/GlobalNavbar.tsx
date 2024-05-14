import { Link } from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu'
import Logo from './Logo'
import { PopoverGroup } from '@headlessui/react'
import { navbarItems } from '../constants'

export default function GlobalNavbar({
	mobileMenuOpen,
	setMobileMenuOpen,
}: {
	mobileMenuOpen: boolean
	setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
	return (
		<nav
			className='mx-auto flex max-w-7xl items-center justify-between p-6 md:px-8'
			aria-label='Global'
		>
			<div className='flex md:flex-1'>
				<Link to='/' className='-m-1.5 p-1.5'>
					<span className='sr-only'>Movie Web App</span>
					<Logo />
				</Link>
			</div>
			<div className='flex md:hidden'>
				<button
					type='button'
					className='-m-2.5 inline-flex items-center justify-center rounded-md p-1 text-gray-200'
					onClick={() => setMobileMenuOpen(true)}
				>
					<span className='sr-only'>Open main menu</span>
					<HamburgerMenu isOpen={mobileMenuOpen} />
				</button>
			</div>
			<PopoverGroup className='hidden md:flex md:gap-x-12'>
				{navbarItems.map(item => (
					<Link
						key={item.label}
						to={item.href}
						className='text-sm font-semibold leading-6 text-white'
					>
						{item.label}
					</Link>
				))}
			</PopoverGroup>
		</nav>
	)
}

