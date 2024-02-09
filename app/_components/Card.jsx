import React, { useState } from 'react';
import Content from './Content';
import DeliveryTotal from './DeliveryTotal'; // Import DeliveryTotal component

const ExpandableCard = ({ index, title, subtitle, price, discounted, off, expanded, toggleExpansion, selectedRadioIndex, handleRadioSelect, borderText }) => {
    const handleRadioClick = () => {
        handleRadioSelect(index);
    };

    return (
        <div className={`expandable-card ${expanded ? 'clicked' : ''} `}>
            <div className="card-header" onClick={toggleExpansion}>
                <div className='card-details'>
                    <div className='radio-title-off'>
                        <div>
                            <input
                                type="radio"
                                className='radio-input'
                                checked={selectedRadioIndex === index}
                                onChange={handleRadioClick}
                            />
                        </div>
                        <div>
                            <div className='title'>{title} <span className='off'>{off} Off</span></div>
                            <div className='subtitle'>{subtitle}</div>
                        </div>
                    </div>
                    <div>
                        <div className='price'>{price}</div>
                        <div className='discounted'>{discounted}</div>
                    </div>
                </div>
            </div>
            {expanded && (
                <div className="card-content">
                    <div>
                        <Content />
                    </div>
                </div>
            )}
            {/* Text on the border line */}
            {borderText && <div className="most-popular "><span className='most-before'></span>{borderText}<span className='most-after'></span></div>}
        </div>
    );
};

const CardContainer = ({ cards }) => {
    const [expandedCardIndex, setExpandedCardIndex] = useState(null);
    const [selectedRadioIndex, setSelectedRadioIndex] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);

    const toggleExpansion = (index) => {
        setExpandedCardIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const handleRadioSelect = (index) => {
        setSelectedRadioIndex(index);
        setTotalPrice(cards[index].price);
    };

    return (
        <div>
            {cards.map((card, index) => (
                <ExpandableCard
                    key={index}
                    index={index}
                    {...card}
                    expanded={index === expandedCardIndex}
                    toggleExpansion={() => toggleExpansion(index)}
                    selectedRadioIndex={selectedRadioIndex}
                    handleRadioSelect={handleRadioSelect}
                    borderText={card.borderText} // Pass the borderText as a prop
                />
            ))}
            {/* Pass totalPrice as prop to DeliveryTotal component */}
            <DeliveryTotal totalPrice={totalPrice} />
        </div>
    );
};

export default CardContainer;
