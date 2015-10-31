
var SensorTag = require('sensortag');
var connectedSensorTag;
var currentLux;

function getLux() {
	return currentLux;
}

function onError(error) {
	connectedSensorTag.disconnect(console.log);
	throw new Error(error);
}

function onDiscover(sensorTag) {
	console.log('sensor discovered');
	connectedSensorTag = sensorTag;
	sensorTag.connectAndSetUp(onConnect);
	console.log('connected');
}

function onConnect(error) {
	if (error) {
		onError(error);
	}
	collect(connectedSensorTag);
}

function collect(sensorTag) {
	console.log('start collecting');

	sensorTag.enableLuxometer(read);
	sensorTag.setLuxometerPeriod(100, console.log);
	setInterval(read, 100);

}

function read() {
	connectedSensorTag.readLuxometer(processLuxometerData);
}

function processLuxometerData(error, lux) {
	if (error) {
		return 	onError(error)
	}
	currentLux = lux;
	console.log(lux)
}

function connect() {
	console.log('start service');
	SensorTag.discoverById('c4be8471cc07', onDiscover);
}


module.exports = {
	connect: connect,
	getLux: getLux
}