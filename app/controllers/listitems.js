// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

args.loadPromiseCreator().then(
	function(items) {
		const mappedItems = _.map(items, function(item) {
			return {
				image: { image: item.imageSrc },
				description: { text: item.description }
			};
		});
		
		console.log(mappedItems);
		$.itemlist.sections[0].setItems(mappedItems);
	},
	function(error) {
		
	}
);


/*
var args = $.args;

const itemJsonFile = Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, "/listItems.json");
const itemJsonStr = itemJsonFile.read().toString();
const itemJson = JSON.parse(itemJsonStr);

const mappedItems = _.map(itemJson, function(item) {
	return {
		image: { image: item.imageSrc },
		description: { text: item.description }
	};
});

console.log(mappedItems);
$.itemlist.sections[0].setItems(mappedItems);  
 */
