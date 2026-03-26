const Picture = ({picture, title}) => {
    if (!picture) 
        return null;
    return (
        <div>
            <img src={picture} alt={title} className="w-5/6 rounded-md border-solid border-2 border-primaryAccent" />
        </div>
    )
}

export default Picture;