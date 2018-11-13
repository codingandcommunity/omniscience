import {expect} from 'chai';
import fetch from 'node-fetch';

describe('codingandcommunity.org', () => {
    it('should return 200 response code', async function () {
        this.timeout(15000);

        const res = await fetch('https://codingandcommunity.org');

        expect(res.status).to.equal(200);
    });
});

describe('www.codingandcommunity.org', () => {
    it('should return 200 response code', async function () {
        this.timeout(15000);

        const res = await fetch('https://www.codingandcommunity.org');

        expect(res.status).to.equal(200);
    });
});

describe('spaceport.codingandcommunity.org', () => {
    it('should return 200 response code', async function () {
        this.timeout(15000);

        const res = await fetch('https://spaceport.codingandcommunity.org');

        expect(res.status).to.equal(200);
    });
});