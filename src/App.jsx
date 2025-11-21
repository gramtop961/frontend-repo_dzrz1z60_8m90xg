import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Thesis from './components/Thesis'
import Portfolio from './components/Portfolio'
import Insights from './components/Insights'
import Signals from './components/Signals'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#050d1b] text-white font-[Inter]">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Thesis />
        <Portfolio />
        <Insights />
        <Signals />
        <Team />
      </main>
      <Footer />
    </div>
  )
}

export default App
