/**
 * Created by feiqiang on 2016/11/12.
 */

var iconv = require('iconv-lite');

/**
 * Decode.
 *
 * @param data The hex array stringto be decoded.
 * @param encoding The encoding of data.
 */
exports.decode = function (data, encoding) {
    if (!iconv.encodingExists(encoding)) {
        throw ('"' + encoding + '"' + ' is not supported');
    }

    data = this.format(data);
    var buf = Buffer.from(data, 'hex');


    return iconv.decode(buf, encoding);
};

/**
 * Format the data to be encoded to pure hex.
 *
 * The format of the data can be JavaScript array. All the blank will be ignored.
 *
 * @param data The data to be encoded.
 * @returns
 */
exports.format = function (data) {
    if (!data) {
        return '';
    }

    return data.replace(/[ ,\r\n\[\]]|0[xX]/g, '');
};



