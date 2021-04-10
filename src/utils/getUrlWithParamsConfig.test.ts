import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  test('Принимаем "getPokemons" и пустой объект...', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'https',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: {},
      },
      body: {},
    });
  });

  test('Принимаем "getPokemons" и { name: "Pikachu" }...', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'Pikachu' });

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'https',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: { name: 'Pikachu' },
      },
      body: {},
    });
  });

  test('Принимаем "getPokemon" и { id: 25 }...', () => {
    const url = getUrlWithParamsConfig('getPokemon', { id: 25 });

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'https',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/25',
        query: {},
      },
      body: {},
    });
  });

  test('Принимаем "getPokemonsByType" и фильтр по типу grace...', () => {
    const url = getUrlWithParamsConfig('getPokemonsByType', { type: 'grass' });

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'https',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons?types=grass',
        query: {},
      },
      body: {},
    });
  });
});
