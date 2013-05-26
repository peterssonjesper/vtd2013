/* global Ingredients, jQuery */

'use strict';

(function () {

	describe('Ingredients', function () {

		describe('fetch', function () {

			it('should have a fetch method', function() {
				var ingredients = new Ingredients();
				expect(ingredients.fetch).to.be.a('function');
			});

			it('should fetch ingredients from the API', function(done) {
				jQuery.getJSON = function(url) {
					expect(url).to.eq('/api/v1/ingredients.json');
					done();
				};

				var ingredients = new Ingredients();
				ingredients.fetch(function() {});
			});

			it('should return an array when the API returns successfully', function(done) {
				jQuery.getJSON = function(url, success) {
					success([]);
				};

				var ingredients = new Ingredients();
				ingredients.fetch(function(data) {
					expect(data).to.be.an('array');
					done();
				});
			});

		});

		describe('render', function () {

			it('renders <li>-elements inside the given element', function() {
				var ul = document.createElement('ul');
				var ingredients = new Ingredients();
				ingredients.render(ul, [{'name' : 'An ingredient'}]);
				expect(ul.getElementsByTagName('li').length).to.eq(1);
			});

		});

	});

})();
