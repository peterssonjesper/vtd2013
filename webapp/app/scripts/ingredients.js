/* global jQuery */

'use strict';

(function($) {

	window.Ingredients = function() {

		this.fetch = function(callback) {
			$.getJSON('/api/v1/ingredients.json', function(data) {
				callback(data);
			});
		};

		this.render = function(element, ingredients) {
			var $element = $(element);
			ingredients.forEach(function(ingredient) {
				$element.append($('<li>').html(ingredient.name));
			});
		};

	};

})(jQuery);
