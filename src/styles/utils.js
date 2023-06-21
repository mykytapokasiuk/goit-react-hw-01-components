export const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

export const changeColorByTransactionType = item => {
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
};
