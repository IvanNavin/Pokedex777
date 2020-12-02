interface IConfig {
  client: {
    server: {
      protocol: string;
      host: string;
    };
    endpoint: {
      getPokemons: {
        method: string;
        uri: {
          pathname: string;
        };
      };
      getPokemon: {
        method: string;
        uri: {
          pathname: string;
        };
      };
      getPokemonsByType: {
        method: string;
        uri: {
          pathname: string;
        };
      };
    };
  };
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
