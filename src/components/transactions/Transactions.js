import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../../features/transaction/transactionSlice';
import Transaction from './Transaction';

const Transactions = () => {
  const { transactions, isLoading, isError } = useSelector((state) => state.transaction);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  // decide what to render
  let content = null;
  if (isLoading) content = <p>Loading...!!!</p>;

  if (!isLoading && isError) content = <p className='error'>Threre was an error occured...!!!</p>;

  if (!isLoading && !isError && transactions?.length > 0) {
    content = transactions.map((transaction) => <Transaction key={transaction.id} transaction={transaction} />);
  }

  if (!isLoading && !isError && transactions?.length === 0) {
    content = <p>No transactions found...!!!</p>;
  }

  return (
    <>
      <p className='second_heading'>Your Transactions:</p>

      <div className='conatiner_of_list_of_transactions'>
        <ul>{content}</ul>
      </div>
    </>
  );
};

export default Transactions;
