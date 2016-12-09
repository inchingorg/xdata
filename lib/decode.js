/**
 * Created by feiqiang on 2016/11/12.
 */

var iconv = require('iconv-lite'),
    hex = require('hex');

exports.decode = function (data, encoding) {
    if (!iconv.encodingExists(encoding)) {
        console.log('"' + encoding + '"' + 'is not supported');
        return;
    }

    data = data.replace(/[ ,\[\]]|0[xX]/g, '');
    var buf = Buffer.from(data, 'hex');


    return iconv.decode(buf, encoding);
};



