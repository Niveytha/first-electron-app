const { app, BrowserWindow } = require('electron') // controls application's event lifecycle
const path = require('path')

// creates and manages application windows
const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
        // _dirname: points to the path of the currently executing script
        // path.join:  joins multiple path segments together, creating a combined path string that works across all platforms
      }
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