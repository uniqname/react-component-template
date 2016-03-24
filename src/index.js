// The default export of this file becomes the main component
import style from './style.css';

// This is the exported JSX/React Component
export default ({
    summary="See More...",
    clickAction=()=>{},
    className="",
    open=false,
    groupName,
    children
}) => {
    const id = `u${Math.random()}`;
    return (
        <div className={`${style.container} ${className}`}>

            <label className={style.summary}
                   onClick={clickAction}
                   htmlFor={ id }>
                { summary }
            </label>
            <input type={ groupName ? 'radio' : 'checkbox'}
                   defaultChecked={ open }
                   className={ style.toggler }
                   name={ groupName }
                   id={id} />

            <div className={ style.details }>
                {children}
            </div>
        </div>
    );
};
