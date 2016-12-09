var iconv = require('iconv-lite');

/**
 * Encoding.
 *
 * @param encoding 编码。
 */
exports.encode = function (data, encoding) {
    var buf = iconv.encode(data, encoding);
    return iconv.decode(buf, 'base64');
};

/**
 * 解码
 *
 * @param data
 * @param encoding
 */
exports.decode = function decode(data, encoding) {
    var buf = iconv.encode(data, 'base64');
    return iconv.decode(buf, encoding);
};






