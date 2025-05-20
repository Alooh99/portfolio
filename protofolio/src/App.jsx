import { Navbar, Hero, About, Projects, Skills, Footer } from './components'
import styles from './style'

function App() {
  

  return (
    <div>
      <div className='bg-[#000000]'>
        <div className='nav-gradient'>
     <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      </div>

      <div className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>
      <div  className={` ${styles.paddingY}`}>
      <About />
      
    </div>
    <div className={`${styles.paddingY}`}>
      <Skills/>
      </div>

      <div  className={` ${styles.paddingY}`}>
      <Projects />
      </div>

      <Footer />
        </div>
    </div>
  )
}

export default App

