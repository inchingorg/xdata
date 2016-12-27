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
        var actual = encoder.format(data, 'map');
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

    it('format string', function () {
        var actual = encoder.format('d6d0b9fa', 'pretty');
        actual.should.equal('d6 d0 b9 fa');
    });
});
