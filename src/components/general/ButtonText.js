import React from 'react'

import s from './ButtonText.module.css'

const ButtonText = ({children, onClick}) => {
    return (
        <button className={s.button} onClick={onClick}>
            {children}
        </button>
    )
}

export default ButtonText
