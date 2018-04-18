export default class PowerDOM {

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
		this.cache = new QueryCache();
	}

	/**
	 * 
	 * @param {String} selector 
	 */
	query(selector) {
		let nodes;
		if (this.cache.contains(selector)) {
			nodes = this.cache.get(selector);
		} else {
			nodes = this.document.querySelectorAll(selector);
			this.cache.store(selector, nodes);
		}

		if (nodes.length == 0) {
			return null;
		}
		return nodes;
	}

	addListener(selector, event, listener) {
		let nodes = this.query(selector);
		for (let i = 0; i < nodes.length; i++) {
			nodes[i].addEventListener(event, listener);
		}
	}
}

class QueryCache {
	constructor() {
		this.table = new Map();
	}

	store(selector, nodes) {
		this.table.set(selector, nodes);
	}

	contains(selector) {
		return this.table.has(selector);
	}

	get(selector) {
		return this.table.get(selector);
	}
}
