function Collapse(props) {
    return (
        <div className='collapse'>
            <div className="collapse__title_chevron">
                <h1 className="collapse__title">{props.CollapseTitle}</h1>
                <span className="collapse__chevron"></span>
            </div>        
            <p className="collapse__text">{props.CollapseText}</p>
        </div>
    );
}

export default Collapse;