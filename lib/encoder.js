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
        console.log('"' + encoding + '"' + 'is not supported');
        return;
    }

    return iconv.encode(data, encoding);
};

exports.format = function (buffer, formater) {
    var compressedString = buffer;
    
    if (buffer instanceof Buffer) {
        compressedString = buffer.toString('hex');
    }

    var result;

    switch (formater) {
        case 'compressed': {
            return compressedString;
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