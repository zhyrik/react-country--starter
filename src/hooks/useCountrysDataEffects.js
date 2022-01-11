import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'

import { fetchDataCountrys } from '../store/Countrys'

function useCountrysDataEffects () {
    const dispatch = useDispatch()
    const data = useSelector(state => state.countrysReducer.data)

    useEffect(() => {
        // check localStorage && dispatch countrys
        const localStorageCountrys = JSON.parse(localStorage.getItem('countrysReducerData'))
        if(!localStorageCountrys) {
            dispatch(fetchDataCountrys())
        }
    }, [])
    useEffect(() => {
        // save countrys to localeStorrage
        localStorage.setItem('countrysReducerData', JSON.stringify(data))
    }, [data] )
}

export default useCountrysDataEffects