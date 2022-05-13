const { app, BrowserWindow, Menu } = require('electron');

class AppWindow extends BrowserWindow {
  constructor(config, urlLocation) {
    const basicConfig = {
      width: 800,
      height: 600,
      webPreferences: {
        contextIsolation: false,
        nodeIntegration: true,
        enableRemoteModule: true,
        nodeIntegrationInWorker: true,
      },
      show: false,
      backgroundColor: '#efefef',
    };
    
    const finalConfig = { ...basicConfig, ...config };
    super(finalConfig);
    // this.loadFile(urlLocation);
    this.loadURL('http://localhost:3000');
    this.once('ready-to-show', () => {
      this.show();
    });
    // require('@electron/remote/main').initialize()
    // require('@electron/remote/main').enable(this.webContents)
  }
}
// Menu.setApplicationMenu(null)
app.on('ready', () => {
  const mainWindowConfig = {
    width: 550,
    height: 400,
    minWidth: 550,
    minHeight: 400,
    maxWidth:650,
    maxHeight:500,
    title: "Transmitter",
    icon: "img/favicon.ico",
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      enableRemoteModule: true,
      nodeIntegrationInWorker: true,
    },
    // frame: false
  };
  // const urlLocation = 'http://localhost:3000';
  let mainWindow = new AppWindow(mainWindowConfig, 'dist/index.html');
  mainWindow.on('closed', () => {
    mainWindow = null;
    app.quit();
  });
});