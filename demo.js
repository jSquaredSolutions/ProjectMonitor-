'use strict';
const ioHook = require('iohook');
const Timer = require('timer-machine');
const myTimer = new Timer();
myTimer.start();
const timeScale = [];

setInterval(function(){
   if(timeScale.length > 0){
      console.log("Activeity continues time: "+myTimer.time())
      myTimer.start();
   } else {
      console.log("Activity stopped: "+myTimer.time());
      myTimer.stop();
   };
   console.log(": Reset");
   console.log(": stopW");
}, 3000);

setInterval(function(){
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