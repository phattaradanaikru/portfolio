import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const Navbar = ({ navBarItems, currentSection }) => {
    const [isMouseEnter, setIsMouseEnter] = useState({});

    const handleClick = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <div className='hidden lg:flex flex-col font-semibold mt-7'>
            {
                navBarItems.map((e, i) => (
                    <div
                        key={`nav-${e}-${i}`}
                        className='text-left cursor-pointer flex py-2'
                        onMouseEnter={() => setIsMouseEnter({ [e.title]: true })}
                        onMouseLeave={() => setIsMouseEnter({ [e.title]: false })}
                        onClick={() => handleClick(e.sectionId)}
                    >
                        <div>
                            <FontAwesomeIcon
                                className={`new-arrow ${currentSection === e.sectionId ? "text-primaryTitle" : isMouseEnter[e.title] ? "" : "hidden"}`} icon={faArrowRight} />
                        </div>
                        <div className={`${currentSection === e.sectionId || isMouseEnter[e.title] ? 'translate-x-2' : ''} duration-500 ease-out`}>{e.title}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default Navbar;