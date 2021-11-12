import React, { Component } from 'react'
import './AnimeCard.scoped.scss'

class AnimeCard extends Component {
	constructor(props) {
		super(props)
		this.cover = props.anime.cover
		this.title = props.anime.title
	}
	render() {
		return (
			<div className="col">
				<div className="card">
					<div className="card-image">
						<img src={this.cover} />
						<span className="card-title">{this.title}</span>
					</div>
				</div>
			</div>
		)
	}
}

export default AnimeCard