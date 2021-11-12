import React, { useState, useEffect } from 'react'
import './App.css'
import api from './API'
import AnimeCard from './components/AnimeCard'
import EpisodeCard from './components/EpisodeCard'

function App() {
  const [animes, setAnimes] = useState(null)
  const [episodes, setEpisodes] = useState(null)

  useEffect(async () => {
    setAnimes(await api.getAnimes(1))
    setEpisodes(await api.getEpisodes(1))
  }, [])

  return (
    <div className="container-fluid">
      <div className="row">
        <h1>Animes</h1>
      </div>
      <div className="row">
        {animes && animes.result.map((anime, key) => <AnimeCard key={key} anime={anime} />)}
      </div>
      <div className="row">
        <h1>Episódios</h1>
      </div>
      <div className="row">
        {episodes && episodes.result.map((episode, key) => <EpisodeCard key={key} episode={episode} />)}
      </div>
    </div>
  );
}

export default App;
