import React from 'react'

import Menu from './Menu'

import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <Menu />
        </header>
    )
}

export default Header
