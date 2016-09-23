# TextGauge
TextGauge is a smart jQuery plugin that performs basic input length analysis on
DOM text/textarea nodes allowing you to pass callback functions to fire when one
of your text gauges remains within or exceeds its limits. Features include
customizable positive and negative number indicator colors and 3 customizable themes
(tg-theme-light, tg-theme-dark, tg-theme-electron)! Note: TG is smart enough to
reject attempts to use its functionality on any other DOM elements other than textarea
or text input nodes. Each TG has its number indicator in the form of a div or a span.
Simply place a div or span after every one of your TG's or no output will be visible.

# Install via CDN
The stylesheet provides you with access to 3 customizable themes!
- tg-theme-light
- tg-theme-dark
- tg-theme-electron
```
<!--TextGauge CSS Stylesheet-->
<link rel="stylesheet" href="https://cdn.rawgit.com/Hykudoru/TextGauge/master/css/textgauge.css">
```
```javascript
<!--TextGauge jQuery Plugin-->
<script src="https://cdn.rawgit.com/Hykudoru/TextGauge/master/js/jquery.textgauge.js"></script>
```

## Install via Node Package Manager
```
npm install textgauge
```

# Code Snippets
## HTML Snippet
```
<input id="tg1" type="text">
<span></span>
<textarea id="tg2" rows="5" cols="50"></textarea>
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

	$("#tg2").textgauge({
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
