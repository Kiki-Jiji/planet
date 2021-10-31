const { app, BrowserWindow, ipcMain } = require('electron');
const { writeFile, readFileSync, existsSync } = require('fs');
const path = require('path');

let win;

function createWindow() {
    win = new BrowserWindow({
         width: 800, 
         height: 600 ,
         webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
          }});
        win.loadFile('index.html');
        win.on('closed', () => {
        win = null;
    });


    // win.loadURL(`file://${__dirname}/build/index.html`);
    win.loadURL(`http://localhost:3000`);
}



app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
      createWindow();
    }
});

ipcMain.on("save", (e, state) => {
    console.log('save');
    console.log(state)

    let name = state.formName + '.json'
  
    writeFile(name, JSON.stringify(state), function(err){
        console.log("done")
    })
  
  })
  
  const loadContent = () => {
      let data = readFileSync('config.json')
    
      let appState = JSON.parse(data)
      
      return appState
    }
  
  
  ipcMain.handle('loadContent', (e) => {
    return loadContent();
  });