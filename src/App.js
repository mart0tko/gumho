import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gum-Ho</h1>
      </header>
      <main className="App-content">
        <div className="info-section">
          <p><strong>Телефон:</strong> 088 863 8903</p>
          <p><strong>Работно време:</strong></p>
          <ul>
            <li><strong>Понеделник:</strong> 19:15 – 21:00</li>
            <li><strong>Сряда:</strong> 19:15 – 21:00</li>
            <li><strong>Петък:</strong> 19:15 – 21:00</li>
          </ul>
          <p><strong>Адрес:</strong> 128 СОУ Алберт Айнщайн, ж.к. Младост 2 222-8, Sofia, Bulgaria</p>
          <p>
            <strong>Facebook:</strong>{' '}
            <a href="https://www.facebook.com/TaekwonDoClubGumHo?locale=bg_BG" target="_blank" rel="noopener noreferrer">
              TaekwonDo Club Gum-Ho
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
