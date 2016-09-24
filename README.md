# TextGauge
TextGauge is a smart jQuery plugin that performs basic input length analysis on
DOM text/textarea nodes allowing you to pass callback functions that fire when any
one of your text gauges remain within or exceed its limits.

---

# Install

## Download Full
Includes all the source code and requires minor path tweaking.
https://github.com/Hykudoru/TextGauge/archive/master.zip

## Install via CDN
```
<!-- 3 Optional Themes -->
<link rel="stylesheet" href="https://cdn.rawgit.com/Hykudoru/TextGauge/master/css/textgauge.css">
```
```
<!-- Latest TextGauge -->
<script src="https://cdn.rawgit.com/Hykudoru/TextGauge/master/js/jquery.textgauge.js"></script>
```

## Install via npm
```
$ npm install textgauge
```

---

# Features

Customize positive/negative number indicator colors
and choose between 3 optional themes!
- **tg-theme-light**
- **tg-theme-dark**
- **tg-theme-electron**

**Note:** TextGauge is smart enough
to avoid operating on any other DOM elements other than textarea or text input nodes 
even if explicitly attached. Each TextGauge has a number indicator in the form of a div or a span.
Simply place a div or span after every one of your TG's or no output will be visible.

---

# Operating the API

## Method
$(selector).textgauge(options)

## Options
- **limit** : The maximum input allowed.
- **theme** : Choose any one of 3 class themes (tg-theme-light, tg-theme-dark, tg-theme-electron).
- **colorPos** : Hexidecimal or named color assigned to number indicator when still within the limit.
- **colorNeg** : Hexidecimal or named color assigned to number indicator when exceeded the limit.
- **onPos** : Callback function that fires as the user types while still within boundaries.
- **onNeg** : Callback function that fires as the user types while beyond boundaries.

---

# Cheat Sheet

## HTML Snippet
```
<input id="tg-1" type="text">
<span></span>

<textarea id="tg-2" rows="5" cols="50"></textarea>
<span></span>
```

## jQuery Snippet
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
