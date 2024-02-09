'use client'

import React from 'react';

import CardContainer from './_components/Card';
import DeliveryTotal from './_components/DeliveryTotal';
import AddToCartButton from './_components/AddToCartButton';


const Home = () => {
 
  const cards = [
    { title: '1 Unit', subtitle: 'Standered Price', price: '10.00 USD', discounted: '$24.00 USD', off: '10%' },
    { title: '2 Unit', subtitle: '', price: '18.00 USD', discounted: '$24.00 USD', off: '20%',borderText:'MOST POPULAR' },
    { title: '3 Unit', subtitle: '', price: '24.00 USD', discounted: '$24.00 USD', off: '30%' },
   
  ];

  return (

    <div className="container">
  
    <div className="outer-container">
    <div><div className="sunshine-bliss">Sunshine bliss</div>
    <div  className="main-container">
      <div className="bordered-text">
    YAY! It&apos;s BOGO
  </div>
  
  <CardContainer cards={cards} />
  
  <AddToCartButton/>
  
     </div>
    </div>
    </div>
  </div>
  );
};

// Export the Home component
export default Home;
