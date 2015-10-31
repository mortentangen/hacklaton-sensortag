setInterval(getData, 100);

function getData() {
	$.get('/data', function(data) {
		$('#lux').attr('class', 'light-bulb-' + bulbValue(data));
	})	
}

function bulbValue(value) {
	var lumen = Math.floor(value/2);
	console.log(lumen);
	var x = lumen > 100 ? 100 : lumen;
	return Math.abs(100-x);
}