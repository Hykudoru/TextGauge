# TextGauge
TextGauge is a smart jQuery plugin that performs basic input length analysis on
DOM text/textarea nodes allowing you to pass callback functions to fire when one
of your text gauges remains within or exceeds its limits. Features include
customizable positive and negative number indicator colors and 3 customizable themes
(tg-theme-light, tg-theme-dark, tg-theme-electron)! Note: TG is smart enough to
reject attempts to use its functionality on any other DOM elements other than textarea
or text input nodes. Each TG has its number indicator in the form of a div or a span.
Simply place a div or span after every one of your TG's or no output will be visible.

---
## Install

### Download Full Project
Includes all the source code and requires minor path tweaking.
https://github.com/Hykudoru/TextGauge/archive/master.zip

#### Install via CDN
```
<!-- 3 Optional Themes -->
<link rel="stylesheet" href="https://cdn.rawgit.com/Hykudoru/TextGauge/master/css/textgauge.css">
```
```
<!-- Latest TextGauge -->
<script src="https://cdn.rawgit.com/Hykudoru/TextGauge/master/js/jquery.textgauge.js"></script>
```

#### Install via npm
```
$ npm install textgauge
```

---
## Features

Customize positive/negative number indicator colors! 
3 basic optional themes to choose from!
- **tg-theme-light**
- **tg-theme-dark**
- **tg-theme-electron**

---
## Exposed API

#### Method
$(selector).textgauge(options)

#### Options
**limit** : The maximum input allowed.

**theme** : Choose any one of 3 class themes (tg-theme-light, tg-theme-dark, tg-theme-electron).

**colorPos** : Hexidecimal or named color assigned to number indicator when still within the limit.

**colorNeg** : Hexidecimal or named color assigned to number indicator when exceeded the limit.

**onPos** : Callback function that fires as the user types while still within boundaries.

**onNeg** : Callback function that fires as the user types while beyond boundaries.

---
## Code Snippets

#### HTML Snippet
```
<input id="tg-1" type="text">
<span></span>

<textarea id="tg-2" rows="5" cols="50"></textarea>
<span></span>

```
#### jQuery Snippet
```javascript
$(document).ready(function() {

	$("#tg1").textgauge({
		limit: 50,
		onPos: function() {
			console.log("Safe Zone");
		},
		onNeg: function() {
			console.log("Exceeded Limit");
		}
	});
	
	$("#tg1").textgauge({
		limit: 100,
		theme: 'tg-theme-electron',
		colorPos: '#00FFFF',
		colorNeg: '#FF0000',
		onPos: function() {
			console.log("Safe Zone");
		},
		onNeg: function() {
			console.log("Exceeded Limit");
		}
	});

});
```
