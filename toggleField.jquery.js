/**
 * Toggle the values of a text-based input field
 *
 * jQuery plugin that references the accessible TITLE attribute of an 
 * INPUT element to populate the VALUE of the field until the focus/blur
 * event is triggered. Useful as an indicator of expected values or in
 * addition to LABELs
 *
 * @author Paul Gueller http://paulgueller.com
 * @version 2.2.1
 * @since 2011.0722
 * @requires jQuery v1.3+
 *
 * @usage: jQuery('input').togglefield();
 *	applies behavior to all input elements
 *
 * @usage: jQuery('[type="url"]').togglefield({textsrc:"title"});
 *	references "title" attribute for placeholder text. Useful for accessibility
 *
 * @usage: jQuery('input:password').togglefield({textsrc:"label"});
 *	uses the label text for placeholder. Handy when labels are hidden.
 */
 
;
(function ($) {
$.fn.toggleField = function (options) {
	var defaults = {
		textsrc: "placeholder"
	};
	
	this.settings = $.extend(true, defaults, options);
	
	this.supports_input_placeholder = function () {
		var i = document.createElement('input');
		return 'placeholder' in i;
	};
	
	this.toggle = function ($el) {
		var val = $el.attr('placeholder') ;
		if($el.val() === '') {
			$el.addClass('toggle').val(val);
		} else if($el.val() === val){
			$el.removeClass('toggle').val('');
		}
	};
	
	this.pwHelper = function ($el) {
		$el.hide().bind('blur', function () {
			if($el.val() === ''){
				$el.hide().prev('input').show();
			}
		}).before($("<input>", {
			type: "text"
			, "class": "toggle"
			, title: $el.attr('title')
			, placeholder: $el.attr('placeholder')
			, value: (!context.supports_input_placeholder()) ? $el.attr('placeholder') : null 
			, focus: function () {
				$(this).hide().next('input').show().focus();
			}
		}));
	};
	
	var context = this;
	
	return this.each(function () {
		var $this = $(this);
		
		if(!$this.prop('placeholder')) {
			//set a placeholder value if one is not already set
			switch(context.settings.textsrc){
				case "label":
					var txt = $('label[for="'+$this.attr('id')+'"]').text();
					break;
				case "title":
					var txt = $this.attr('title');
					break;
				default:
					var txt = $this.attr('placeholder');
			}
			$this.prop('placeholder', txt);
		}
		
		if(!context.supports_input_placeholder()) {
			//provide placeholder-esque support for browsers that to not
			if($this.attr('type') === "password") {
				//special password helper due to security issues
				context.pwHelper($this);
			} else {
				context.toggle($this);
				$this.bind('focus blur', function () {
					context.toggle($this);
				}).parents("form:first").bind('submit', function(){
					context.toggle($this);
				});
			}
		}
	});
};
})(jQuery);