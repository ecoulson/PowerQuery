import PowerDOM from '../src/index';
const DOM = require('./helpers/helper');
const {expect} = require('chai');

describe('PowerDOM', () => {
	describe('Instantiation Suite', () => {
		it('Should Throw A NullDocumentError', () => {
			try {
				let x = new PowerDOM(null);
			} catch(e) {
				return expect(e.name).to.equal('NullWindowError');
			}
			expect('Error To Be Thrown').to.equal(true);
		});

		it('Should Throw An IllegalTypeError', () => {
			try {
				let x = new PowerDOM(10);
			} catch(e) {
				return expect(e.name).to.equal('IllegalTypeError');
			}
			expect('Error To Be Thrown').to.equal(true);
		});

		it('Should Throw An InvalidWindowError', () => {
			try {
				let x = new PowerDOM({});
			} catch(e) {
				return expect(e.name).to.equal('InvalidWindowError');
			}
			expect('Error To Be Thrown').to.equal(true);
		});

		it('Should Instantiate a PowerQuery Object', () => {
			try {
				let x = new PowerDOM(DOM);
			} catch(e) {
				expect('No error should be thrown').to.equal(false);
			}
		});
	});

	describe('Query Suite', () => {
		it('Should Get a null from the query', () => {
			let Query = new PowerDOM(DOM);
			let nodes = Query.query('x');
			expect(nodes).to.equal(null);
		});

		it('Should get a node list with length of 1', () => {
			let Query = new PowerDOM(DOM);
			let nodes = Query.query('.a');
			expect(nodes.length).to.equal(1);
		});

		it('Should get a div node', () => {
			let Query = new PowerDOM(DOM);
			let nodes = Query.query('.a');
			expect(nodes[0].tagName.toLowerCase()).to.equal('div');
		})
	});

	describe('Add Listener Suite', () => {
		
	})
});