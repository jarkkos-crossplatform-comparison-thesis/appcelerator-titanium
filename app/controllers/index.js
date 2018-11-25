function openView(viewName) {
	const vc = Alloy.createController(viewName);
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
	openView("notimplemented");
});

$.openNetworkListView.addEventListener("touchstart", function() {
	openView("notimplemented");
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