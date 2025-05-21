# 📝 To-Do List App

A sleek and intuitive to-do list app built with React, Firebase, and Ant Design.

🌐 Hosted on Vercel
🚀 The latest version is deployed on Vercel for easy access:
👉 [here](https://todo-app-by-tanya.vercel.app)

📌 Tech Stack
- Frontend: React.js, React Router, Ant Design
- Backend: Firebase Firestore
- Authentication: Firebase Auth
- Hosting: Vercel

🚀 Features
- User authentication (Login/Register)
- Create, edit, and delete tasks
- Mark tasks as completed
- Real-time updates with Firebase Firestore
- Responsive design

🔧 Usage
- Sign Up/Login to create an account.
- Add new tasks with due dates.
- Edit or delete tasks anytime.
- Mark tasks as completed when done.
- Real-time sync across devices.

🖥️ UI Preview
![login screen](https://raw.githubusercontent.com/TanaNazarevych/todo-app/1a3b6b5a310f7d53b5835ef5dc8de503a314abe0/login.png)
![home screen](https://raw.githubusercontent.com/TanaNazarevych/todo-app/1a3b6b5a310f7d53b5835ef5dc8de503a314abe0/home.png)


💻 Local Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/TanaNazarevych/todo-app.git
cd todo-app

2️⃣ Install Dependencies
npm install

This will install:
React.js
Firebase
Ant Design
React Router

3️⃣ Set Up Firebase
Go to Firebase Console.
Enable Firestore Database and Authentication.
In the root directory of the project, create a .env file and add the following:

REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your-measurement-id
Restart your development server to apply the .env changes.

4️⃣ Start the Development Server
npm start
The app should now be running on http://localhost:3000.



