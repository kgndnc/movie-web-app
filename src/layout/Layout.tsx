import { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { UNSAFE_useScrollRestoration as useScrollRestoration } from 'react-router-dom'

function Layout({ children }: { children: ReactNode }) {
	useScrollRestoration()

	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}

export default Layout

