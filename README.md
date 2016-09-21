# TextGauge
TextGauge is a smart jQuery plugin that performs basic input length analysis on DOM text/textarea nodes
allowing you to pass callback functions to fire when one of your text gauges
remains within or exceeds its boundaries. Default color indicators can optionally be modified.
Note: TextGauge is smart enough to use its closest span sibling!

# Install via JavaScript
```javascript
<script src="https://cdn.rawgit.com/Hykudoru/TextGauge/master/jquery.textgauge.js"></script>
```

# Install via NPM
```
npm install textgauge
```

# HTML Snippet
```
<textarea id="tg1" rows="4" cols="40"></textarea>
<span></span>
```
# jQuery Snippet
```javascript
$(document).ready(function() {

	$("#tg1").textgauge({
		limit: 50,
		colorPos: '#00FFFF',
		colorNeg: '#FF0000',
		onPos: function() {
			console.log("Safe");
		},
		onNeg: function() {
			console.log("Exceeded limit");
		}
	});
	
});
```
