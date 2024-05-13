// Import Swiper React components
import { Swiper } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ReactNode } from 'react'
import { Navigation } from 'swiper/modules'

function MySwiper({ children }: { children: ReactNode }) {
	return (
		<Swiper
			slidesPerView={1}
			spaceBetween={10}
			// Responsive breakpoints
			breakpoints={{
				// when window width is >= 320px
				320: {
					slidesPerView: 2,
					spaceBetween: 5,
				},
				// when window width is >= 480px
				480: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				// when window width is >= 640px
				640: {
					slidesPerView: 3,
					spaceBetween: 10,
				},
				780: {
					slidesPerView: 3,
					spaceBetween: 10,
				},
				1100: {
					slidesPerView: 4,
					spaceBetween: 15,
				},
			}}
			grabCursor={true}
			navigation={{ enabled: true, hideOnClick: true }}
			modules={[Navigation]}
		>
			{children}
		</Swiper>
	)
}

export default MySwiper

