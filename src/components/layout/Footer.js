import React from 'react'

import Container from './Container'

import s from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={s.footer}>
            <Container>
                <div className={s.copyright}>
                    Copyright &copy; {new Date().getFullYear()} · All rights reserved
                </div>
            </Container>
        </footer>
    )
}

export default Footer
