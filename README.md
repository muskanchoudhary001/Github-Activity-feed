# 📊 GitHub Activity Feed

A real-time GitHub activity tracker that displays user events such as commits, pull requests, and repositories.  
Built with **Node.js, Socket.io, Tailwind CSS, and GitHub API**.

---

## 🚀 Features

- Tracks GitHub user activities (commits, PRs, repos).
- Real-time updates using **Socket.io**.
- Simple UI with **Tailwind CSS**.
- Uses **GitHub API** for fetching data.

---

## 🛠️ Technologies

- Node.js + Express
- Socket.io
- Tailwind CSS
- GitHub API

---

## 📂 Project Structure

```
github-activity-feed/
│── backend/ # Express + Node.js backend
│ ├── src/ # Backend source code
│ ├── package.json # Backend dependencies
│ ├── package-lock.json
│ └── .env.example # Sample environment variables
│
│── frontend/ # React + Vite + Tailwind frontend
│ ├── public/ # Static assets
│ ├── src/ # Frontend components & pages
│ ├── package.json # Frontend dependencies
│ ├── package-lock.json
│ ├── vite.config.js
│ ├── tailwind.config.js
│ ├── postcss.config.js
│ └── index.html
│
│── .gitignore
│── README.md
```

---
 

## ⚡ Getting Started

Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/github-activity-feed.git
cd github-activity-feed
```

Install dependencies:

     npm install

Run the backend:

    cd server
    node index.js

Run the frontend:

    npm run dev
    

Then visit 👉 http://localhost:5173
(frontend)
Backend runs on 👉 http://localhost:5000

---
 

## 🔑 Environment Variables


### Create a .env file inside the server folder with:

    GITHUB_TOKEN=your_github_personal_access_token
    PORT=5000

    ⚠️ You need a GitHub Personal Access Token for authenticated API requests.

---
 

## 🎥 Demo

 <img width="1920" height="1080" alt="Screenshot (98)" src="https://github.com/user-attachments/assets/2d323221-23f0-46db-a010-107d8501ef3b" />
 
---
 

## ⚙️ How It Works

    Frontend connects to backend via Socket.io.

    Backend fetches user activity data from GitHub API.

    Real-time updates are pushed to frontend and displayed instantly.

---
 

## 🤝 Contributing

Contributions are welcome!

    Fork the repo

    Create a new branch (feature-branch)

    Commit your changes

    Push to the branch

    Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License.
You are free to use, modify, and distribute it.

