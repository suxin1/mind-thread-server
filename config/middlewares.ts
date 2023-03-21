export default [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      headers: '*',
      origin: ['http://localhost:1337', 'http://lcoalhost:5173']
    }
  },
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
