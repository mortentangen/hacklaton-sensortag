
var SensorTag = require('sensortag');

function onDiscover(sensorTag) {
	console.log('sensor discovered: ', sensorTag);
}

SensorTag.discoverAll(onDiscover);