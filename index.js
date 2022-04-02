const adapter = require('./adapter.js');
const Ruuvi = require('./ruuvi.js');

/**
 * @type {InstanceType<typeof Ruuvi>}
 */
module.exports = new Ruuvi(adapter);