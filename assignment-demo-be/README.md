# 🧠 Talk to Digital Agent – Demo Backend

This repository contains a **WebSocket backend** for the *Talk to Agent* assignment, where a frontend communicates with a digital agent using `.wav` audio messages.

## 📦 Features

- Provides a WebSocket server at `ws://localhost:8080`
- Immediately sends a sample `.wav` file upon connection
- Echoes back any incoming audio messages (Blob/Buffer)
- Compatible with frontend apps using `WaveSurfer.js` and `react-audio-voice-recorder`

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/pseudo_voice_server.git
cd pseudo_voice_server
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add a sample `.wav` file

Place your test `.wav` file in the `records/` folder like this:

```
records/test.wav
```

### 4. Start the server

```bash
npm start
```

The server will run at: [http://localhost:8080](http://localhost:8080)

---

## 🔗 WebSocket API

- **Endpoint**: `ws://localhost:8080`
- **Incoming messages**: expected as `Blob` (type `audio/wav`)
- **Responses**:
  - On connect: sends a sample `.wav` file
  - On message: echoes back the same audio


---

## 📁 Project Structure

```
pseudo_voice_server/
├── records/
│   └── test.wav         # Sample audio file
├── index.js             # WebSocket backend server
├── package.json         # Dependencies and start script
└── README.md            # This file
```

---

## 📜 Assignment Context

This backend is designed for use in the [Talk to Agent](./Assignment_Talk_to_Agent_EN.pdf) assignment, where the frontend records the user’s voice and sends it to the server via WebSocket.

---

## 🛠 Technologies Used

- `Node.js` + `ws` – WebSocket server
- `fs`, `path` – Node.js core modules for file system and path handling
- `.wav` audio files for communication


