import './index.scss'
import Sidebar from '../Sidebar'
import LanguageSelect from '../LanguageSelect'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  const handleClick = (event) => {
    //take the div with the id "sidebar" and toggle its className "active"
    const sidebar = document.getElementById('sidebar')
    sidebar.classList.toggle('active')
  }

  return (
    <div className="App min-h-screen bg-cyan-800">
      <button onClick={handleClick} id="menuToggle">
        <input type="checkbox" />
        <span id="span1"></span>
        <span id="span2"></span>
        <span id="span3"></span>
      </button>
      <div id="sidebar" className="sidebar">
        <Sidebar></Sidebar>
      </div>
      <div className="page">
        <Outlet></Outlet>
      </div>
      <LanguageSelect></LanguageSelect>
    </div>
  )
}

export default Layout
