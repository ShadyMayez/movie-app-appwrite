# React + Vite + Tailwindcss + Appwrite

## 🎬 Movie Discovery Web App

A modern, responsive movie discovery platform built with **React.js** and **Vite**. This application allows users to explore trending movies, search for their favorite titles, and discover new releases using real-time data from the TMDB API, with a backend powered by **Appwrite** to track search trends.

---

##  Overview

This project is a high-performance web application designed to provide a seamless movie browsing experience. It combines a sleek UI with efficient data fetching and a backend-as-a-service (BaaS) integration.
---

### Features

-  **Optimized Real-time Search:** Instantly find movies using the search bar. This feature implements Debouncing to wait for a user to finish typing before sending an API request, drastically reducing the number of unnecessary network calls to TMDB.
- **Trending Movies:** Displays a "Trending" section based on search frequency, powered by **Appwrite Database**.
- **Dynamic Content:** Fetches live movie data, including posters, ratings, and release dates from TMDB.
- **Optimized Performance:** Built with Vite for lightning-fast development and optimized production builds.
- **Responsive Design:** Fully accessible across mobile, tablet, and desktop devices.

---

---
<img width="1900" height="832" alt="React-app" src="https://github.com/user-attachments/assets/49957968-aa34-4bd0-9734-1d4c4540ba5a" />
<img width="1904" height="872" alt="React-app(1)" src="https://github.com/user-attachments/assets/c518c12e-d0f5-4a92-9c6f-ce3a7ddb397f" />


## 🛠 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- JavaScript (ES6+)

### Backend
- Appwrite (BaaS)
  - Web SDK
  - Database
  - Authentication-ready setup

---

## 📁 Project Structure
<img width="2080" height="1512" alt="src" src="https://github.com/user-attachments/assets/9b509dc0-2569-4487-96be-8324a4fc3fa3" />

movie-app-appwrite/

├── public/                 # Static assets (images, logos, icons)

│   ├── hero-bg.png

│   ├── hero-img.png

│   ├── logo.png

│   ├── No-Poster.png

│   ├── Rating.svg

│   └── Vector.svg

├── src/                    # Application source code

│   ├── assets/             # Project-specific assets

│   │   └── react.svg

│   ├── components/         # Reusable React components

│   │   ├── MovieCard.jsx

│   │   └── Search.jsx

│   ├── App.css             # Main application styles

│   ├── App.jsx             # Root component

│   ├── appwrite.js         # Appwrite configuration & client

│   ├── index.css           # Global styles

│   └── main.jsx            # Entry point

├── .gitignore              # Files to ignore in Git

├── eslint.config.js        # Linting rules

├── index.html              # HTML template

├── LICENSE                 # Project license

├── package.json            # Dependencies and scripts

└── vite.config.js          # Vite configuration


