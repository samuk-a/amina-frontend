import React, { Component } from 'react'
import './Home.scss'
import api from '../../API'
import AnimeCard from '../../components/AnimeCard'
import EpisodeCard from '../../components/EpisodeCard'
import ListCards from '../../components/ListCards'
import Navbar from '../../components/Navbar'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      animes: null,
      episodes: null,
      loading: true
    }
  }

  componentDidMount() {
    api.getAnimes(1).then(data => this.setState({ animes: data }))
    api.getEpisodes(1).then(data => this.setState({ episodes: data }))
    setTimeout(() => this.setState({ loading: false }), 1000)
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <h1>Animes</h1>
          </div>
          <div className="row">
            <ListCards scrollFactor={300}>
              {this.state.animes && this.state.animes.result.map((anime, key) => <AnimeCard key={key} anime={anime} />)}
            </ListCards>
          </div>
          <div className="row">
            <h1>Episódios</h1>
          </div>
          <div className="row">
            <ListCards scrollFactor={400}>
              {this.state.episodes && this.state.episodes.result.map((episode, key) => <EpisodeCard key={key} episode={episode} />)}
            </ListCards>
          </div>
          {this.state.loading &&
            <div className="loading">
              <div className="preloader-wrapper big active">
                <div className="spinner-layer spinner-red-only">
                  <div className="circle-clipper left">
                    <div className="circle"></div>
                  </div><div className="gap-patch">
                    <div className="circle"></div>
                  </div><div className="circle-clipper right">
                    <div className="circle"></div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div >
    )
  }
}

export default Home;
