import React from 'react';
import PropTypes from 'prop-types';
import { statsUpdatedPercentage } from './Utils.js';
import { getRandomHexColor } from '../../styles/utils.js';
import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  const normalizedStats = statsUpdatedPercentage(stats);
  return (
    <section className={css.statistics}>
      <div className={css.container}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.statList}>
          {normalizedStats.map(item => (
            <li
              key={item.id}
              className={css.item}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className={css.label}>{item.label}</span>
              <span className={css.percentage}>{item.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
