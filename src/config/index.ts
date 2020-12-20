enum EEndpoint {
  'getPokemons' = 'getPokemons',
  'getPokemon' = 'getPokemon',
  'getPokemonsByType' = 'getPokemonsByType',
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
      getPokemons: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemons',
        },
      },
      getPokemon: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemon/{id}',
        },
      },
      getPokemonsByType: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemons?types={type}',
        },
      },
    },
  },
};

export default config;
