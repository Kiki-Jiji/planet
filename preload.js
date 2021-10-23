
const {ipcRenderer, contextBridge} = require('electron');

contextBridge.exposeInMainWorld(
    'config', 
    {
        save_state: (state) => ipcRenderer.send('save', state),
        content: ipcRenderer.invoke('loadContent'),
    }
)

