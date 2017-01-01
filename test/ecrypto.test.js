var crypto = require('crypto-js');
require("chai").should();

describe('Crypto', function () {
    "use strict";


    it('DES HEX', function () {
        var actual = crypto.DES.encrypt(crypto.enc.Hex.parse('e4b8ade59bbd0000'),
            crypto.enc.Hex.parse('8000000000000000'),
            {
                mode: crypto.mode.ECB,
                padding: crypto.pad.NoPadding
            }).ciphertext.toString();

        var expected = 'de754eb8041f';

        actual.should.equal(expected);
    });

    it('DES Message', function () {

        var actual = crypto.DES.encrypt('中国',
            crypto.enc.Hex.parse('123456'),
            {
                mode: crypto.mode.ECB,
                padding: crypto.pad.NoPadding
            }).ciphertext.toString();

        var expected = '3b1b35be218763fc';

        actual.should.equal(expected);
    });

    it('Des Decript', function () {
        var actual = crypto.DES.decrypt(
            crypto.lib.CipherParams.create({ciphertext: crypto.enc.Hex.parse('1de5279dae3bed6f')}),
            crypto.enc.Hex.parse('0000000000002000'), {
                mode: crypto.mode.ECB,
                padding: crypto.pad.NoPadding
            }).toString();

        console.log(actual);
    });
});