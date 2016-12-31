var encoder = require('../lib/encoder');

var chai = require("chai");
chai.should();

describe('Encoding', function () {
    var data;

    beforeEach(function () {
        data = encoder.encode('中国', 'gbk');
    });

    it('as default style', function () {
        var actual = encoder.format(data);
        actual.should.equal('d6 d0 b9 fa');
    });

    it('as array style', function () {
        var actual = encoder.format(data, 'array')
        actual.should.equal('[0xd6, 0xd0, 0xb9, 0xfa]');
    });

    it('as hex map style', function () {
        var data = "中国，宇航员，杨利伟，中央电视台。玩儿呗，钱哪。";

        var actual = encoder.format(encoder.encode(data, 'utf-8'), 'map');
        console.log(actual)
        actual.should.not.null;

    });

    it('as compressed style', function () {
        var actual = encoder.format(data, 'compressed');
        actual.should.equal('d6d0b9fa');

    });

    it('as pretty style', function () {
        var actual = encoder.format(data, 'pretty');
        actual.should.equal('d6 d0 b9 fa');
    });

    it('as base64 style', function () {
        var actual = encoder.format(data, 'base64');
        console.log(actual);
        actual.should.equal('1tC5+g==');
    });
});
