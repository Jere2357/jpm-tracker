export const capitalize = (value: any) => {
  if (value) {
    const splitValue = value.toLowerCase().split(' ');

    for (let str = 0; str < splitValue.length; str += 1) {
      splitValue[str] =
        splitValue[str].charAt(0).toUpperCase() + splitValue[str].substring(1);
    }

    return splitValue.join(' ');
  }
  return '';
};

export const numberWithComma = (num: any) => {
  const newNum = parseInt(num, 10);
  return newNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
