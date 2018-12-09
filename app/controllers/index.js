const vc = Alloy.createController("selecttest");
const view = vc.getView();
if (OS_ANDROID) {
	view.open();
}
else if (OS_IOS) {
	Alloy.Globals.navwindow = $.navigation;
	$.navigation.window = view;
	$.navigation.open();
}