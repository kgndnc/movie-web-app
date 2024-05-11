import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './pages/Homepage.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
	{ path: '/', element: <Homepage /> },
	{
		path: '/about',
		element: (
			<>
				<p>About</p>
			</>
		),
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)

