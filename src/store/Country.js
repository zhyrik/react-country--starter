import {call, put, takeEvery} from 'redux-saga/effects'

// actions variables
const action = {
    ERROR_COUNTRY: 'ERROR_COUNTRY',
    LOADING_COUNTRY: 'LOADING_COUNTRY',
    SET_DATA_COUNTRY: 'SET_DATA_COUNTRY',
    FETCH_COUNTRY: 'FETCH_COUNTRY',
    RESET_COUNTRY: 'RESET_CONTRY'
}
// actions creators
const errorCountry = payload => ({type: action.ERROR_COUNTRY, payload})
const loadingCountry = payload => ({type: action.LOADING_COUNTRY, payload})
const setDataCountry = payload => ({type: action.SET_DATA_COUNTRY, payload})
//export to pages/Country 
export const resetCountry = {type: action.RESET_COUNTRY}
export const fetchDataCountry = (payload) => ({type: action.FETCH_COUNTRY, payload})
// init state
const initialState = {
    error: false,
    loading: true,
    data: null
}
// reducer
// export to root reducer
export const countryReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case (action.LOADING_COUNTRY):
            return {...state, loading: payload}
        case (action.ERROR_COUNTRY):
            return {...state, error: payload}
        case (action.SET_DATA_COUNTRY):
            return {...state, data: payload}
        case (action.RESET_COUNTRY):
            return {
                ...state,
                ...initialState
            }
        default:
            return state
    }
}
// async fetch function (worker with call)
async function fetchData (name) {
    const data = await fetch(`https://restcountries.com/v3.1/name/${name}`)
    const json = await data.json()

    return json[0]
}
// saga worker
function* loadCountryAPIWorker ({ payload }) {
    try {
        const countrys = yield call(fetchData, payload) //! fetchData(payload) error
        yield put(setDataCountry(countrys))

    } catch (e) {
        yield put(errorCountry(e.message))
    }
    yield put(loadingCountry(false))
}
//saga watcher
// export to root saga
export function* loadCountryAPIWatcher () {
    yield takeEvery(action.FETCH_COUNTRY, loadCountryAPIWorker)
}