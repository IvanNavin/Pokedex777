export enum EEndpoint {
  getPokemons = 'getPokemons',
  getPokemon = 'getPokemon',
  getPokemonsType = 'getPokemonsType',
  getPokemonsByType = 'getPokemonsByType',
  getPokemonsByMinAttack = 'getPokemonsByMinAttack',
  getPokemonsByMaxAttack = 'getPokemonsByMaxAttack',
}

type THttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'TRACE';

interface IUri {
  pathname: string;
}

interface IEndpoint {
  method: THttpMethod;
  uri: IUri;
}

interface IServer {
  protocol: string;
  host: string;
}

type TEndpoints = {
  [key in EEndpoint]: IEndpoint;
};

interface IClient {
  server: IServer;
  endpoint: TEndpoints;
}

interface IConfig {
  client: IClient;
}

const config: IConfig = {
  client: {
    server: {
      protocol: 'http',
      host: 'zar.hosthot.ru',
    },
    endpoint: {
      [EEndpoint.getPokemons]: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemons',
        },
      },
      [EEndpoint.getPokemon]: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemon/{id}',
        },
      },
      [EEndpoint.getPokemonsType]: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/types',
        },
      },
      [EEndpoint.getPokemonsByType]: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemons?types={type}',
        },
      },
      [EEndpoint.getPokemonsByMinAttack]: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemons?attack_from={min}',
        },
      },
      [EEndpoint.getPokemonsByMaxAttack]: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemons?attack_to={max}',
        },
      },
    },
  },
};

export default config;
