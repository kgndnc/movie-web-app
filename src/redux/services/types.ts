export type TMDBResponse = {
	page: number
	results: Array<Movie>
	total_pages: number
	total_results: number
}

export type Movie = {
	adult: boolean
	backdrop_path: string
	id: number
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string
	release_date: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
}

export type Credits = {
	cast: Array<Person>
	crew: Array<Person>
}

export type Person = {
	adult: boolean
	cast_id: number
	character: string
	credit_id: string
	gender: number
	id: number
	known_for_department: string
	name: string
	order: number
	original_name: string
	popularity: number
	profile_path: string
	job?: string
}

export type Details = {
	adult: boolean
	backdrop_path: string
	belongs_to_collection: {
		id: number
		name: string
		poster_path: string
		backdrop_path: string
	}
	budget: number
	genres: Array<{
		id: number
		name: string
	}>
	homepage: string
	id: number
	imdb_id: string
	origin_country: string[]
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string
	production_companies: Array<{
		id: number
		logo_path: string
		name: string
		origin_country: string
	}>
	production_countries: Array<{
		iso_3166_1: string
		name: string
	}>
	release_date: string
	revenue: number
	runtime: number
	spoken_languages: Array<{
		english_name: string
		iso_639_1: string
		name: string
	}>
	status: string
	tagline: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
}

