import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom"
import React, { lazy } from 'react'

import SUSPENSE from "./components/layout/SUSPENSE"
import Layout from "./components/layout/Layout"
import NotFoundPage from "./pages/404"
import Home from './pages/Home'

const Countrys = lazy(() => import('./pages/Countrys')) 
const Country = lazy(() => import('./pages/Country'))

const Router = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="countrys" element={<SUSPENSE><Countrys /></SUSPENSE>} />
                    <Route path="country">
                        <Route path=":id" element={<SUSPENSE><Country /></SUSPENSE>} />
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router

