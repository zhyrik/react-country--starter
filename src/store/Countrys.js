import {call, put, takeEvery} from 'redux-saga/effects'

// actions variables
const action = {
    ERROR_COUNTRYS: 'ERROR_COUNTRYS',
    LOADING_COUNTRYS: 'LOADING_COUNTRYS',
    SET_DATA_COUNTRYS: 'SET_DATA_COUNTRYS',
    SET_REGION: 'SET_REGION',
    FETCH_COUNTRYS: 'FETCH_COUNTRYS'
}
// actions creators
const errorCountrys = payload => ({type: action.ERROR_COUNTRYS, payload})
const loadingCountrys = payload => ({type: action.LOADING_COUNTRYS, payload})
const setDataCountrys = payload => ({type: action.SET_DATA_COUNTRYS, payload})
// export to components/general/FilterCountrysButtons
export const selectRegion = payload => ({type: action.SET_REGION, payload})
//export to pages/Countrys 
export const fetchDataCountrys = () => ({type: action.FETCH_COUNTRYS})
// init state
const initialState = {
    error: false,
    loading: true,
    data: null,
    region: ''
}
// reducer
// export to root reducer
export const countrysReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case (action.LOADING_COUNTRYS):
            return {...state, loading: payload}
        case (action.ERROR_COUNTRYS):
            return {...state, error: payload}
        case (action.SET_DATA_COUNTRYS):
            return {...state, data: payload}
        case (action.SET_REGION):
            return {...state, region: payload}
        default:
            return state
    }
}
// async fetch function (worker with call)
async function fetchData () {
    const data = await fetch('https://restcountries.com/v2/all?fields=name,flags,region,cioc')
    const json = await data.json()
    console.log(json)
    const countris = json.map(j => ({
        name: j.name,
        region: j.region,
        flag: j.flags.svg,
        code: j.cioc
    }))
    return countris
}
// saga worker
function* loadCountrysAPIWorker () {

    try {
        // 2 wariant
        // const data = yield fetch('https://restcountries.com/v3.1/name/peru')
        // const json = yield data.json()
        const countrys = yield call(fetchData)
        yield put(setDataCountrys(countrys))

    } catch (e) {
        yield put(errorCountrys(e.message))
    }
    yield put(loadingCountrys(false))
}
//saga watcher
// export to root saga
export function* loadCountrysAPIWatcher () {
    yield takeEvery(action.FETCH_COUNTRYS, loadCountrysAPIWorker)
}