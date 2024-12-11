
import './App.css'
import AccordionItem from './components/Accordionitem'
import AppFeatures from './components/AppFeatures'
import Brands from './components/Brands'
import ClientTestimonial from './components/ClientTestimonial'
import ContactContainer from './components/ContactContainer'
import ContactHeader from './components/ContactHeader'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWork from './components/HowItWork'
import MakePage from './components/MakePage'
import MapContainer from './components/MapContainer'
import SecondFooter from './components/SecondFooter'
import Subscription from './components/Subscription'
import Testimonials from './components/Testimonials'

function App() {
  

  return (
    <div className='wrapper'>
      <Hero />
      <Header />
      <Brands />
      <AppFeatures />
      <HowItWork />
      <HowItWork />
      <MakePage />
      <ClientTestimonial />
      <Testimonials />
      <FaqSection />
      <Subscription />
      <Footer />
      <ContactHeader />
      <ContactContainer />
      <MapContainer />
      <SecondFooter />
      <AccordionItem />
      
      
      </div>
  )
}

export default App
