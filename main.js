const { app, BrowserWindow, ipcMain, Menu, shell } = require('electron');
const { writeFile, readFileSync, existsSync } = require('fs');
const path = require('path');

let win;

const template = [
  {
      role: 'help',
        submenu: [
      {
        label: 'About Editor Component',
          click() {
          shell.openExternal('https://simplemde.com/');
        }}]
      },
      {
        label: 'Create a New Form',
        submenu: [{ 
          label : 'Open Create Form Page',
          click() {

          }
        }]
    }
  ];

const appMenu  = Menu.buildFromTemplate(template)

Menu.setApplicationMenu(appMenu);

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



app.on('ready', () =>{
  createWindow()
} );

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

  ipcMain.on("saveApp", (e, state) => {
    console.log(state)

    writeFile('config.json', JSON.stringify(state), function(err){
        console.log("App config saved")
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