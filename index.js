const adapter = require('./adapter.js');
const Ruuvi = require('./ruuvi.js');

/**
 * @type {DefaultRuuvi}
 */
module.exports = new Ruuvi(adapter);