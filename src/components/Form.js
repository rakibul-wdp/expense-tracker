import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTransaction, createTransaction } from '../features/transaction/transactionSlice';

const Form = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [amount, setAmount] = useState('');
  const [editMode, setEditMode] = useState(false);

  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state) => state.transaction);
  const { editing } = useSelector((state) => state.transaction) || {};

  // listen for edit mode active
  useEffect(() => {
    const { id, name, amount, type } = editing || {};
    if (id) {
      setEditMode(true);
      setName(name);
      setType(type);
      setAmount(amount);
    } else {
      setEditMode(false);
      reset();
    }
  }, [editing]);

  const reset = () => {
    setName('');
    setType('');
    setAmount('');
  };

  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(
      createTransaction({
        name,
        type,
        amount: Number(amount),
      })
    );
    reset();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      changeTransaction({
        id: editing?.id,
        data: {
          name: name,
          amount: amount,
          type: type,
        },
      })
    );
    setEditMode(false);
    reset();
  };

  const cancelEditMode = () => {
    reset();
    setEditMode(false);
  };

  return (
    <div className='form'>
      <h3>Add new transaction</h3>

      <form onSubmit={editMode ? handleUpdate : handleCreate}>
        <div className='form-group'>
          <label>Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type='text'
            name='name'
            required
            placeholder='enter title'
            value={name}
          />
        </div>

        <div className='form-group radio'>
          <label>Type</label>
          <div className='radio_group'>
            <input
              onChange={(e) => setType('income')}
              type='radio'
              value='income'
              required
              name='type'
              checked={type === 'income'}
            />
            <label>Income</label>
          </div>
          <div className='radio_group'>
            <input
              onChange={(e) => setType('expense')}
              type='radio'
              value='expense'
              name='type'
              placeholder='Expense'
              checked={type === 'expense'}
            />
            <label>Expense</label>
          </div>
        </div>

        <div className='form-group'>
          <label>Amount</label>
          <input
            onChange={(e) => setAmount(e.target.value)}
            type='number'
            placeholder='enter amount'
            name='amount'
            required
            value={amount}
          />
        </div>

        <button disabled={isLoading} className='btn' type='submit'>
          {editMode ? 'Update Transaction' : 'Add Transaction'}
        </button>

        {!isLoading && isError && <p className='error'>Thre was an error occured...!!!</p>}
      </form>

      {editMode && (
        <button onClick={cancelEditMode} className='btn cancel_edit'>
          Cancel Edit
        </button>
      )}
    </div>
  );
};

export default Form;
