var iconv = require('iconv-lite'),
    formatUtil = require('./format');

/**
 * Encoding.
 *
 * @param encoding 编码。
 * @param format 输出格式。
 */
exports.encode = function (data, encoding, format) {
    if (!iconv.encodingExists(encoding)) {
        console.log('"' + encoding + '"' + 'is not supported');
        return;
    }

    var resultBuffer = iconv.encode(data, encoding);

    var compressedString = resultBuffer.toString('hex');
    var result;

    switch (format) {
        case 'compressed': {
            return compressedString;
            break;
        }
        case 'map': {
            result = formatUtil.map(resultBuffer);
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
}