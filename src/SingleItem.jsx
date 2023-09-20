import { useState } from 'react';

function SingleItem({ item, removeItem }) {
  const [isChecked, setIsChecked] = useState(item.completed);
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
      <p style={{ textDecoration: isChecked && 'line-through' }}>{item.name}</p>
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
