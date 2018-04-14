export default class PowerQuery {

	/**
	 * 
	 * @param {Document} document 
	 */
	constructor(document) {
		if (document == null) {
			let error = new Error('The document argument is null');
			error.name = 'NullHTMLDocumentError';
			throw error;
		}

		let type = typeof document;
	
		if (type == 'object') {
			let error = new Error('The document argument passed is not an object');
			error.name = 'IllegalTypeError';
			throw error;
		}

		this.document = document;
	}

	getNode(selector) {

	}
}
