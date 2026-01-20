import { Home } from '../sections/home'
import { Navbar } from '../sections/navbar'
import { Contact } from '../sections/contact'
import { About } from '../sections/about-me'


function App() {


  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Contact />
    </div>
  )
}

export default App