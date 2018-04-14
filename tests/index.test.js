import PowerQuery from '../src/index';
const DOM = require('./helpers/helper');
const {expect} = require('chai');

describe('PowerQuery Suite', () => {
	describe('Instantiation Suite', () => {
		it('Should Throw A NullDocumentError', () => {
			try {
				let x = new PowerQuery(null);
			} catch(e) {
				return expect(e.name).to.equal('NullHTMLDocumentError');
			}
			expect('Error To Be Thrown').to.equal(true);
		});

		it('Should Throw An IllegalTypeError', () => {
			try {
				let x = new PowerQuery(10);
			} catch(e) {
				return expect(e.name).to.equal('IllegalTypeError');
			}
			expect('Error To Be Thrown').to.equal(true);
		});

		if ('Should Instantiate a PowerQuery Object', () => {
			let x = new PowerQuery(D);
			console.log(x);
		});
	});
});