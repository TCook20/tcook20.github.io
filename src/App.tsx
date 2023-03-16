import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import classnames from 'classnames';

// Assets
import './App.scss'

// Components
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './components/Pages/Home'
import Projects from './components/Pages/Projects'

export interface AppProps {
  title: string
}

const App = ({ title= 'Portfolio Site' }: AppProps) => {
  return (
    <Router>
      <div className={ classnames( 'App' ) }>
        <Header title={title} />
        <main>
          <Sidebar />
          <article>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </article>  
        </main>
      </div>
    </Router>
  )
}

export default App
