import { Dialog, DialogPanel } from '@headlessui/react'
import { Link } from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu'
import Logo from './Logo'
import { navbarItems } from '../constants'

function MobileDialog({
	mobileMenuOpen,
	setMobileMenuOpen,
}: {
	mobileMenuOpen: boolean
	setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
	return (
		<Dialog
			className='md:hidden'
			open={mobileMenuOpen}
			onClose={setMobileMenuOpen}
		>
			<div className='fixed inset-0 z-10' />
			<DialogPanel className='fixed inset-y-0 right-0 z-10 w-full border-gray-400 border-opacity-50 border-l-2 overflow-y-auto bg-[#242424] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
				<div className='flex items-center justify-between'>
					<Link to='/' className='-m-1.5 p-1.5'>
						<span className='sr-only'>Movie Web App</span>
						<Logo />
					</Link>
					<button
						type='button'
						className='-m-2.5 rounded-md p-1 text-white'
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
									className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white'
								>
									{item.label}
								</Link>
							))}
						</div>
					</div>
				</div>
			</DialogPanel>
		</Dialog>
	)
}

export default MobileDialog
