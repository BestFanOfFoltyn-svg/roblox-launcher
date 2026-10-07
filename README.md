const input = document.getElementById('gameUrl');
const button = document.getElementById('launchButton');
const status = document.getElementById('status');

button.addEventListener('click', async () => {
  const value = input.value.trim();

  if (!value) {
    status.textContent = 'Add a Roblox URL before launching.';
    status.style.background = 'rgba(255, 107, 107, 0.12)';
    status.style.borderColor = 'rgba(255, 107, 107, 0.35)';
    status.style.color = '#ffd9d9';
    return;
  }

  status.textContent = 'Opening Roblox...';
  status.style.background = 'rgba(0, 176, 116, 0.12)';
  status.style.borderColor = 'rgba(0, 176, 116, 0.4)';
  status.style.color = '#b9f7d7';

  try {
    await window.launcher.launchRoblox(value);
    status.textContent = 'Roblox has been opened in your default browser or app flow.';
  } catch (error) {
    status.textContent = error?.message || 'Unable to launch Roblox.';
    status.style.background = 'rgba(255, 107, 107, 0.12)';
    status.style.borderColor = 'rgba(255, 107, 107, 0.35)';
    status.style.color = '#ffd9d9';
  }
});

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    button.click();
  }
});

input.value = window.launcher.defaultUrl;
