import config from '../config';

function getUrlWithParamsConfig(endpointConfig: string, query: object) {
  return {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig as keyof typeof config.client.endpoint].uri,
    query: {
      ...query,
      limit: 9,
    },
  };
}

export default getUrlWithParamsConfig;
