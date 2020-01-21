const fs = require('fs');
const timer = 3000;
const interval = 100;
let counter = 1;
let separate = '.';

 setTimeout(() => {
     console.log('LOAD.');
     setInterval(() => {
         counter ++;
        //  process.stdout.clearLine();
         console.log(counter.repeat);
     }, interval);
 }, timer);



