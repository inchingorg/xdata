var iconv = require('iconv-lite');

/**
 * Encoding to base64.
 *
 * Convert plain text to base64.
 *
 * @param data The plain text.
 * @param encoding The encoding of the plain text to use.
 */
exports.encode = function (data, encoding) {
    var buf = iconv.encode(data, encoding);
    return iconv.decode(buf, 'base64');
};

/**
 * Decode base64 to plain text.
 *
 * @param data The base64 string.
 * @param encoding The encoding used to convert to plain text.
 */
exports.decode = function (data, encoding) {
    var buf = iconv.encode(data, 'base64');
    return iconv.decode(buf, encoding);
};






