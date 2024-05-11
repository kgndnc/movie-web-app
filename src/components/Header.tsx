import logo from '../assets/website_logo.png'

import { useState } from 'react'
import { Dialog, PopoverGroup, DialogPanel } from '@headlessui/react'
import { Link } from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu'

const navbarItems = [
	{ label: 'Home', href: '/' },
	{ label: 'About', href: '/about' },
]

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<header className='bg-white'>
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
						className='-m-2.5 inline-flex items-center justify-center rounded-md p-1 text-gray-700'
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
							className='text-sm font-semibold leading-6 text-gray-900'
						>
							{item.label}
						</Link>
					))}
				</PopoverGroup>
			</nav>

			<Dialog
				className='md:hidden'
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className='fixed inset-0 z-10' />
				<DialogPanel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
					<div className='flex items-center justify-between'>
						<Link to='/' className='-m-1.5 p-1.5'>
							<span className='sr-only'>Your Company</span>
							<Logo />
						</Link>
						<button
							type='button'
							className='-m-2.5 rounded-md p-1 text-gray-700'
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className='sr-only'>Close menu</span>
							<HamburgerMenu isOpen={mobileMenuOpen} />
						</button>
					</div>
					<div className='mt-6 flow-root'>
						<div className='-my-6 divide-y divide-gray-500/10'>
							<div className='space-y-2 py-6'>
								{navbarItems.map(item => (
									<Link
										to={item.href}
										key={item.label}
										className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
									>
										{item.label}
									</Link>
								))}
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	)
}

function Logo() {
	return (
		<img
			className='h-8 w-auto'
			src={logo}
			alt='Generated using AI'
			title='Generated using AI'
		/>
	)
}

