const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('launcher', {
  launchRoblox: (url) => ipcRenderer.invoke('launch-roblox', url),
  defaultUrl: 'https://www.roblox.com/games/',
});
