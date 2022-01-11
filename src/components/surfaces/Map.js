import React from 'react'
import GoogleMapReact from 'google-map-react'
import { useSelector } from 'react-redux'

import s from './Map.module.css'

import Error from '../error/Error'
import Loader from '../error/Loader'
import MapMarker from './MapMarker'


function SimpleMap () {
    const { error, loading, data } = useSelector(state => state.countryReducer)

    return (
        <>{loading ? <Loader/> :
            error || !data.capitalInfo.latlng ? <Error />:
            (<div className={s.map}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyB8D_vHWw4UI3zu7irkWaqvir6nH0Cnc4A' }}
                    defaultCenter={{
                        lat: data.capitalInfo.latlng[0],
                        lng: data.capitalInfo.latlng[1]
                    }}
                    defaultZoom={8}
                >
                    <MapMarker 
                        lat={data.capitalInfo.latlng[0]}
                        lng={data.capitalInfo.latlng[1]}
                    />
                </GoogleMapReact>
            </div>)
        }</>
    )

}

export default SimpleMap;