const makeUrls = (baseUrl) => {
    return {
      /**
       * API для получения данных раскладки
       * @param {string} slug - Слаг раскладки.
       */
    //   layout: (slug) =>
    //     `${process.env.protocol}${process.env.hostName}${process.env.domenName}/api/layout/${slug}`,
  
      /**
       * API для логирования ошибок
       */
      logs: `${process.env.protocol}${process.env.hostName}${process.env.domenName}/api/error-log`,
    };
  };
  
  const BASE_URL = {
    client: process.env.baseUrl,
  };
  const URL = makeUrls(BASE_URL.client);
  const URLS = URL;
  
  export { BASE_URL, URLS };
  