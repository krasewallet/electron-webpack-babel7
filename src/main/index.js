'use strict'
import {app, BrowserWindow} from 'electron'

const gotTheLock = app.requestSingleInstanceLock()
if (!gotTheLock) {
  app.quit()
} else {
  if (process.env.NODE_ENV !== 'development') {
    global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
  }

  let mainWindow
  const winURL = process.env.NODE_ENV === 'development'
    ? `http://localhost:9080`
    : `file://${__dirname}/index.html`
  const createWindow = () => {
    /**
     * Initial window options
     */
    mainWindow = new BrowserWindow({
      height: 563,
      useContentSize: true,
      width: 1000,
      frame: true,
      webPreferences: {
        nodeIntegration: true
      }
    })

    mainWindow.loadURL(winURL)

    mainWindow.on('closed', () => {
      mainWindow = null
    })
  }
  app.on('ready', async () => {
    createWindow()
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
}
