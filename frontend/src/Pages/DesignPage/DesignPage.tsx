import React from 'react'
import Table from '../../Components/Table/Table'

interface Props { }

const DesignPage = (props: Props) => {
    return (
        <>
            <h1>Design Page</h1>
            <h2>
                This is the Design Page where all the various design aspects are housed
            </h2>
            <Table />
        </>
    )
}

export default DesignPage