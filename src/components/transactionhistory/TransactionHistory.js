import React from 'react';
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  function changeColorByTransactionType(item) {
    switch (item.type) {
      case 'invoice':
        return 'yellowgreen';
      case 'payment':
        return 'red';
      case 'withdrawal':
        return 'yellow';
      case 'deposit':
        return 'green';
      default:
        return 'antiquewhite';
    }
  }
  return (
    <section className={css.transaction}>
      <div className={css.container}>
        <table className={css.transactionHistory}>
          <thead className={css.transactionHistoryHeader}>
            <tr>
              <th className={css.thHeaderItem}>Type</th>
              <th className={css.thHeaderItem}>Amount</th>
              <th className={css.thHeaderItem}>Currency</th>
            </tr>
          </thead>

          <tbody className={css.transactionHistoryBody}>
            {items.map(item => (
              <tr className={css.thBodyRow} key={item.id}>
                <td
                  className={css.thBodyItem}
                  style={{
                    backgroundColor: changeColorByTransactionType(item),
                  }}
                >
                  {item.type}
                </td>
                <td className={css.thBodyItem}>{item.amount}</td>
                <td className={css.thBodyItem}>{item.currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
};

export default TransactionHistory;
