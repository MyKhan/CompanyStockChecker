import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'

interface Props { }

const DesignPage = (props: Props) => {
    return (
        <>
            <h1>Design Page</h1>
            <h2>
                This is the Design Page where all the various design aspects are housed
            </h2>
            <RatioList />
            <Table />
        </>
    )
}

export default DesignPage