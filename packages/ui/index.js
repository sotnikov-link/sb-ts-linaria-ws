'use strict';
require('./dist/style.css');

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/index.production');
} else {
  module.exports = require('./dist/index.development');
}
