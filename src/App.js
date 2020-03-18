import React from 'react';
import logo from './logo.svg';
import './App.css';

const categories = [{
  name: 'Juegos',
  emoji: '👾'
},
  {
    name: 'Películas',
    emoji: '🎥'
  }, {
  name: 'Deporte',
  emoji: '💪'
}, {
  name: 'Música',
  emoji: '🎸'
}, {
  name: 'Aprender',
  emoji: '📖'
}, {
  name: 'Peques',
  emoji: '👼'
}];


function App() {
  return (
    <div className="App">
      <h1 className="App-logo">👑 🦠 + 🏠</h1>
      <div className="App-content">
        {categories.map(category => (
            <div className="App-item">
              <h2>{category.emoji}</h2>
              <h1>{category.name}</h1>
            </div>
        ))}
      </div>
    </div>
  );
}

export default App;
