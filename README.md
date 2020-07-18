# ProjectMonitor-

b2: Added the CSV write to file incase the application closes and I need the date.

12/30/2019

Added the code to write data to time.json file

Added .gitignore /SS

Create a SS folder after you clone the project if you want screenshots. 

In some systems I need to run this command via PS as admin:

PowerShell -Command "Set-ExecutionPolicy Unrestricted"

1/08/2020

When trying to run this project on other PCs, somethings the iohook does not work because C++ needs to be installed. I installed C++ via VS community

Create a file named time.json and add this:

{
    "time":[],
    "date":[]
}

If you are saving to a shared drive use something like this:

//DESKTOP-TE5OBU7/ScreenShots/

run "npm install" 

07/18/2020

Issue: ProjectMonitor- stopped working on my VM's. One this I noticed was discovery mode was turned off. I turned it on, but that did not fix the problem.
Check to see if password is required for file share

![Password ON/OFF](PassONOFF.png)