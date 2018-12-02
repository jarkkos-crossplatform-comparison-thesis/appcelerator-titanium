function openView(viewName, args) {
	const vc = Alloy.createController(viewName, args);
	const w = vc.getView();
	
	if (OS_ANDROID) {
		w.addEventListener("open",function(e) {
			if (! w.getActivity()) {
    	        Ti.API.error("Can't access action bar on a lightweight window.");
	        } else {
	            actionBar = w.activity.actionBar;
	            if (actionBar) {
	                actionBar.displayHomeAsUp=true;
	                actionBar.onHomeIconItemSelected = function() {
	                    w.close({animated: false});
	                };
	            }
	            w.activity.invalidateOptionsMenu();
	        }
		});
		w.addEventListener("androidback", function() {
            w.close({animated: false});
		});
	}
	
	w.open({animated: false});
}

$.openButtonLatencyBtn.addEventListener("touchstart", function() {
	openView("buttonlatency");
});

$.openLocalListView.addEventListener("touchstart", function() {
	const localLoader = require("listDataLoaders").local;
	openView("listitems", { loadPromiseCreator: localLoader });
});

$.openNetworkListView.addEventListener("touchstart", function() {
	const loaders = require("listDataLoaders");
	console.log(loaders);
	openView("listitems", { loadPromiseCreator: loaders.network });
});

$.openHeavyComputationBtn.addEventListener("touchstart", function() {
	openView("heavycomputation");
});

$.openVibrationLatencyBtn.addEventListener("touchstart", function() {
	openView("vibrationlatency");
});

$.openThirdPartyNoticesBtn.addEventListener("touchstart", function() {
	openView("notimplemented");
});


$.index.open();