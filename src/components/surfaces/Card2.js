import React from 'react'
import { useSelector } from 'react-redux'

import s from './Card2.module.css'

import H1 from '../general/H1'
import H3 from '../general/H3'
import P from '../general/P'
import Loader from '../error/Loader'
import Error from '../error/Error'

const Card2 = () => {
    const {error, loading, data} = useSelector(state => state.countryReducer)

    return (
        <div className={s.card}>
            {loading ? <Loader/> :
             error ? <Error />:
            <>
            
                <img src={data.flags.svg} alt={data.name} className={s.img} />
                <div className={s.right}>
                    <H1>{data.name.common}</H1>
                    <H3>{data.name.official}</H3>
                    <P> Capital: <b>{data.capital ? data.capital[0]: 'without cappital'}</b></P>
                    <P> Population: <b>{data.population}</b></P>
                    <P> Area: <b>{data.area} km<sup>2</sup></b></P>
                    <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque error sint quaerat nam facilis harum aut doloribus reprehenderit consectetur. Exercitationem ea excepturi expedita adipisci est itaque aspernatur, quas earum asperiores.
                    Possimus, quibusdam harum molestias sequi animi ab ipsum sapiente libero assumenda id nulla laborum ea omnis facilis velit iste aliquid debitis beatae ratione odio? Dignissimos nisi nesciunt reprehenderit dolores a.
                    Temporibus, ad! Nostrum cum velit expedita fuga aut nulla explicabo amet exercitationem obcaecati tempora saepe!</P>
                </div>
            </>
            }       
        </div>
    )
}

export default Card2
