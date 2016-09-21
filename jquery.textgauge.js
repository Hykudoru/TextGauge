(function( $ ){
		
	$.fn.textgauge = function(options) {
		
		//---------- Settings ----------
		var defaults = {
			indicator: 'span',
			limit: 50,
			colorPos: '#00FFFF', //Aqua
			colorNeg: '#FF0000', //Red
			onPos: function() {
				return;
			},
			onNeg: function() {
				return;
			}
		};
		var settings = $.extend({}, defaults, options);
		var $indicator = this.siblings(settings.indicator).first();
		
		//---------- Event Listeners ----------
		this.ready(examine);
		this.on("keyup", examine);
		
		//---------- Event Handler ----------
		function examine() {
			var inputLength = parseFloat($(this).val().length);
			var inputRemaining = (settings.limit - inputLength);
			//Clear indicator
			$indicator.text("");
			//Refill indicator and determine which callback to perform
			if (inputRemaining < 0) {
				$indicator.text(inputRemaining).css("color", settings.colorNeg);
				settings.onNeg.call(this, this);
			}else {
				$indicator.text(inputRemaining).css("color", settings.colorPos);
				settings.onPos.call(this, this);
			}
		}
		
		return this;
	};
	
}( jQuery ));