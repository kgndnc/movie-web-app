import Layout from '../layout/Layout'
import PopularMovies from '../components/PopularMovies'
import TopRatedMovies from '../components/TopRatedMovies'
import UpcomingMovies from '../components/UpcomingMovies'
import Hero from '../components/Hero'

function App() {
	return (
		<Layout>
			<Hero />
			<main className='min-h-screen py-8 px-2 sm:px-8 md:px-12 lg:px-18 space-y-12'>
				<PopularMovies />
				<TopRatedMovies />
				<UpcomingMovies />
			</main>
		</Layout>
	)
}

export default App

