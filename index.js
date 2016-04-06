var Calculator = require('./lib/calculator.js');

var start, end;

var help = 'For me to calculate days, I need two dates\n';
help += 'Dates must be between 01/01/1901 and 31/12/2999\n';
help += 'Please run the command in this format: node index.js <date1> <date2>\n';
help += '\t Example: node index.js 01/12/2015 31/12/2015';

if (process.argv.length < 4) {
  console.log(help);
  return; // Required arguments are missing. Do nothing.
}

start = process.argv[2];
end = process.argv[3];

if (start && end) {
  var msg;
  try {
    var days = Calculator.calculateDays(start, end);
    if (days === 1) {
      msg = days + ' day';
    } else {
      msg = days + ' days';
    }
    console.log(msg);
  } catch (e) {
    console.log(e);
    console.log(help);
  }
}