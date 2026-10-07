const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('node:path');

const DEFAULT_GAME_URL = 'https://www.roblox.com/games/';

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 760,
    minWidth: 980,
    minHeight: 620,
    title: 'Roblox Launcher',
    icon: path.join(__dirname, 'assets', 'icon.png'),
    autoHideMenuBar: true,
    backgroundColor: '#0d1117',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
    },
  });

  mainWindow.loadFile('index.html');
}

ipcMain.handle('launch-roblox', async (_event, targetUrl) => {
  const launchUrl = (targetUrl || DEFAULT_GAME_URL).trim();

  if (!launchUrl) {
    throw new Error('No Roblox URL provided.');
  }

  try {
    await shell.openExternal(launchUrl);
    return { ok: true, url: launchUrl };
  } catch (error) {
    console.error('Failed to open Roblox URL:', error);
    throw new Error('Unable to open the Roblox URL.');
  }
});

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
