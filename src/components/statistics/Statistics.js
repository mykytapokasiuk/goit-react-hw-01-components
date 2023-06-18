import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  const statsUpdatedPercentage = Object.values(
    stats.reduce((total, currentItem) => {
      (total[currentItem.label] ??= {
        id: currentItem.id,
        label: currentItem.label,
        percentage: 0,
      }).percentage += currentItem.percentage;
      return total;
    }, {})
  );

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  return (
    <section className={css.statistics}>
      <div className={css.container}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.statList}>
          {statsUpdatedPercentage.map(item => (
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
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
