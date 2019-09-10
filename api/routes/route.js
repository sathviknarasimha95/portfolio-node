module.exports = function(app) {
  var portList = require('../controllers/portfolioController');

  // todoList Routes
  app.route('/portList')
    .get(portList.getDefault)
};
