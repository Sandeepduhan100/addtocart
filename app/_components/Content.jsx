import React from 'react';

function Content() {
  return (
    <div className='select-container'>
      <div className="size-selector">
        <label className='size'>Size </label>
        <div className="select-with-number">
          <span className='number' >#1</span>
          <select name="" id="" className='custom-select'>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="xl">XL</option>
          </select>
        </div>
        <div className="select-with-number">
          <span className='number'>#2</span>
          <select name="" id="" className='custom-select'>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="xl">XL</option>
          </select>
        </div>
      </div>
      <div className="color-selector">
        <label>Color</label>
        <div>
          <select name="" id="" className='custom-select'>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="green">Green</option>
          </select>
        </div>
        <div>
          <select name="" id="" className='custom-select'>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="green">Green</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Content;
