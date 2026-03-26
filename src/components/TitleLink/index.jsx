import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TitleLink = ({ isHightLight,title,link }) => {
    if(!link){
            return <div className={`text-primaryAccent ${isHightLight ? "text-primaryTitle" : ""}`}></div>
    }
    return (
        <div className={`text-primaryAccent ${isHightLight ? "text-primaryTitle" : ""}`}>
            <a href={link} target="_blank">
            {title}
            <FontAwesomeIcon className={`text-xs -rotate-45 duration-500 ease-out ${isHightLight ? "translate-x-1 -translate-y-1" : ""}`} icon={faArrowRight} />
            </a>
        </div>
    )
}
export default TitleLink;