import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  test('Принимаем "getPokemons" и пустой объект...', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: {},
    });
  });

  test('Принимаем "getPokemons" и { name: "Pikachu" }...', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'Pikachu' });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: { name: 'Pikachu' },
    });
  });

  test('Принимаем "getPokemon" и { id: 25 }...', () => {
    const url = getUrlWithParamsConfig('getPokemon', { id: 25 });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemon/25',
      query: {},
    });
  });

  test('Принимаем "getPokemonsByType" и фильтр по типу grace...', () => {
    const url = getUrlWithParamsConfig('getPokemonsByType', { type: 'grass' });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons?types=grass',
      query: {},
    });
  });
});
