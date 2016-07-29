var Gpio = require('pigpio').Gpio,
  motor = new Gpio(3, {mode: Gpio.OUTPUT}),
  pulseWidth = 1000,
  increment = 100;

setInterval(function () {
  console.log('calling...')
  motor.servoWrite(pulseWidth);

  pulseWidth += increment;
  if (pulseWidth >= 2000) {
    increment = -100;
  } else if (pulseWidth <= 1000) {
    increment = 100;
  }
}, 250);
