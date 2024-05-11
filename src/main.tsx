import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage.tsx'
import About from './pages/About.tsx'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import Details from './pages/Details.tsx'

const router = createBrowserRouter([
	{ path: '/', element: <Homepage /> },
	{
		path: '/about',
		element: <About />,
	},
	{
		path: '/details/:movieId',
		element: <Details />,
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
)

