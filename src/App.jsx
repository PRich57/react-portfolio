import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Particles from './components/Particles';
import Starter from './sections/Starter';
import Navigation from './components/Nav';
import Footer from './components/Footer';
import Header from './components/Header';
import './index.css'

function App() {
  return (
    // <Router>
  <>
    <Particles />
    <header>
      <Header />
      <Navigation />
    </header>
    <main>
      <Starter />
    </main>
    <Footer />
  </>
  )
}

export default App

{/* <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/about' element={<About />} />
  <Route path='/contact' element={<Contact />} />
  <Route path='/projects' element={<Projects />} />
  <Route path='/resume' element={<Resume />} />
  <Route path = '#' element={<Error />} />
</Routes>
</Router> */}