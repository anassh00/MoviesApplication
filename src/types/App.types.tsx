export type ResultType = {
    poster_path : string | null
    adult : boolean
    overview : string
    release_date : string
    id : number
    original_title : string
    original_language : string
    title : string
    genre_ids : number[]
}

export type MoviesType = {
    page?: number
    results: ResultType[]
    total_results?: number
    total_pages?: number
}

export type GenreType = {
    id: number
    name: string
}

export type GenreListType = {
    genres : GenreType[]
}
