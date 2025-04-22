# Voice Chat Application

A real-time voice chat application built with React and WebSocket, allowing users to record and exchange voice messages with a digital agent.

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies for both client and server:

```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../assignment-demo-be
npm install
```

3. Start the server:

```bash
cd assignment-demo-be
npm start
```

4. Start the client:

```bash
cd client
npm run dev
```

## 🛠 Tech Stack

### Frontend (React + TypeScript)

- **React** (v18.2) - UI framework
- **TypeScript** - Type safety
- **Vite** (v6.2) - Build tool and dev server
- **TailwindCSS** (v4.1) - Utility-first CSS
- **@wavesurfer/react** (v1.0) - Audio waveform visualization
- **react-audio-voice-recorder** (v2.2) - Voice recording functionality
- **@radix-ui** - Headless UI components
- **class-variance-authority** - Component variant management

### Backend (Node.js)

- **ws** (v8.18) - WebSocket server
- **Node.js** core modules (fs, http, path)

## ✨ Features

- Real-time voice chat using WebSocket
- Voice recording with visualization
- Audio playback with waveform display
- Responsive UI with TailwindCSS
- Type-safe development with TypeScript
- Component variants using class-variance-authority
- Modular architecture with React components

## 🏗 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utility functions
│   └── public/           # Static assets
│
└── assignment-demo-be/    # Backend WebSocket server
    ├── records/          # Voice recordings storage
    └── index.js         # Server implementation
```

## 🔧 Development

- ESLint configuration for code quality
- Prettier for code formatting
- Hot Module Replacement (HMR) with Vite
- Tailwind configuration for styling
- TypeScript configuration for type checking
