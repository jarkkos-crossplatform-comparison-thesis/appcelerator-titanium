// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;


$.startComputationBtn.addEventListener("touchstart", startComputation);

function startComputation() {	
	$.statusLabel.text = "Computing";
	$.activityIndicator.show();
	
	setTimeout(function () {
		findPrimesBelow(3000000);
		$.statusLabel.text = "Done";
		$.activityIndicator.hide();
	}, 0);
}


function findPrimesBelow(number) {
  const primes = [];

  for (var i = 1; i < number; ++i) {
    if (isPrimeNumber(i)) {
      primes.push(i);
    }
  }

  return primes;
}

function isPrimeNumber(number) {
  if (number == 1) return false;
  if (number == 2) return true;

  const sqrt = Math.sqrt(number);
  for (var i = 2; i <= sqrt; ++i) {
    if (number % i == 0) return false;
  }
  
  return true
}