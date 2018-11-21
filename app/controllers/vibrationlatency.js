// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

$.incrementCounterBtn.addEventListener("touchstart", vibrateDevice);

function vibrateDevice() {
	Ti.Media.vibrate();
}