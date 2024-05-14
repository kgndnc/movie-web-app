import { useState } from 'react'
import MobileDialog from './MobileDialog'
import GlobalNavbar from './GlobalNavbar'

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<header className='header text-white z-10 border-gray-400 border-opacity-50 border-b-2 shadow'>
			<GlobalNavbar
				mobileMenuOpen={mobileMenuOpen}
				setMobileMenuOpen={setMobileMenuOpen}
			/>

			<MobileDialog
				mobileMenuOpen={mobileMenuOpen}
				setMobileMenuOpen={setMobileMenuOpen}
			/>
		</header>
	)
}

