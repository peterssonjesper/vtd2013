/* global Orders, jQuery */

'use strict';

(function($) {

	var orders = new Orders();
	orders.fetch(function(list) {
		orders.render($('ul'), list);
	});

})(jQuery);
