import React from 'react'
import HomeSlideCard from './HomeSlideCard';
import './slidingcard.css';

const SlidingCards = () => {
    const slideCardsData = [
        {
            image: './images/person1.webp',
            imgAltText: 'Person 1',
            personName: 'Muddassir',
            designation: 'CTO',
            badges: ['Product', 'Illustrator']
        },
        {
            image: './images/person2.webp',
            imgAltText: 'Person 2',
            personName: 'Munaim',
            designation: 'Designer',
            badges: ['UI/UX', 'Figma', 'Adobe XD']
        },
        {
            image: './images/person3.webp',
            imgAltText: 'Person 3',
            personName: 'Illyas',
            designation: 'Developer',
            badges: ['JavaScript', 'React', 'Node.js']
        },
        {
            image: './images/person1.webp',
            imgAltText: 'Person 1',
            personName: 'Muddassir',
            designation: 'CTO',
            badges: ['Product', 'Illustrator']
        },
        {
            image: './images/person2.webp',
            imgAltText: 'Person 2',
            personName: 'Munaim',
            designation: 'Designer',
            badges: ['UI/UX', 'Figma', 'Adobe XD']
        },
        {
            image: './images/person3.webp',
            imgAltText: 'Person 3',
            personName: 'Illyas',
            designation: 'Developer',
            badges: ['JavaScript', 'React', 'Node.js']
        },

    ];

    return (
        <div style={{ display: 'flex', gap: '10px', margin: '10px' }}>
            {
                slideCardsData.map((cardData, index) => (
                    <HomeSlideCard
                        key={index}
                        image={cardData.image}
                        imgAltText={cardData.imgAltText}
                        personName={cardData.personName}
                        designation={cardData.designation}
                        badges={cardData.badges}
                    />
                ))
            }
        </div>
    )
}

export default SlidingCards
