import { useState } from 'react';
import Items from './Items';

function Form({ addItem }) {
  const [newItem, setNewItem] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) {
      console.log('please add item');
      return;
    }
    addItem(newItem);
    setNewItem('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className='form-control'>
        <input
          type='text'
          className='form-input'
          value={newItem}
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
        />
        <button type='submit' className='btn'>
          add item
        </button>
      </div>
    </form>
  );
}
export default Form;
