import React, {useState, useCallback} from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { BsSearch } from 'react-icons/bs'

import Container from '../components/layout/Container'
import Section from '../components/layout/Section'

import s from './Countrys.module.css'
import Error from '../components/error/Error'
import Loader from '../components/error/Loader'
import Card from '../components/surfaces/Card'
import Input from '../components/inputs/Input'
import FilterCountrysButtons from '../components/general/FilterCountrysButtons'
import useCountrysDataEffects from '../hooks/useCountrysDataEffects'

const Countrys = () => {
    const {error, loading} = useSelector(state => state.countrysReducer)
    const [value, setValue] = useState('')
    // filtering data 
    const data = useSelector(state => {
        const { region, data } = state.countrysReducer
        if(data) {
            let filteredData = data
            if(region) {
                // filter by button
               filteredData =  data.filter(d => d.region.toLowerCase() === region.toLowerCase())
            }
            // filter by search input
            return  filteredData.filter(({name}) => name.toLowerCase().includes(value.toLowerCase()))
        }
        return data
    })
    // get search value
    
    const onChange = useCallback(event => setValue(event.target.value))

    useCountrysDataEffects()

    return (
        <div>
            <Container>
                <Section>
                    <div className={s.filters}>
                        <FilterCountrysButtons />
                        <Input 
                            label="Search"
                            value={value}
                            onChange={onChange}
                        >
                            <BsSearch />
                        </Input>
                    </div>
                    
                    {error ? <Error message={error} /> :
                    loading ? <Loader size={'10rem'} /> :
                    <div className={s.grid}>
                        {data.map((country, i) => (
                            <Link key={i} to={`/country/${country.name}`}>
                                <Card name={country.name} flag={country.flag}></Card>
                            </Link>
                        ))}
                    </div>}
                </Section>
            </Container>
        </div>
    )
}

export default Countrys
