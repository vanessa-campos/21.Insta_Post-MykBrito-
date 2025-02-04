const { app } = require('electron')
const controlWindow = require('./controlWindow.js')

function App() {
    const win = require("./createWindow.js")
    const tray = require('./Tray.js')

    const { toggle } = controlWindow(win, tray)
    tray.on('click', toggle)
}

app.whenReady().then(App)
// app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if(process.platform != 'darwin'){
        app.quit()
    }
})

// app.dock.hide()

// const { app, BrowserWindow } = require('electron')

// function createWindow () {
//     const win = new BrowserWindow({
           // width: 250, height: 310, frame: false, resizable: false, fullscreenable: false,
//         // webPreferences: {
//         //     nodeIntegration: true
//         // }
//     })

//     win.loadFile('index.html')
//     // win.loadURL('https://google.com')
// }

// app.on('activate', () => {
//     if(BrowserWindow.getAllWindows().length == 0){
//         createWindow()
//     }
// })


// const { app, BrowserWindow } = require('electron')
// const path = require('path')

// const createWindow = () => {
//   // Create the browser window.
//   const mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       preload: path.join(__dirname, 'preload.js')
//     }
//   })

//   // and load the index.html of the app.
//   mainWindow.loadFile('index.html')

//   // Open the DevTools.
//   // mainWindow.webContents.openDevTools()
// }

// // This method will be called when Electron has finished
// // initialization and is ready to create browser windows.
// // Algumas APIs podem ser usadas somente depois que este evento ocorre.
// app.whenReady().then(() => {
//   createWindow()

//   app.on('activate', () => {
//     // On macOS it's common to re-create a window in the app when the
//     // dock icon is clicked and there are no other windows open.
//     if (BrowserWindow.getAllWindows().length === 0) createWindow()
//   })
// })

// // Quit when all windows are closed, except on macOS. There, it's common
// // for applications and their menu bar to stay active until the user quits
// // explicitly with Cmd + Q.
// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') app.quit()
// })

// // In this file you can include the rest of your app's specific main process
// // code. Você também pode colocar eles em arquivos separados e requeridos-as aqui.