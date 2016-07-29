var Gpio = require('pigpio').Gpio,
  motor = new Gpio(3, {mode: Gpio.OUTPUT}),
  pulseWidth = 1000,
  increment = 100;

setInterval(function () {
  console.log('calling...')
  motor.servoWrite(pulseWidth);

  pulseWidth += increment;
  if (pulseWidth >= 200) {
    increment = -100;
  } else if (pulseWidth <= 100) {
    increment = 100;
  }
}, 500);
