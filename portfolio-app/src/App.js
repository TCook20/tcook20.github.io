import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <article>
          <Projects />
        </article>
        <Sidebar />
      </main>
    </div>
  );
}

export default App;
