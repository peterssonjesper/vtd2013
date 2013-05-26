/* global Ingredients, jQuery */

'use strict';

(function($) {

	var ingredients = new Ingredients();
	ingredients.fetch(function(list) {
		ingredients.render($('ul'), list);
	});

})(jQuery);
