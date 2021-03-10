const mqtt = require('mqtt');

class Mqtt {
  constructor() {
    this.client  = mqtt.connect('mqtt://test.mosquitto.org');
    this.client.on('connect', this.onConnected.bind(this));
    this.client.on('message', this.onMessage.bind(this)); 
    this.client.on('error', this.onError.bind(this)); 
  }
  publish(topic, message, options) {
    this.client.publish(topic, message, options);
  }
  onConnected() {}
  onMessage(topic, message) {}
  onError(error) {}
}

module.exports = Mqtt;