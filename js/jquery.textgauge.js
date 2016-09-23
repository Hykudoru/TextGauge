;(function( $ ) {
		
	$.fn.textgauge = function(options) {
		
		//Reject anything that is not a DOM textarea or text input
		if (!this.is("textarea") && !this.is("input[type='text']")) {
			console.log("TextGauge is only compatible with DOM textarea or text input nodes.");
			
			return null;
		}
		
		//---------- Default Settings ----------
		var defaults = {
			limit: 50,
			theme: '',
			colorPos: '#00FFFF', //Aqua
			colorNeg: '#FF0000', //Red
			onPos: function() {
				return;
			},
			onNeg: function() {
				return;
			}
		};
		
		//---------- Settings ----------
		var settings = $.extend({}, defaults, options);
		this.addClass('tg ' + settings.theme);
		var $indicator = this.next("span, div");
		
		//---------- Event Listeners ----------
		$(document).ready(examine);
		this.on("keyup", examine);
		
		//---------- Event Handler ----------
		function examine() {
			var inputLength = parseFloat($(this).val().length);
			var inputRemaining = (settings.limit - inputLength);
			//Clear indicator
			$indicator.text("");
			//Refill indicator and determine which callback to perform
			if (inputRemaining > 0) {
				$indicator.text(inputRemaining).css("color", settings.colorPos);
				settings.onPos.call(this, this);
			}else {
				$indicator.text(inputRemaining).css("color", settings.colorNeg);
				settings.onNeg.call(this, this);
			}
		}
		
		return this;
	};
	
}( jQuery ));