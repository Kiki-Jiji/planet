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
            allowRunningInsecureContent: true,
            webSecurity: false
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
  
    writeFile("config.json", JSON.stringify(state), function(err){
        console.log("done")
    })
  
  })
  
  const loadContent = () => {
      let data = readFileSync('config.json')
    
      let appState = JSON.parse(data)
      
    //   formName = venus_prev.NAME
    //   delete venus_prev.NAME
  
    //   let con = []
    //   for (com in venus_prev) {
    //       console.log(com)
    //       con.push(venus_prev[com])
    //   };
    
    //   const state = {
    //       blocks: con,
    //       formName: formName,
    //   }
  
      return appState
    }
  
  
  ipcMain.handle('loadContent', (e) => {
    return loadContent();
  });