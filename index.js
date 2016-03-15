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
