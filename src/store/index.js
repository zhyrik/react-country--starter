import React from 'react'
import { all } from 'redux-saga/effects'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import { countrysReducer, loadCountrysAPIWatcher } from './Countrys'
import { countryReducer, loadCountryAPIWatcher } from './Country'

//todo add reducers 
const reducer = combineReducers({
    countrysReducer,
    countryReducer,
})

//todo add sagas
function* rootWatcher() {
    yield all([
        loadCountrysAPIWatcher(),
        loadCountryAPIWatcher()
    ])
}

// run redux-saga
const sagaMiddleware = createSagaMiddleware()
// get data from //! localStorage
const persistedState = (localStorage.getItem('countrysReducerData') ?
            ({countrysReducer : { 
                region: '',
                loading: false,
                error: false,
                data : JSON.parse(localStorage.getItem('countrysReducerData'))
    }}): {})

// conect redux-thunk , redux-saga
const store = createStore(reducer, persistedState, composeWithDevTools(applyMiddleware(sagaMiddleware)))

// conect root saga 
sagaMiddleware.run(rootWatcher)

// redux wrapper component
const Redux = ({ children }) => {
    return ( 
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default Redux