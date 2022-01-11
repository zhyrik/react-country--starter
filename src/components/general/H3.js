import React from 'react'

import s from './H3.module.css'

const H3 = ({children}) => {
    return (
        <h3 className={s.h3}>
            {children}
        </h3>
    )
}

export default H3
