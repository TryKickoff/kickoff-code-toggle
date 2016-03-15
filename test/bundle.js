(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var nextItem = require('nextmatchingelement');
var objectAssign = require('object-assign');

module.exports = function toggleCodeSnippet(options) {
	var opts = objectAssign(defaultOptions, options);
	
	console.log(opts);
	
	var demoHeadings = document.querySelectorAll(opts.headings);

	for (var i = 0; i < demoHeadings.length; i++) {
		var showCodeBtn = document.createElement('a');
		showCodeBtn.classList.add(opts.showCodeEl);
		showCodeBtn.textContent = opts.showCodeBtnText;
		showCodeBtn.setAttribute('title', 'View source code');
		demoHeadings[i].appendChild(showCodeBtn);

		demoHeadings[i].querySelector('.' + opts.showCodeEl).addEventListener('click', function (ev) {
			ev.preventDefault();
			console.log('click', '.' + opts.showCodeEl);

			nextItem(this.parentNode, opts.demoContainerEl, function (el) {
				console.log(el);
				el.classList.toggle(opts.demoContainerToggleClass);
				this.classList.toggle(opts.activeClass);
			}.bind(this));
		});
	}
};

var defaultOptions = {
	headings: '.sg-demoHeading',
	showCodeEl: 'sg-demoHeading-showCodeBtn',
	showCodeBtnText: '❮/❯',
	demoContainerEl: 'sg-demo',
	demoContainerToggleClass: 'show-code',
	activeClass: 'is-active',
};

},{"nextmatchingelement":2,"object-assign":3}],2:[function(require,module,exports){
function nextMatchingElement(el, target, callback) {
	var nextEl = el.nextElementSibling;
	target = target;
	this.callback = callback;

	if ( nextEl.classList.contains(target) ) {
		if (typeof callback == "function") {
			return callback(nextEl);
		}

	} else {
		return nextMatchingElement(nextEl, target, callback);
	}
}

// Check for AMD/Module support, otherwise define nextMatchingElement as a global variable.
if (typeof define !== 'undefined' && define.amd) {
	// AMD. Register as an anonymous module.
	define (function() {
		'use strict';
		return nextMatchingElement;
	});
} else if (typeof module !== 'undefined' && module.exports) {
	module.exports = nextMatchingElement;
} else {
	window.nextMatchingElement = nextMatchingElement;
}
},{}],3:[function(require,module,exports){
/* eslint-disable no-unused-vars */
'use strict';
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

module.exports = Object.assign || function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (Object.getOwnPropertySymbols) {
			symbols = Object.getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

},{}],4:[function(require,module,exports){
var toggleCode = require('../index');

document.addEventListener('DOMContentLoaded', function() {
	
	toggleCode({
		headings: '.sg-demoHeading',
		showCodeEl: 'sg-demoHeading-showCodeBtn',
		showCodeBtnText: '❮/❯',
		codeContainerEl: 'show-code',
		activeClass: 'is-active',
	});
	
})
},{"../index":1}]},{},[4]);
