import React, { useState, useEffect } from 'react'
import './App.scss'
import api from './API'
import AnimeCard from './components/AnimeCard'
import EpisodeCard from './components/EpisodeCard'
import ListCards from './components/ListCards'

function App() {
  const [animes, setAnimes] = useState(null)
  const [episodes, setEpisodes] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.getAnimes(1).then(data => setAnimes(data))
    api.getEpisodes(1).then(data => setEpisodes(data))
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <div className="container-fluid">
      <div className="row">
        <h1>Animes</h1>
      </div>
      <div className="row">
        <ListCards scrollFactor={300}>
          {animes && animes.result.map((anime, key) => <AnimeCard key={key} anime={anime} />)}
        </ListCards>
      </div>
      <div className="row">
        <h1>Episódios</h1>
      </div>
      <div className="row">
        <ListCards scrollFactor={400}>
          {episodes && episodes.result.map((episode, key) => <EpisodeCard key={key} episode={episode} />)}
        </ListCards>
      </div>
      {loading &&
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
  );
}

export default App;
