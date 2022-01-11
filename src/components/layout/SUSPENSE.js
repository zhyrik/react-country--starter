import React, { Suspense } from 'react'

import Loader from '../error/Loader'

const SUSPENSE = ({ children }) => {
    return (
        <Suspense  fallback={<Loader size={200} />} >
            {children}
        </Suspense >
    )
}

export default SUSPENSE
