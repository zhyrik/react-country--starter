import React, { memo, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { GoSettings } from 'react-icons/go'

import s from './FilterCountrysButtons.module.css'

import ButtonText from './ButtonText'
import { selectRegion } from '../../store/Countrys'

const FilterCountrysButtons = () => {
    const buttons = useRef(null)
    const dispatch = useDispatch()
    const regions = ['Asia', 'Africa','Europe', 'Oceania', 'Americas', 'Polar']

    function openFilters(e) {
        e.target.style.display = 'none'
        buttons.current.style.display = 'block'
    }
    return (
        <div className={s.wrapper}>
            <div className={s.icon} onClick={openFilters}>
                <GoSettings />
            </div>
            <div className={s.buttons} ref={buttons}>
                {regions.map(r => (
                    <ButtonText
                        key={r}
                        onClick={() => dispatch(selectRegion(r))}
                    >{r}</ButtonText>))
                }
                <ButtonText onClick={() => dispatch(selectRegion(''))}>reset</ButtonText>
            </div>
        </div>
    )
}

export default memo(FilterCountrysButtons)
