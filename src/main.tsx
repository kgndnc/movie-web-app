import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage.tsx'
import About from './pages/About.tsx'

const router = createBrowserRouter([
	{ path: '/', element: <Homepage /> },
	{
		path: '/about',
		element: <About />,
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)

