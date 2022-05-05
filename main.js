const { app, BrowserWindow } = require('electron') // controls application's event lifecycle

// creates and manages application windows
const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadFile('index.html')
  }

// open window
app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })

// exiting window quits app entirely
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})