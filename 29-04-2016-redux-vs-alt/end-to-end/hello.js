var process = require('process');
var port = process.env.PORT;

function navigateToSite(test) {
  return test.open('http://localhost:' + port);
}

module.exports = {
  'says hello': function (test) {
    navigateToSite(test)
    .assert.doesntExist('.test-name', 'initial state has no greetings')
    .type('#test-greeting', 'Steve')
    .click('#test-submit-greeting')
    .assert.text('.test-hello', 'Hello, Steve', 'adds a new greeting')
    .done();
  }
};
