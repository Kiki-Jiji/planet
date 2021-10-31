
const {ipcRenderer, contextBridge} = require('electron');

contextBridge.exposeInMainWorld(
    'config', 
    {
        save_state: (state) => ipcRenderer.send('save', state),
        saveApp: (state) => ipcRenderer.send('saveApp', state),
        content: ipcRenderer.invoke('loadContent'),
    }
)

