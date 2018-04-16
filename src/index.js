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
		this.eventListener = new EventListener();
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
			nodes = Array.from(this.document.querySelectorAll(selector));
			this.cache.store(selector, nodes);
		}

		if (nodes.length == 0) {
			return null;
		}
		return nodes;
	}

	addListener(selector, event, listener) {
		let nodes = this.query(selector);
		this.eventListener.on(nodes, event, listener)
	}
}

class EventListener {
	constructor() {
		this.listenerLists = new LinkedList();
	}

	on(nodes, event, listener) {

	}
}

class LinkedList {
	constructor() {
		this.front = new ListNode();
	}
}

class ListNode {
	constructor(node) {
		this.node = node;
		this.eventTable = {}
	}
}

class QueryCache {
	constructor() {
		this.table = {};
	}

	store(selector, nodes) {
		this.table[selector] = nodes;
	}

	contains(selector) {
		return this.table.hasOwnProperty(selector);
	}

	get(selector) {
		return this.table[selector];
	}
}
