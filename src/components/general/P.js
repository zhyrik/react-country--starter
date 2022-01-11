import React from 'react'
import s from './P.module.css'
const P = ({ children }) => {
    return (
        <p className={s.p}>
           {children} 
        </p>
    )
}

export default P
