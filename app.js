var Gpio = require('pigpio').Gpio,
  motor = new Gpio(3, {mode: Gpio.OUTPUT}),
  pulseWidth = 5000,
  increment = 500;

setInterval(function () {
  console.log('calling...')
  motor.servoWrite(pulseWidth);

  pulseWidth += increment;
  if (pulseWidth >= 10000) {
    increment = -1000;
  } else if (pulseWidth <= 5000) {
    increment = 1000;
  }
}, 500);
