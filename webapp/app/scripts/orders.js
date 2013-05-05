(function($) {
	window.Orders = function() {

		this.fetch = function(callback) {
			$.getJSON('/api/v1/orders', {
				'success' : function(data) {
					callback(data);
				}
			});
		};

	};
})(jQuery);
