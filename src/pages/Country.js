import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import s from './Countrys.module.css'
import { fetchDataCountry, resetCountry } from '../store/Country'

import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import Card2 from '../components/surfaces/Card2'
import Map from '../components/surfaces/Map'

const Country = () => {

    const param  = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchDataCountry(param.id))
        return () => {
            dispatch(resetCountry)
        }
    }, [])
    return (
        <div>
            <Container>
                <Section>
                    <Card2/>
                </Section>
            </Container>
            <Map />
        </div>
    )
}

export default Country
