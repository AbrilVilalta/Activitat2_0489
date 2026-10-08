import Footer from './components/Footer';
import Header from './components/Header';
import Card from './components/Card.jsx';
import Introduccio from './components/Introduccio.jsx';
import Filters from './components/FilterButton.jsx';
import { videoGame as initialGames } from './data/games';
import './App.css';
import { useState } from 'react';

function FavList({ games, toggleFavorite }) {
  if (games.filter((game) => game.fav).length === 0) {
    return (
      <p>No hi ha cap videojoc a preferits</p>
    );
  }
  return (
    <ul className='gameList'>
      {games.filter((game) => game.fav).map(game => (
        <Card
          key={game.id}
          id={game.id}
          title={game.title}
          genre={game.genre}
          year={game.year}
          img={game.img}
          isFavorite={game.fav}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </ul>
  )
}

function GameList({ games, toggleFavorite }) {
  return (
    <ul className='gameList'>
      {games.map((game) => (
        <Card
          key={game.id}
          id={game.id}
          title={game.title}
          genre={game.genre}
          year={game.year}
          img={game.img}
          isFavorite={game.fav}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </ul>
  );
}

function App() {

  const [videoGame, setVideoGame] = useState(initialGames)
  const [startYear, setStartYear] = useState(null);
  const [category, setCategory] = useState(null);

  function toggleFavorite(id) {
    const updatedGames = videoGame.map(game => {
      if (game.id === id) {
        return { ...game, fav: !game.fav }
      }
      return game
    })

    setVideoGame(updatedGames)
  }

  function getGamesByYear(games, startYear) {
    if (startYear === null) {
      return games;
    }

    return games.filter(
      (game) => game.year >= startYear && game.year <= startYear + 9
    );
  }

  function getGamesByCategory(games, category) {
    if (category === null) {
      return games;
    }

    return games.filter((game) => game.genre === category);
  }

  const filteredGames = getGamesByCategory(
    getGamesByYear(videoGame, startYear),
    category
  );

  return (
    <>
      <Header/>

      <Introduccio/>

      <h1 className='titolFavGame'>My Favorite Games</h1>
      <FavList games={videoGame} toggleFavorite={toggleFavorite} />

      <div className='allGames'>
        <h1 className='titolFavGame'>Tots els Jocs</h1>
        <Filters setStartYear={setStartYear} setCategory={setCategory} />
      </div>

      <hr />

      <GameList games={filteredGames} toggleFavorite={toggleFavorite} />

      <Footer/>
    </>
  )
}

export default App