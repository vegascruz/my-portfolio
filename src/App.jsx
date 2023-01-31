import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/nav/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Resume from './pages/resume/Resume'


const App = () => {
  return (
        <div className='App'>
            <Router>
            <Nav />
              <Routes>
                  <Route exact path='/' element={< Home />}></Route>  
                  <Route exact path='/About' element={< About />}></Route>  
                  <Route exact path='/Contact' element={< Contact />}></Route>  
                  <Route exact path='/Resume' element={< Resume />}></Route>  
              </Routes>  
            </Router>
        </div>
  )
}

export default App