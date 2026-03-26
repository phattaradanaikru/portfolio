const FormattedDate = ({isHightLight ,children}) => {
    return (
        <div>
            <span className={`text-sm ${isHightLight ? "text-primaryTitle" : ""}`}>
                {children}
            </span>
        </div>
    )
}

export default FormattedDate;