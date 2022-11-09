const { app, BrowserWindow } = require('electron')
const { autoUpdater } = require('electron-updater');
const log = require('electron-log');

log.transports.file.resolvePath = () => path.join('D:\desktop-dev\auto-app-updater', 'logs/main.log');

log.log("Application version = " + app.getVersion())

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

autoUpdater.on("checking-for-update", (info) => {
    log.info("checking-for-update")
})

autoUpdater.on("update-not-available", (info) => {
    log.info("update-not-available")
})

autoUpdater.on("download-progress", (progressTrack) => {
    log.info(progressTrack)
})

autoUpdater.on("update-downloaded", (info) => {
    log.info("update-downloaded")
})