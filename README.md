# kickoff-code-toggle
A very basic way to toggle code examples. Used on the [trykickoff.com](http://trykickoff.com) site

All classnames are configurable in the options when kickoff-code-toggle is initialised.

## Installation

```
npm install --save kickoff-code-toggle
```

## Usage:

### Javascript
```js
var toggleCode = require('kickoff-code-toggle');

toggleCode({
	headings: '.sg-demoHeading',
	showCodeEl: 'sg-demoHeading-showCodeBtn',
	showCodeBtnText: '❮/❯',
	codeContainerEl: 'show-code',
	activeClass: 'is-active',
});
```

### HTML markup
```html
<h2 class="sg-sectionHeading sg-demoHeading">Demo 1</h2>
<div class="sg-demo">
	
	<h1>This is a piece of demo code</h1>

	<div class="sg-demo-code">

<pre><h1>This is a piece of demo code</h1></pre>

	</div>
</div>
```

### CSS
```css
.sg-demo-code {
	display: none;
}

.sg-demo.show-code .sg-demo-code {
	display: block;
}
```

## Build the code
Build relies on [Browserify](http://browserify.org)
```sh
npm run build
```

## Test the code
```sh
npm test
```
Then open your browser at http://localhost:8000

---

Made by [Z&er :zap:](https://github.com/mrmartineau/)