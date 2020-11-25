const toCapitalizeFirstLetter = (str: string) => {
  const tempStr = str.toLowerCase();
  return tempStr.charAt(0).toUpperCase() + tempStr.slice(1);
};

export default toCapitalizeFirstLetter;
