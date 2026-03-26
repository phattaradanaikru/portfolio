import Header from '../Header'
import Navbar from '../Navbar'
import Contact from '../Contact'
const LeftSection = ({ navBarItems, currentSection }) => {
  return (
    <div className='px-5 mb-14 lg:mb-0'>
      <div className='sticky top-14 grid lg:grid-rows-[1fr_2fr_20%] h-[87vh]'>
        <Header />
        <Navbar navBarItems={navBarItems} currentSection={currentSection} />
        <Contact />
      </div>
    </div>
  )
}

export default LeftSection