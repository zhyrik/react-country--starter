import React, { useRef } from 'react'
import { CgClose, CgMenu } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import Container from './Container'

import s from './Menu.module.css'

const Menu = () => {
    const menu = useRef()
    function hideMenu () {
        if(window.innerWidth < 992) {
            menu.current.style.transform = 'translate(-100%, 0)'
        }
    }
    function shoveMenu () {
        menu.current.style.transform = 'translate(0, 0)'
    }
    return (
        <nav>
            <div className={s.hamburger}>
                <CgMenu onClick={shoveMenu}/>
            </div>
            <div className={s.menu} ref={menu}>
                <CgClose className={s.close} onClick={hideMenu}/>
                <Container>
                    <div className={s.menu_grid}>
                        <div className={s.logo}><Link to="/">logo</Link></div>
                        <ul className={s.menu_list}>
                            <li className={s.menu_list_item} onClick={hideMenu}><Link to="/">Home</Link></li>
                            <li className={s.menu_list_item} onClick={hideMenu}><Link to="countrys">Countrys</Link></li>
                            <li className={s.menu_list_item} onClick={hideMenu}><Link to="currency">Currency</Link></li>
                            <li className={s.menu_list_item} onClick={hideMenu}><Link to="blog">Blog</Link></li>
                            <li className={s.menu_list_item} onClick={hideMenu}><Link to="login">Login</Link></li>
                        </ul>
                    </div>
                </Container>
            </div>
        </nav>
    )
}

export default Menu
