(function(){
	'use strict';
	var isStarted = false;
	var startTime;
	var diff;
	var msg = 'Stop at 00:05!'
	
	var result = document.getElementById('result');
	var btn = document.getElementById('btn');

	result.innerHTML = msg;

	btn.addEventListener('click', function(){
		if (!isStarted){
			//started
			isStarted = true;
			this.innerHTML = 'STOP';
			//get start time
			startTime = Date.now();
			result.innerHTML = msg;
		} else {
			//stopped
			isStarted = false;
			this.innerHTML = 'START';
			//show result
			diff = (Date.now()-startTime)/1000 - 5;
			if (diff >= -0.1 && diff <= 0.1){
				result.innerHTML = 'Perfect!';
			} else if (diff > 0) {
				result.innerHTML = 'You are ' + diff.toFixed(2) + ' seconds late!';
			} else {
				result.innerHTML = 'You are ' + Math.abs(diff.toFixed(2)) + 'seconds fast!';
			}
		}

	});

})();