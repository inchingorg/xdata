var encode = require('./lib/encode').encode;
var decode = require('./lib/decode').decode;
var base64 = require('./lib/base64');

module.exports = {
    encode: encode,
    decode: decode,
    base64: base64
};