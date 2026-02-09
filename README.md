# Real-Time Collaborative Document Editor 📝

Company Name: CODTECH IT SOLUTIONS

Name: Shinde Shantanu Dasharath

Intern ID:  CTIS3019

Domain Name: Full Stack Web Development

Batch Duration: 4 Weeks

Mentor Name: Nila Santos

A full-stack, Google Docs-style collaborative editor built using the MERN stack and WebSockets. This application allows multiple users to edit the same document simultaneously with changes appearing in real-time across all sessions.


## Output

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/3fc72457-4807-47b4-9ee0-d4348eb1db3e" />


## 🚀 Features
* **Real-Time Editing:** Instant synchronization across all connected clients using Socket.io.
* **Persistent Storage:** Documents are saved to MongoDB Atlas so progress is never lost.
* **Rich Text Support:** Powered by the Quill.js engine for professional formatting.
* **Auto-Save:** Changes are automatically synced to the cloud every 2 seconds.

## 🛠️ Tech Stack
* **Frontend:** React.js, Quill.js, Socket.io-client
* **Backend:** Node.js, Express, Socket.io
* **Database:** MongoDB Atlas (Mongoose)

## 📦 Installation & Setup

### 1. Prerequisites
* Node.js installed on your machine.
* A MongoDB Atlas account and connection string.

### 2. Clone the Repository
```bash
git clone [https://github.com/YOUR_USERNAME/collaborative-editor.git](https://github.com/YOUR_USERNAME/collaborative-editor.git)
cd collaborative-editor
3. Setup Backend
Bash

cd server
npm install
Update server.js with your MongoDB Atlas connection string.

Run the server:

Bash

node server.js
4. Setup Frontend
Open a new terminal:

Bash

cd client
npm install
npm start
🛠️ How it Works
The Client captures text changes (Deltas) via the Quill editor.

Socket.io emits these changes to the Node.js server.

The Server broadcasts the changes to all other users in the same document "room."

Mongoose periodically saves the current state of the document to the MongoDB cloud.

📄 License
This project is open-source and available under the MIT License.


