import { useState } from 'react';

function SingleItem({ item, removeItem, editItem }) {
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.completed}
        onChange={() => {
          editItem(item.id);
        }}
      />
      <p style={{ textDecoration: item.completed && 'line-through' }}>
        {item.name}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        onClick={() => removeItem(item.id)}
      >
        remove
      </button>
    </div>
  );
}
export default SingleItem;
