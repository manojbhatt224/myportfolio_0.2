import './App.css'
import {Routes, Route, Navigate} from 'react-router-dom'
import NavBar from './components/navBar/NavBar'
import HomePage from './components/home/Home'
import SkillPage from './components/skills/SkillPage'
import AboutPage from './components/about/AboutPage'
import ContactPage from './components/contact/ContactPage'
import FooterPage from './components/footer/FooterPage'
import Features from './components/features/Features'
import Portfolio from './components/portfolio/Portfolio'
import Experience from './components/experience/Experience'
import Materials from './components/materials/Material'
function App() {


  return (
    
      <div>
        <NavBar/>
        <div className=" page bg-slate-800 px-3 sm:p-10 ">
          <HomePage/>         
          <hr className="bg-slate-300 z-30"/>
      <Features/>
      <hr className="bg-slate-300 z-30"/>
      <SkillPage/>
      <hr className="bg-slate-300 z-30"/>
      <Experience/>
      <hr className="bg-slate-300 z-30"/>
      <Portfolio/>
      <hr className="bg-slate-300 z-30"/>
      <Materials/>
      <hr className="bg-slate-300 z-30"/>
      <AboutPage/>
      <hr className="bg-slate-300 z-30"/>
      <ContactPage/>
      
 
    <FooterPage/>
        </div>
        </div>
    
  )
}

export default App
