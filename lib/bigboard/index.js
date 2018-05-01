var SerialPort = require('serialport');

var port = new SerialPort('COM1', {
  baudRate: 9600
});

module.exports = function(message) {
  var format = 'ascii';
  port.open(function() {
    for(var i = 0; i < 20; i++) {
      port.write(String.fromCharCode(0), format); //Buffer sync
    }
    port.write(String.fromCharCode(0x01), format);  //SOM
    port.write('Z00', format);   //Sign address
    port.write(String.fromCharCode(0x02), format);  //COMMAND START
    port.write('A', format); //COMMAND CODE
    port.write('0', format); //FILE LABEL
    port.write(String.fromCharCode(0x1b), format); //MODE FIELD START
    port.write(String.fromCharCode(0x32), format); //TEXT POSITION
    port.write('a', format); //MODE CODE (like center, flash, twinkle!)
    port.write(message, format);
    port.write(String.fromCharCode(0x04), format);  //EOM
  });
}
