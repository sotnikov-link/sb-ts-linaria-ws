'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/index.production');
} else {
  module.exports = require('./dist/index.development');
}
