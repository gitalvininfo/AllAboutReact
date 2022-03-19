import React from 'react';
import katie from '../images/katie.png';
import star from '../images/star.png';


export default function Card({ img, rating, reviewCount, country, title, price }) {
    return (
        <div className='card'>
            <img src={img} className='card--image' />
            <div className='card--stats'>
                <img src={star} className='card--star' />
                <span>{rating}</span>
                <span className='gray'>{reviewCount}</span>
                <span className='gray'>{country}</span>
            </div>
            <p>{title}</p>
            <p> <span><b>From ${price}</b></span> / person</p>
        </div>
    )
}