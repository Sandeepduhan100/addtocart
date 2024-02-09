import React from 'react';

function AddToCartButton() {
  const handleClick = () => {
    alert("Smile ; it affects your environment.");
  };

  return (
    <div>
      <button onClick={handleClick} className='add-to-cart'>
        <div className='plus-add-to-cart'><span style={{ fontSize: '20px' }}>+ </span> Add to Cart</div>
      </button>
      <div className='powered-by-pumper'>@ Powered by Pumper</div>
    </div>
  );
}

export default AddToCartButton;
