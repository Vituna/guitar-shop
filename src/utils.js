export const getFilterGuitarsName = (guitars, inputValue) => guitars.filter((guitar) => guitar.name.toLowerCase().includes(inputValue.toLowerCase()));
