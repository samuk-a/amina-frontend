import React, { Component } from 'react'
import './EpisodeCard.scoped.scss'

class EpisodeCard extends Component {
	constructor(props) {
		super(props)
		this.title = props.episode.title
		this.cover = props.episode.cover || 'https://static.wikia.nocookie.net/marveldatabase/images/3/3f/No_Image_Cover.jpg/revision/latest?cb=20131012213713'
		this.anime = props.episode.anime
		this.season = props.episode.seasonNumber
		this.episode = props.episode.episodeNumber
	}

	render() {
		return (
			<div className="col">
				<div className="card">
					<div className="card-image">
						<span className="card-title top">
							{this.anime.title} - T{this.season}E{this.episode}
						</span>
						<img src={this.cover} />
						<span className="card-title bottom">
							{this.title}
						</span>
					</div>
					<div className="overlay">
						<i class="large material-icons-outlined">
							play_circle
						</i>
					</div>
				</div>
			</div>
		)
	}
}

export default EpisodeCard