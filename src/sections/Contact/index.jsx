import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    const links = {
        github: "https://github.com/phattaradanaikru",
        facebook: "https://www.facebook.com/patsa.pazaza",
        instagram: "https://www.instagram.com/sillydog._/", 
    }

    const handleClick = (url) => {
        window.open(url, '_blank')
    }

    return (
        <div className='flex items-end gap-4 text-2xl'>
            <FontAwesomeIcon 
                className='cursor-pointer hover:scale-125 hover:text-primaryTitle transition-all' 
                icon={faGithub}
                onClick={() => handleClick(links.github)}
            />
            <FontAwesomeIcon 
                className='cursor-pointer hover:scale-125 hover:text-primaryTitle transition-all' 
                icon={faInstagram}
                onClick={() => handleClick(links.instagram)}
            />
            <FontAwesomeIcon 
                className='cursor-pointer hover:scale-125 hover:text-primaryTitle transition-all' 
                icon={faFacebook}
                onClick={() => handleClick(links.facebook)}
            />
        </div>
    )
}

export default Contact