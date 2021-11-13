import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import './AnimeCard.scoped.scss'

class AnimeCard extends Component {
	constructor(props) {
		super(props)
		this.cover = props.anime.cover
		this.title = props.anime.title
		this.slug = props.anime.slug
		this.handleAnime = this.handleAnime.bind(this)
		this.state = {
			redirect: false
		}
	}

	handleAnime() {
		console.log('lll');
		this.setState({ redirect: true })
	}

	render() {
		if (this.state.redirect) {
			return <Navigate to={`/anime/${this.slug}`} />
		}
		return (
			<div className="card" onClick={this.handleAnime}>
				<div className="card-image">
					<img src={this.cover} />
					<span className="card-title">{this.title}</span>
				</div>
			</div>
		)
	}
}

export default AnimeCard