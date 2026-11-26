AI Resume Builder

An AI-powered resume builder built using the MERN stack and Google Gemini API. It helps users create professional resumes with AI-assisted content generation, making the resume creation process easier and more efficient.

**Features
- AI-Powered Content Generation:** Uses Google Gemini API to generate and improve resume content.
- Resume Creation:** Create professional resumes with structured sections.
- User Authentication:** Secure user registration and login.
- Resume Preview:** Preview your resume before finalizing it.
- User-Friendly Interface:** Clean and responsive user interface.
- Full-Stack Architecture:** React frontend connected to a Node.js and Express backend.

**Tech Stack
-> Frontend
  - React.js
  - Tailwind CSS
  - React Router
  - Axios

-> Backend
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose

-> AI Integration
  - Google Gemini API

->Tools
  - Git & GitHub
  - VS Code
  - Postman



## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project directory

```bash
cd AI-Resume-Builder
```

### 3. Setup the Backend

```bash
cd server
npm install
```

Create a `.env` file inside the server directory and configure the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
```

### 4. Start the Backend

```bash
npm run dev
```

### 5. Setup the Frontend

Open another terminal:

```bash
cd client
npm install
```

### 6. Start the Frontend

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite (usually `http://localhost:5173`).

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| PORT | Backend server port |
| MONGO_URI | MongoDB connection string |
| JWT_SECRET | Secret key for authentication |
| GEMINI_API_KEY | Google Gemini API key |

## 🤖 AI Integration

The application integrates Google's Gemini API to provide AI-assisted resume content generation.

This integration helps users generate relevant and professional resume content while simplifying the resume-building process.

## 🔮 Future Improvements

- Multiple professional resume templates.
- PDF resume download.
- AI-powered resume scoring.
- ATS (Applicant Tracking System) optimization.
- Job description-based resume customization.
- AI-generated cover letters.

## 👨‍💻 Author

**Prakash Chandra Mahato**

- GitHub: https://github.com/PrakashCh-git
- LinkedIn: www.linkedin.com/in/prakash-chandra-2b5a66294

---

⭐ If you find this project useful, consider giving it a star!
