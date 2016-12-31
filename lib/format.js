/**
 * 十六进制以空格分开。
 *
 * @example
 *
 * 120e320a -> 12 0e 32 0a
 *
 * @param hexString
 * @returns {string|undefined}
 */
exports.pretty = function (hexString) {
    if (!hexString || hexString.length === 0) {
        return;
    }

    var output = '';

    for (var i = 0; i < hexString.length; i++) {
        output += hexString[i];
        if (i % 2 != 0 && i < hexString.length - 1) {
            output += ' ';
        }
    }

    return output;
};

exports.array = function (hexString) {
    if (!hexString || hexString.length === 0) {
        return;
    }

    var output = '[';

    for (var i = 0; i < hexString.length; i++) {
        if (i % 2 == 0) {
            output += '0x';
        }

        output += hexString[i];

        if (i % 2 != 0 && i < hexString.length - 1) {
            output += ', ';
        }
    }

    output += ']';

    return output;
};


var zero = function (n, max) {
    n = n.toString(16).toUpperCase();
    while (n.length < max) {
        n = '0' + n;
    }
    return n;
};


/**
 * Print buffer to hex map.
 *
 * @see [gagle/node-hex: Pretty-prints a Buffer.](https://github.com/gagle/node-hex)
 * @param buffer
 *
 */
exports.map = function (buffer) {
    var rows = Math.ceil(buffer.length / 16);
    var last = buffer.length % 16 || 16;
    var offsetLength = buffer.length.toString(16).length;
    if (offsetLength < 6) offsetLength = 6;

    var str = 'Offset';
    while (str.length < offsetLength) {
        str += ' ';
    }

    str = str + '  ';

    var i;
    for (i = 0; i < 16; i++) {
        str += ' ' + zero(i, 2);
    }

    str += '\n';
    if (buffer.length) str += '\n';

    var b = 0;
    var lastBytes;
    var lastSpaces;
    var v;

    for (i = 0; i < rows; i++) {
        str += zero(b, offsetLength) + '  ';
        lastBytes = i === rows - 1 ? last : 16;
        lastSpaces = 16 - lastBytes;

        var j;
        for (j = 0; j < lastBytes; j++) {
            str += ' ' + zero(buffer[b], 2);
            b++;
        }

        for (j = 0; j < lastSpaces; j++) {
            str += '   ';
        }

        b -= lastBytes;
        str += '   ';

        for (j = 0; j < lastBytes; j++) {
            v = buffer[b];
            str += (v > 31 && v < 127) || v > 159 ? String.fromCharCode(v) : '.';
            b++;
        }

        str += '\n';
    }

    return str;
};