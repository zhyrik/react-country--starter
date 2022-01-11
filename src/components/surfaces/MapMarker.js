import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

import s from './MapMarker.module.css'

const MapMarker = () => {
    return (
        <div className={s.marker}>
            <FaMapMarkerAlt />
        </div>
        
    )
}

export default MapMarker
