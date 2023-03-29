import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import classnames from 'classnames';

// Assets
import './App.scss'

// Components
import Footer from './components/Footer'
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
        <div className={ classnames( 'app-wrapper' ) }>
          <Header title={title} />
          <main className='grid-main'>
            <Sidebar />
            <article>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>
            </article>  
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
