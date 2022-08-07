import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Career from './components/Career'
import Projects from './components/Projects'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {<Route index element={<Home />} />}
          {<Route path="about" element={<About />} />}
          {<Route path="contact" element={<Contact />} />}
          {<Route path="career" element={<Career />} />}
          {<Route path="projects" element={<Projects />} />}
        </Route>
      </Routes>
    </>
  )
}

export default App
