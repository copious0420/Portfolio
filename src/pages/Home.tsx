import Competitions from '../components/Competitions'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hackathons from '../components/Hackathons'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Robotics from '../components/Robotics'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Competitions />
        <Hackathons />
        <Robotics />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
