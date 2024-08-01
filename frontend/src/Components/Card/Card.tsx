import React from 'react'
import './Card.css';
import { CompanySearch } from '../../company.d';

interface Props {
    id: string;
    searchResult: CompanySearch;
}

const Card: React.FC<Props> = ({ id, searchResult }: Props): JSX.Element => {
    return (
        <div className='card'>
            <img src='https://img.freepik.com/free-vector/hand-drawn-cartoon-money-illustration_23-2150939383.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722211200&semt=ais_user'
                alt='Money' />
            <div className='details'>
                <h2>{searchResult.name} - {searchResult.symbol}</h2>
                <p>${searchResult.currency}</p>
            </div>
            <p className='info'>
                {searchResult.exchangeShortName} - {searchResult.stockExchange}
            </p>
        </div>
    )
}

export default Card