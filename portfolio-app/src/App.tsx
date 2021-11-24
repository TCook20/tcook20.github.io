import { BrowserRouter, Route } from 'react-router-dom';

// Assets
import './App.scss';

// Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Pages/Home';
import Projects from './components/Pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header title="Portfolio Site" />
        <main>
          <Sidebar />
          <article>
            <Route exact path="/" component={ () => <Home />} />
            <Route path="/projects" component={ () => <Projects />} />
          </article>  
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
