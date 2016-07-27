var gpio = require('rpi-gpio');

var pin   = 4;
var delay = 1000;
var count = 0;
var max   = 10;

gpio.setup(pin, gpio.DIR_OUT, on);

function on() {
  console.log('on called!');
    if (count >= max) {
        gpio.destroy(function() {
            console.log('Closed pins, now exit');
        });
        return;
    }

    setTimeout(function() {
        gpio.write(pin, 1, off);
        count += 1;
    }, delay);
}

function off() {
  console.log('off called!');
    setTimeout(function() {
        gpio.write(pin, 0, on);
    }, delay);
}
