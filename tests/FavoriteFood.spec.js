describe('Favorite Food Filter', function () {
	var $controller, favoriteFood;

	beforeEach(module('app'));

	beforeEach(inject(function ($filter) {
		favoriteFood = $filter('favoriteFood');
	}));

	it ('should filter a list based on favorite food', function() {
		var mockList = [{
			name: "Mike",
			favoriteFood: "Pizza"
		}, {
			name: "John",
			favoriteFood: "Pepsi"

	}];

	expect(favoriteFood(mockList, "Pizza").length).toEqual(1);
	expect(favoriteFood(mockList, "Pizza")[0].name).toEqual("Mike");

	})


});
