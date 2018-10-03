const noteRoutes = require('./node_routes.js');

module.exports = function(app, db) {
  noteRoutes(app, db);
  // Other route groups could go here, in the future
};