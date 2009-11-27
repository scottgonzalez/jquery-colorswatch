(function($) {

$.widget('nmk.colorswatch', {
	isInput: false,
	
	_init: function() {
		this.swatch = (this.element.is(':input') ? this._initFromInput() : this.element)
			.addClass('nmk-colorswatch');
		
		this._render();
	},
	
	_initFromInput: function() {
		this.isInput = true;
		
		if (this.options.value === null) {
			this.options.value = this.element.val();
		}
		
		var self = this;
		this.element.click(function() {
			self.show();
		});
		
		return $('<div></div>')
			.hide()
			.insertAfter(this.element);
	},
	
	_render: function() {
		var row,
			rowSize = this.options.rowSize,
			swatch = this.swatch.empty();
		
		$.each(this.options.colors, function(i, color) {
			if (!(i % rowSize)) {
				row = $('<div></div>')
					.addClass('nmk-colorswatch-row')
					.appendTo(swatch);
			}
			
			$('<div></div>')
				.addClass('nmk-colorswatch-color')
				.css('backgroundColor', color)
				.data('colorswatch-color', color)
				.appendTo(row);
		});
	},
	
	show: function() {
		this.swatch.show();
		
		var self = this;
		function detectBlur(event) {
			var swatch = $(event.target).closest('.nmk-colorswatch'),
				keepOpen = (swatch.length && swatch[0] == self.swatch[0]) ||
					(event.target == self.element[0]);
			
			if (!keepOpen) {
				$(document).unbind('mousedown keydown', detectBlur);
				self.hide();
			}
		}
		$(document).bind('mousedown keydown', detectBlur);
	},

	hide: function() {
		this.swatch.hide();
	}
});

$.extend($.nmk.colorswatch, {
	version: '1.0pre',
	defaults: {
		colors: [
			'#000000',
			'#993300',
			'#333300',
			'#000080',
			'#333399',
			'#333333',
			'#800000',
			'#FF6600',
			'#808000',
			'#008000',
			'#008080',
			'#0000FF',
			'#666699',
			'#808080',
			'#FF0000',
			'#FF9900',
			'#99CC00',
			'#339966',
			'#33CCCC',
			'#3366FF',
			'#800080',
			'#999999',
			'#FF00FF',
			'#FFCC00',
			'#FFFF00',
			'#00FF00',
			'#00FFFF',
			'#00CCFF',
			'#993366',
			'#C0C0C0',
			'#FF99CC',
			'#FFCC99',
			'#FFFF99',
			'#CCFFFF',
			'#99CCFF',
			'#FFFFFF'
		],
		rowSize: 6,
		value: null
	}
});

})(jQuery);

