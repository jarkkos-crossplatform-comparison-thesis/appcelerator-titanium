// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

args.loadPromiseCreator().then(
	function(items) {
		const mappedItems = _.map(items, function(item) {
			return {
				itemImage: { image: item.imageSrc },
				itemDescription: { text: item.description }
			};
		});
		
		console.log(mappedItems);
		$.itemlist.sections[0].setItems(mappedItems);
	},
	function(error) {
		
	}
);