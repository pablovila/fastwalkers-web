const routes = require("next-routes");

module.exports = routes().add("game", "/game/:slug");
