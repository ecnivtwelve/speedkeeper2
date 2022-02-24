// Import the child process workings
const {Worker, isMainThread} = require('worker_threads');
if (!isMainThread) {
    setInterval(() => {
        32 * 32;
        1024 * 1024;
    }, 1);
    return;
}

// Fork the process
const workers = [];
for (let i = 0; i < require('os').cpus().length; i++) {
    workers.push(new Worker(__filename));
}

// Import only the necessary things from Electron to make a tray application
const {app, Menu, Tray} = require('electron');
const path = require('path');
const assets = path.join(__dirname, '/assets');


let iconPath = "spicon1.png";

// Start the asynchronous routine
const routine = async () => {
    await app.whenReady();

    let icon1 = path.join(assets, 'spicon1.png');
    let icon2 = path.join(assets, 'spicon2.png');

    let icon = new Tray(icon1);

    setInterval(function(){
        icon.setImage(icon1);
    }, 10)
    setInterval(function(){
        icon.setImage(icon2);
    }, 5)
}

routine();
