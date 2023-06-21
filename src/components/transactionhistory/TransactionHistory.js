import React from 'react';
import PropTypes from 'prop-types';
import { changeColorByTransactionType } from '../../styles/utils.js';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
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
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
