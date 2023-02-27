import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/nav/Navbar.jsx'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Resume from './pages/resume/Resume'
import MyWork from './pages/my work/MyWork'
import SignIn from './pages/signin/signin.jsx'
import Sidebar from './components/sidebar/sideBar'
import { useState } from 'react'


const App = () => {
  const[sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState)
  }

  return (
        <div class='App'>
            <Router>
            <Sidebar sidebar={sidebar}/>
            <Nav openSidebar={toggleSidebar}/>
              <Routes>
                  <Route exact path='/My-Portfolio/' element={< Home />}></Route>  
                  <Route exact path='/My-Portfolio/About' element={< About />}></Route>  
                  <Route exact path='/My-Portfolio/Contact' element={< Contact />}></Route>
                  <Route exact path='/My-Portfolio/MyWork' element={< MyWork />}></Route>  
                  <Route exact path='/My-Portfolio/Resume' element={< Resume />}></Route>    
                  <Route exact path='/My-Portfolio/SignIn' element={< SignIn />}></Route>    
              </Routes>  
            </Router>
        </div>
  )
}

export default App