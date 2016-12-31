var iconv = require('iconv-lite'),
    formatUtil = require('./format');

/**
 * Encoding.
 *
 * @param encoding 编码。
 * @param format 输出格式。
 */
exports.encode = function (data, encoding) {
    if (!iconv.encodingExists(encoding)) {
        throw ('"' + encoding + '"' + ' is not supported');
    }

    return iconv.encode(data, encoding);
};

exports.format = function (buffer, formater) {
    if (!(buffer instanceof Buffer)) {
        throw 'The type of the data to be formated should be buffer.'
    }

    var compressedString = buffer.toString('hex');

    var result;

    switch (formater) {
        case 'compressed': {
            return compressedString;
            break;
        }
        case 'base64': {
            return iconv.decode(buffer, 'base64');
            break;
        }
        case 'map': {
            result = formatUtil.map(buffer);
            break
        }
        case 'array': {
            result = formatUtil.array(compressedString);
            break;
        }
        default: {
            result = formatUtil.pretty(compressedString);
            break;
        }
    }

    return result;
};