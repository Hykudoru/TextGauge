# TextGauge
TextGauge performs basic input length analysis on DOM text/textarea nodes
allowing you to pass callback functions to fire when one of your text gauges
remains within or exceeds its boundries. Default color indicators can optionally modified.
Note: TextGauge is smart enough to use its closest span sibling.


# Plugin Installation
```javascript
<script src="https://github.com/Hykudoru/TextGauge/blob/master/jquery.textgauge.js"></script>
```
 TextGauge/jquery.textgauge.js
# HTML Snippet
```
<form action="#">
	<div>
		<input id="tg1" type="textarea"/>
		<span></span>
	</div>
</form>
```

# jQuery Snippet
```javascript
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
```