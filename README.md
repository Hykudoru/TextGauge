# TextGauge
TextGauge is a smart jQuery plugin that performs basic input length analysis on 
DOM text/textarea nodes allowing you to pass callback functions to fire when one 
of your text gauges remains within its limits or exceeds its limits. Features include 
customizable positive/negative number indicator colors and 3 customizable themes 
(tg-them-light, tg-theme-dark, tg-theme-electron)! Note: TG is smart enough to 
reject attempts to use its functionality on any other DOM elements other than textarea 
or text input nodes. Each TG has its number indicator in the form of a div or span.
Simply place a div or span after every TG or you won't see any output.

# Install
```
<link rel="stylesheet" href="https://cdn.rawgit.com/Hykudoru/TextGauge/master/css/textgauge.css">
```
```javascript
<script src="https://cdn.rawgit.com/Hykudoru/TextGauge/master/js/jquery.textgauge.js"></script>
```

# Install with Node Package Manager
```
npm install textgauge
```

# HTML Snippet
```
<input id="tg2" type="text"  rows="5" cols="50">
<span></span>
<textarea id="tg1" rows="5" cols="50"></textarea>
<span></span>
		

```
# jQuery Snippet
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