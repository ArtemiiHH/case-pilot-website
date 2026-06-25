import './App.module.css'
import Nav from './components/Nav/Nav.jsx'
import Hero from './components/Hero/Hero.jsx'
import ProductGraphic from './components/ProductGraphic/ProductGraphic.jsx'
import HowItWorks from './components/HowItWorks/HowItWorks.jsx'
import WhoItsFor from './components/WhoItsFor/WhoItsFor.jsx'
import BookDemo from './components/BookDemo/BookDemo.jsx'
import Waitlist from './components/Waitlist/Waitlist.jsx'
import Footer from './components/Footer/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <ProductGraphic />
      <HowItWorks />
      <WhoItsFor />
      <BookDemo />
      <Waitlist />
      <Footer />
    </>
  )
}
