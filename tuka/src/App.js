import './App.css';
import MultimediaPlayer from './components/video';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Tuka durmiendo y yo repasando
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        
        <MultimediaPlayer />
      </header>
    </div>
  );
}

export default App;
