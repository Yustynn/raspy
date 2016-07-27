const { red, blue, yellow, green, orange } = require('chalk');

console.log(green('bongiorno world'));

const { Gpio } = require('pigpio'),
  motor = new Gpio( 3, { mode:Gpio.OUTPUT } ),
  pulsWidth = 100,
  increment = 100;

setInterval( () => {
  motor.servoWrite(pulseWidth);

  pulseWidth += increment;
  pulseWidth += (pulseWidth >= 2000) ? -100 : 100;
});
