import React from 'react'
import './Card.css';

interface Props {
    companyName: string;
    ticker: string;
    price: number;
}

const Card : React.FC<Props> = (props: Props) : JSX.Element => {
    return (
        <div className='card'>
            <img src='https://img.freepik.com/free-vector/hand-drawn-cartoon-money-illustration_23-2150939383.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722211200&semt=ais_user'
                alt='Money' />
            <div className='details'>
                <h2>{props.companyName} - {props.ticker}</h2>
                <p>${props.price}</p>
            </div>
            <p className='info'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, ducimus!</p>
        </div>
    )
}

export default Card