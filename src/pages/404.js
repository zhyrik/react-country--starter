import React from 'react'
import { Link } from 'react-router-dom'

import Container from '../components/layout/Container'

import s from './404.module.css'

const NotFoundPage = () => {
    console.log('404')
    return (
        <div className={s.background}>
            <Container>
                <div className={s.container}>
                    <div className={s.num}>404</div>
                    <h1 className={s.heading}>Page not found</h1>
                    <p className={s.paragraph}>
                        Sorry, we couldn't find what you were looking for
                    </p>
                    <Link to='/'><div className={s.btn}>Go Back to Home</div></Link>
                </div>
            </Container>
        </div>
    )
}

export default NotFoundPage
