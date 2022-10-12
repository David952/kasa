import { useState } from "react";

function Collapse(props) {

    const [isOpen, setOpen] = useState(false);

    return (
        <div className='collapse'>
            <div className={`collapse__title_chevron ${isOpen ? "open" : "closed"}`} onClick={() => setOpen(!isOpen)}>
                <h1 className="collapse__title">{props.CollapseTitle}</h1>
                <span className={`collapse__chevron ${isOpen ? "open" : "closed"}`} onClick={() => setOpen(!isOpen)}></span>
            </div>     
            <div className={`collapse__container ${!isOpen ? "closed" && props.CollapseIsOpen : "open"}`}>
            <p className="collapse__container-text">{props.CollapseText}</p>
            </div>
        </div>
    );
}

export default Collapse;