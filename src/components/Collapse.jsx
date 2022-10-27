import { useState } from 'react';

function Collapse(props) {
  const [isOpen, setOpen] = useState(false);
  const isString = typeof props.CollapseText === 'string';

  return (
    <div className={`${props.CollapseClass}  ${isOpen ? 'open' : 'closed'}`}>
      <div
        className={`collapse__title_chevron ${isOpen ? 'open' : 'closed'}`}
        onClick={() => setOpen(!isOpen)}
      >
        <h1 className={props.CollapseClassTitle}>{props.CollapseTitle}</h1>
        <span
          className={`collapse__chevron ${isOpen ? 'open' : 'closed'}`}
          onClick={() => setOpen(!isOpen)}
        ></span>
      </div>
      <div className={`collapse__container ${!isOpen ? 'closed' : 'open'}`}>
        {isString ? (
          <p className={props.CollapseClassText}>{props.CollapseText}</p>
        ) : (
          props.CollapseText.map((text, index) => (
            <p key={index} className={props.CollapseClassText}>
              {text}
            </p>
          ))
        )}
      </div>
    </div>
  );
}

export default Collapse;
