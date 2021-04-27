import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <article>
            <Route exact path="/" component={ () => <Home />} />
            <Route path="/projects" component={ () => <Projects />} />
          </article>
          <Sidebar />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
