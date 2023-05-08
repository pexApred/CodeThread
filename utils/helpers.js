const checked = function(value, test) {
    if (value == undefined) return '';
    return value==test ? 'checked' : '';
}

module.exports = {
    checked
};

const Handlebars = require('handlebars');

Handlebars.registerHelper('concat', function() {
  let concatenatedString = '';

  for (let i = 0; i < arguments.length - 1; i++) {
    concatenatedString += arguments[i];
  }

  return concatenatedString;
});