# TextGauge
TextGauge performs basic input length analysis, providing default color indicators and allowing you to pass callback functions to fire when one of your text gauges remains within or exceeds its boundries.


# Instructions
1st: Create an input text/textarea and fetch it from the DOM using a jQuery selector.
2nd: Create an HTML span directly in front or below it.
3rd: Pass in an object as an argument to set its limit and assign 2 callbacks.
Note: TextGauge is smart enough to use its closest span sibling.


# jQuery Plugin Snippet
```javascript
<script src="https://github.com/Hykudoru/TextGauge/textgauge.js"></script>
```

# HTML Snippet
```
<form action="#">
	<div>
		<input id="1" type="textarea"/>
		<span></span>
	</div>
	<div>
		<input id="2" type="textarea"/>
		<span id="for2"></span>
	</div>
</form>
```

# jQuery Snippet
```javascript
$("#1").textgauge({
	limit: 50,
	onPos: function() {
		console.log("Safe");
	},
	onNeg: function() {
		console.log("Exceeded limit");
	}
});
```