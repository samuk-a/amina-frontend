const API_BASE = 'http://localhost:3000'

const basicFetch = async endpoint => {
	const req = await fetch(`${API_BASE}${endpoint}`)
	const json = await req.json()
	return json
}

const API = {
	getAnimes: async page => {
		return basicFetch(`/animes/?page=${page}`)
	},
	getEpisodes: async page => {
		return basicFetch(`/episodes/?page=${page}`)
	}
}

export default API