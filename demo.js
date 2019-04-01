'use strict';
const ioHook = require('iohook');
const Timer = require('timer-machine');
const myTimer = new Timer();
myTimer.start();
const timeScale = [];
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
   path: 'out.csv',
   header: [
      { id: 'time', title: 'Time' }
   ]
});

setInterval(function () {
   const data = [
      {
         time: myTimer.time()
      }
   ];
   csvWriter
      .writeRecords(data)
      .then(() => console.log('The CSV file was written successfully'));
}, 60000);

setInterval(function () {
   if (timeScale.length > 0) {
      console.log("Activeity continues time: " + myTimer.time())
      myTimer.start();
   } else {
      console.log("Activity stopped: " + myTimer.time());
      myTimer.stop();
   };
}, 3000);

setInterval(function () {
   timeScale.length = 0;
}, 30000);

ioHook.on("mousemove", event => {
   timeScale.push('1');
});

// For keyboard hook
ioHook.on("keydown", event => {
   timeScale.push('1');
});

//Register and start hook 
ioHook.start();