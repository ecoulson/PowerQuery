export default class PowerQuery {

	/**
	 * 
	 * @param {Window} window
	 */
	constructor(window) {
		if (window == null) {
			let error = new Error('The Window argument is null');
			error.name = 'NullWindowError';
			throw error;
		}

		let type = typeof window;
		if (type !== 'object') {
			let error = new Error('The window argument passed is not a Window Object');
			error.name = 'IllegalTypeError';
			throw error;
		}

		if (!window.document) {
			let error = new Error('The window argument passed does not have a document');
			error.name = 'InvalidWindowError';
			throw error;
		}

		this.window = window;
		this.document = window.document;
	}

	query(selector) {
		return Array.from(this.document.querySelectorAll(selector));
	}
}
