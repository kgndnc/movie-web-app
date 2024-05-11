import Layout from '../layout/Layout'
import PopularMovies from '../components/PopularMovies'

function App() {
	return (
		<Layout>
			<main className='container min-h-screen py-8 px-2 sm:px-8 md:px-12 lg:px-18'>
				<PopularMovies />
			</main>
		</Layout>
	)
}

export default App

