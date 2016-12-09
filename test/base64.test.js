var base64 = require('../lib/base64');

var chai = require("chai");
chai.should();


describe('Base64', function () {
    beforeEach(function () {

    });

    afterEach(function () {
    });

    it('encode', function () {
        var actual = base64.encode('中国', 'utf-8');

        actual.should.equal('5Lit5Zu9');
    });

    it('decode', function () {
        var actual = base64.decode('5Lit5Zu9', 'utf-8');

        actual.should.equal('中国');
    });
});
