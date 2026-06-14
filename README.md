FutureTech Blog

A modern blogging platform where authors can write, publish, and share blog posts and news articles with readers around the world.

🔗 Live demo: futuretechss.netlify.app


What it does

FutureTech Blog is a web-based publishing platform that lets authors:


Create and publish blog posts and news articles
Use a rich text editor to format content
Manage their published posts
Reach readers through a clean, responsive interface



Tech stack

TechnologyPurposeReact 19Frontend UIFirebaseAuthentication and databaseTailwind CSS 4StylingReact Router DOMPage routingJodit ReactRich text editorSwiperImage slidersAOSScroll animations


Getting started

Follow these steps to run the project on your local machine.

Prerequisites

Make sure you have these installed before you begin:


Node.js (version 18 or higher)
Git
A free Firebase account (any Google account works)



Step 1 — Fork the repository

Go to the project on GitHub and click the Fork button at the top right. This creates your own copy of the project.


Step 2 — Clone your fork

Open your terminal and run:

bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

Then move into the project folder:

bashcd YOUR_REPO_NAME


Step 3 — Install dependencies

Run this command to install all required packages:

bashnpm install

This installs everything the project needs including React, Firebase, Tailwind CSS, and all other libraries.


Step 4 — Create your own Firebase project


Important: Each contributor runs the app using their own free Firebase project.
The project owner's Firebase account is private and not shared.
This takes about 3 minutes and is completely free.



Follow these steps:


Go to firebase.google.com and sign in with any Google account
Click Go to console → Add project
Give your project any name and follow the setup steps
Once inside your project, enable these two services:

Firestore Database → click Build → Firestore Database → Create database → start in test mode
Authentication → click Build → Authentication → Get started → enable Email/Password



Go to Project settings (gear icon at the top left) → scroll down to Your apps
Click the web icon </> to register a web app → give it any name → click Register app
You will see a config object like this — copy these values:


const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};


Step 5 — Set up your environment variables

Copy the example environment file:

bashcp .env.example .env

Open the .env file and paste in the values you copied from Firebase:

VITE_FIREBASE_API_KEY=paste_your_apiKey_here
VITE_FIREBASE_AUTH_DOMAIN=paste_your_authDomain_here
VITE_FIREBASE_PROJECT_ID=paste_your_projectId_here
VITE_FIREBASE_STORAGE_BUCKET=paste_your_storageBucket_here
VITE_FIREBASE_MESSAGING_SENDER_ID=paste_your_messagingSenderId_here
VITE_FIREBASE_APP_ID=paste_your_appId_here


Your .env file is listed in .gitignore — it will never be pushed to GitHub.
Never share or commit your real Firebase credentials.




Step 6 — Start the development server

bashnpm run dev

The app will open at http://localhost:5173 in your browser.


How to contribute

Contributions are welcome. Here are the ways you can help:

Completing pages with good UI design

Some pages are still in progress. Pick an unfinished page, build it out with clean, responsive Tailwind CSS design, and submit a pull request.

Fixing component structure

If you spot a component that is hard to read, poorly organised, or duplicated — refactor it. Keep components small, focused, and reusable.

Improving performance and efficiency

Look for unnecessary re-renders, heavy imports, or slow operations. Optimise and submit a PR with a brief explanation of what you changed and why.

Improving documentation

Spotted something unclear in the README or code? Fix it. Good documentation makes the project easier for everyone.


Contribution steps


Fork the repo and clone it locally (see Getting started above)
Create a new branch for your work:


bash   git checkout -b fix/component-name


Make your changes
Commit with a clear message:


bash   git commit -m "fix: improve navbar component structure"


Push your branch:


bash   git push origin fix/component-name


Open a pull request on GitHub and describe what you changed



Before starting work on an issue, leave a comment on it so others know it's being worked on.




Open issues

Check the Issues tab on GitHub for tasks labelled good first issue or help wanted.


License

This project is licensed under the MIT License.
