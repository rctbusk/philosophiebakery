/**
 * This file is only run locally by react-scripts!
 *
 * eslint-env node
 */

const proxy = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    proxy(["/api/contact-us"], {
      target: "http://localhost:5001/philosophie-bakery/us-central1",
      changeOrigin: true,
      pathRewrite: {
        "^/api/contact-us": "/formSubmit", // remove base path
      },
    })
  );
};
