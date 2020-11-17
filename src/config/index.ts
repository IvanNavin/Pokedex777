interface Iconfig {
  [key: string]: any;
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
    };
  };
}

const config: Iconfig = {
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
    },
  },
};

export default config;
