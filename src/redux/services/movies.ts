import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { Pokemon } from './types'
import type { Credits, Details, TMDBResponse } from './types'

// Define a service using a base URL and expected endpoints
export const moviesApi = createApi({
	reducerPath: 'moviesApi',

	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.themoviedb.org/3/',

		prepareHeaders: (headers, { getState: _ }) => {
			const token = import.meta.env.VITE_TMDB_ACCESS_TOKEN

			// If we have a token set in state, let's assume that we should be passing it.
			if (token) {
				headers.set('authorization', `Bearer ${token}`)
			}
			return headers
		},
	}),

	endpoints: builder => ({
		getPopularMovies: builder.query<TMDBResponse, void>({
			query: () => `movie/popular?language=en-US&page=1`,
		}),
		getTopRatedMovies: builder.query<TMDBResponse, void>({
			query: () => `movie/top_rated?language=en-US&page=1`,
		}),
		getUpcomingMovies: builder.query<TMDBResponse, void>({
			query: () => `movie/upcoming?language=en-US&page=1`,
		}),

		getMovieImage: builder.query<unknown, string>({
			query: movieId => `https://api.themoviedb.org/3/movie/${movieId}/images`,
		}),

		getMovieDetailsById: builder.query<Details, number>({
			query: movieId => `https://api.themoviedb.org/3/movie/${movieId}`,
		}),

		getCasts: builder.query<Credits, number>({
			query: movieId => `https://api.themoviedb.org/3/movie/${movieId}/credits`,
		}),
	}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
	useGetPopularMoviesQuery,
	useGetMovieImageQuery,
	useGetMovieDetailsByIdQuery,
	useGetCastsQuery,
	useGetTopRatedMoviesQuery,
	useGetUpcomingMoviesQuery,
} = moviesApi

