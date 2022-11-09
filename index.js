const { app, BrowserWindow } = require('electron')
const { autoUpdater } = require('electron-updater');
const log = require('electron-log');

log.transports.file.resolvePath = () => path.join('D:\desktop-dev\auto-app-updater', 'logs/main.log');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
    autoUpdater.checkForUpdatesAndNotify()
})

autoUpdater.on("update-available", () => {
    log.info("update-available")
})

autoUpdater.on("checking-for-update", () => {
    log.info("checking-for-update")
})

autoUpdater.on("download-progress", () => {
    log.info("download-progress")
})

autoUpdater.on("update-downloaded", () => {
    log.info("update-downloaded")
})