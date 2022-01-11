import React, { useRef, useEffect, memo } from 'react'

import s from './Card.module.css'

import useOnScreen from '../../hooks/useOnScreen'
import Loader from '../error/Loader'

const Card = ({ name, flag }) => {
    const card = useRef()
    const onScreen = useOnScreen(card, '0px', 0.5);

    useEffect(() => {
        card.current.style.height = card.current.offsetWidth / 2 + 'px'
    }, [])
    
    return (
        <div 
            className={s.card}
            ref={card}
        >
            {!onScreen ? <Loader /> :
                <div className={s.flag} style={{backgroundImage: 'url(' + flag + ')' }}></div>
            }
            {name && <div className={s.overley}>{name}</div>}
        </div>
    )
}

export default memo(Card)
