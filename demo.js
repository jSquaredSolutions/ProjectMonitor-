// vscode-fold=#
'use strict';
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const ioHook = require('iohook');
const Timer = require('timer-machine');
const screenshot = require('screenshot-desktop');

const myTimer = new Timer();
myTimer.start();
const timeScale = [];
const csvWriter = createCsvWriter({
   path: 'out.csv',
   header: [
      { id: 'time', title: 'Time' },
      { id: 'date', title: 'Date' }
   ]
});

setInterval(function () {
   const data = [
      {
         time: myTimer.time(),
         date: Date.now()
      }
   ];
   csvWriter
      .writeRecords(data)
      .then(() => console.log('The CSV file was written successfully'));
}, 600000); // 10 minutes log time in case the app stops

setInterval(function () { // check activity every three seconds
   if (timeScale.length > 0) {
      console.log("Activity continues time: " + myTimer.time())
      myTimer.start();
      screenshot({filename:'SS/'+Date.now()+'.png'});
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