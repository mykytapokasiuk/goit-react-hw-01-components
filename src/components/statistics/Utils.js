export const statsUpdatedPercentage = stats => {
  return Object.values(
    stats.reduce((total, currentItem) => {
      (total[currentItem.label] ??= {
        id: currentItem.id,
        label: currentItem.label,
        percentage: 0,
      }).percentage += currentItem.percentage;
      return total;
    }, {})
  );
};
