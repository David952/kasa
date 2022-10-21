import { useState } from 'react';

function Collapse(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={props.CollapseClass}>
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
        <p className={props.CollapseClassText}>{props.CollapseText}</p>
      </div>
    </div>
  );
}

export default Collapse;
