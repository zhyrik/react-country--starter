import React from 'react'
import s from './H1.module.css'

const H1 = ({ children }) => {
    return (
        <h1 className={s.h1}>
            {children}
        </h1>
    )
}

export default H1
