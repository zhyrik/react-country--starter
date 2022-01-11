import React, { useRef, memo } from 'react'

import s from './Input.module.css'

const Input = ({
    label = 'text label',
    error = false,
    value,
    onChange,
    children
}) => {
    const text = useRef(null)

    //! problem with rendering. Always rerender after perent render. I think it's problem with useFilterData hook

    function focusHandler (event) {
        text.current.style.fontSize = '12px'
        text.current.style.transform = 'translate(10%, -100%)'
        if(error) {
            text.current.style.color = 'var(--error)'
            event.target.style.border = '1px solid var(--error)'
        }
        else {
             text.current.style.color = 'var(--primary)'
             event.target.style.border = '1px solid var(--primary)'
        }
    }
    function blurHandler () {
        text.current.style.fontSize = '18px'
        text.current.style.transform = 'translate(10%, -10%)'
        text.current.style.color = 'var(--text-color)'
    }

    return (
        <div>
            <label className={s.label}>
                <span className={s.text} ref={text}>{label}</span>
                <input 
                    className={s.input}
                    value={value}
                    onChange={onChange}
                    onFocus={focusHandler}
                    onBlur={blurHandler}
                />
                <div className={s.icon}>{children}</div>
            </label>     
        </div>
    )
}

export default memo(Input)
