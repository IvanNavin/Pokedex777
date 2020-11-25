import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('тестируем функцию "toCapitalizeFirstLetter" которая принимает строку и возвращает строку, которая начинается с заглавной буквы, делая все остальные буквы маленького регистра', () => {
    const str = 'cheGiVaRa';
    const string = toCapitalizeFirstLetter(str);
    const testString = str.toLowerCase();

    expect(string).toBe(testString.charAt(0).toUpperCase() + testString.slice(1));
  });
});
