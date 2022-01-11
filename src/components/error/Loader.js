import React from 'react'
import { BiLoaderAlt } from 'react-icons/bi'

import s from './Loader.module.css'

const Loader = ({ size=40 }) => {
    return (
        <div className={s.center}>
            <span className={s.loader} style={{fontSize: size}}>
                <BiLoaderAlt />
            </span>
        </div>
    )
}

export default Loader
