# React-websocket-chat-main

ChatHub is a real-time chat application built using WebSockets. It allows multiple users to join a chatroom and exchange messages instantly.

## Features
- Real-time messaging using WebSockets
- 1-to-1 and group chat functionality
- User list display
- Responsive UI

## Tech Stack
### Backend:
- Node.js
- Express
- Socket.io

### Frontend:
- React.js
- TypeScript
- Vite
- Tailwind CSS (not used yet, but can be integrated)

## Installation & Setup

### 1. Clone the repository
```sh
git clone https://github.com/your-repo/chathub.git
cd chathub
```

### 2. Backend Setup
```sh
cd server
npm install
npm start
```
The backend runs on `http://localhost:3001`

### 3. Frontend Setup
```sh
cd client
npm install
npm run dev
```
The frontend runs on `http://localhost:5173`

## Project Structure
```
chathub/
│── server/          # Backend (Node.js, Express, Socket.io)
│── client/          # Frontend (React, TypeScript)
│── README.md        # Project Documentation
```

## Screenshot
![Image](https://github.com/user-attachments/assets/45218d6b-1f49-4ac1-9d6d-615e320388ec)

## Usage
1. Start the server (`npm start` in the `server` folder).
2. Start the frontend (`npm run dev` in the `client` folder).
3. Open `http://localhost:5173` in two different browsers or tabs.
4. Enter a username and start chatting!

Enjoy real-time chatting with ChatHub! 🚀

