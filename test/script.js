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