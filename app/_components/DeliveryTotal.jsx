import React from 'react'

function DeliveryTotal({totalPrice}) {
  return (
    <div className='delivery-total-contaner'>

<div className='free-delivery-text'>
    Free Delivery
</div>
<div>
    Total : <span className='total-price-text'>${totalPrice}</span>
</div>

    </div>
  )
}

export default DeliveryTotal