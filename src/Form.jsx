import { useState } from 'react';

function Form() {
  const [newItem, setNewItem] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
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
