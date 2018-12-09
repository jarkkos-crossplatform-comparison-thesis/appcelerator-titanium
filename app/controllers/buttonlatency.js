// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

var counter = 0;
updateCounter();

$.incrementCounterBtn.addEventListener("touchstart", incrementCounter);

function updateCounter() {
	$.counterLabel.text = counter;
}

function incrementCounter() {
	counter++;
	updateCounter();
}

$.noAnimationBack.addEventListener("touchstart", handleNoAnimationBack);
function handleNoAnimationBack(e) {
	if (OS_ANDROID) {
   		$.window.close({animated: false});
	}
	else if (OS_IOS) {
		Alloy.Globals.navwindow.closeWindow($.window, { animated: false });
	}
}
