exports.local = function() {
  return new Promise(function (resolve, reject) {
	const itemJsonFile = Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, "/listItems.json");
	const itemJsonStr = itemJsonFile.read().toString();
	const itemJson = JSON.parse(itemJsonStr);
    resolve(itemJson);
  });
};

exports.network = function() {
  return new Promise(function(resolve, reject) {
  	const url = "http://192.168.1.158/thesis/listItems.json";
  	const xhr = Ti.Network.createHTTPClient({
  		onload: function(e) {
			const parsedItems = JSON.parse(this.responseText);
			resolve(parsedItems);	
  		}
  	});
  	
  	xhr.open("GET", url);
  	xhr.send();
  });
};
