* {
  box-sizing: border-box;
}

:root {
  --bg: #0d1117;
  --panel: #161b22;
  --panel-strong: #1f2630;
  --line: #2d3748;
  --text: #f3f6fb;
  --muted: #94a3b8;
  --primary: #00b074;
  --primary-strong: #009a63;
  --danger: #ff6b6b;
}

html, body {
  margin: 0;
  height: 100%;
  font-family: Inter, 'Segoe UI', sans-serif;
  background: radial-gradient(circle at top, #17212b 0%, var(--bg) 38%);
  color: var(--text);
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
}

.app-shell {
  width: min(1200px, 94vw);
  min-height: 700px;
  padding: 24px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-mark {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), #4dd7a6);
  color: #03130d;
  display: grid;
  place-items: center;
  font-weight: 800;
  font-size: 1.2rem;
}

.brand-name {
  font-size: 1.15rem;
  font-weight: 700;
}

.brand-subtitle {
  color: var(--muted);
  font-size: 0.78rem;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.hero-card {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 24px;
  padding: 28px;
  border: 1px solid var(--line);
  border-radius: 20px;
  background: rgba(22, 27, 34, 0.8);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.18);
}

.eyebrow {
  margin: 0 0 16px;
  color: var(--primary);
  text-transform: uppercase;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  font-weight: 700;
}

h1 {
  margin: 0;
  font-size: clamp(2.4rem, 5vw, 4.1rem);
  line-height: 1.02;
}

.subtitle {
  margin-top: 18px;
  max-width: 600px;
  color: var(--muted);
  font-size: 1.03rem;
  line-height: 1.7;
}

.launch-panel {
  border: 1px solid var(--line);
  border-radius: 18px;
  background: var(--panel-strong);
  padding: 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
}

label {
  color: var(--muted);
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 700;
}

input {
  width: 100%;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: rgba(15, 23, 42, 0.95);
  color: var(--text);
  padding: 14px 16px;
  font-size: 0.98rem;
}

button {
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: #04140d;
  font-weight: 800;
  font-size: 1rem;
  padding: 16px 18px;
  cursor: pointer;
  transition: transform 0.15s ease, opacity 0.15s ease;
}

button:hover {
  transform: translateY(-1px);
}

button:active {
  transform: translateY(0);
}

.status {
  min-height: 48px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 10px 12px;
  background: rgba(0, 176, 116, 0.12);
  border: 1px solid rgba(0, 176, 116, 0.4);
  color: #b9f7d7;
  line-height: 1.5;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(240px, 1fr));
  gap: 24px;
}

.info-card {
  border: 1px solid var(--line);
  border-radius: 20px;
  background: rgba(22, 27, 34, 0.7);
  padding: 22px 24px;
}

.info-card h2 {
  margin-top: 0;
  margin-bottom: 14px;
  font-size: 1.1rem;
}

.info-card ul {
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
  line-height: 1.8;
}

@media (max-width: 900px) {
  .hero-card {
    grid-template-columns: 1fr;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }
}
