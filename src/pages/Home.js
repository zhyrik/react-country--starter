import React from 'react'

import s from './Home.module.css'

import Container from '../components/layout/Container'
import H1 from '../components/general/H1'
import P from '../components/general/P'
import Section from '../components/layout/Section'

const Home = () => {
    console.log('home')
    return (
        <div className={s.background}>
            <Container>
                <Section>
                    <H1>Some title</H1>
                    <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio id aperiam est voluptates sit fuga eius odit quo soluta earum, dolorum rerum totam alias, minus hic, natus numquam fugit dolor.</P>
                </Section>
                <Section>
                    <H1>Some title</H1>
                    <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio id aperiam est voluptates sit fuga eius odit quo soluta earum, dolorum rerum totam alias, minus hic, natus numquam fugit dolor.</P>
                </Section>
                <Section>
                    <H1>Some title</H1>
                    <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio id aperiam est voluptates sit fuga eius odit quo soluta earum, dolorum rerum totam alias, minus hic, natus numquam fugit dolor.</P>
                </Section>
            </Container>
        </div>
    )
}

export default Home
