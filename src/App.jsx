import './App.css'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'
import Footer from './sections/Footer/Footer'
import Nav from './sections/Navbar/Nav'
import 'font-awesome/css/font-awesome.min.css';

 
function App() {
  
  return (
    <>
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </>
  )
}

export default App
