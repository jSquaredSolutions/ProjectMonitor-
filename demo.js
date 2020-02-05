// vscode-fold=#
'use strict';
var fs = require('fs');
const ioHook = require('iohook');
const Timer = require('timer-machine');
const screenshot = require('screenshot-desktop');
var fileName = './time.json';
var file = require(fileName);

const myTimer = new Timer();
myTimer.start();
const timeScale = [];

setInterval(function () {
}, 30000);

setInterval(function () { // check activity every three seconds
   if (timeScale.length > 0) {
      console.log("Activity continues time: " + myTimer.time())
      myTimer.start();
      screenshot({filename:'//DESKTOP-TE5OBU7/ScreenShots/'+Date.now()+'.png'});
      file.time.push(3000);
file.date.push(Date.now());
fs.writeFile(fileName, JSON.stringify(file), function (err) {
   if (err) return console.log(err);
});
   } else {
      console.log("Activity stopped: " + myTimer.time());
      myTimer.stop();
   };
}, 3000);

setInterval(function () {
   timeScale.length = 0;
}, 60000);

ioHook.on("mousemove", event => {
   timeScale.push('1');
});

// For keyboard hook
ioHook.on("keydown", event => {
   timeScale.push('1');
});

//Register and start hook 
ioHook.start();