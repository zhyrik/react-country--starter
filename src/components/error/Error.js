import React from 'react'
//
import s from './Error.module.css'

import H1 from '../general/H1'
import P from '../general/P'

const Error = ({ message = 'some error'}) => {
    return (
        <div className={s.error}>
            <H1>{message}</H1>
            <P>we're sorry but something went wrong</P>
        </div>
    )
}

export default Error
