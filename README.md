# Habit Tracker App

## Table of Contents

- [Habit Tracker App](#habit-tracker-app)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Technologies](#technologies)
  - [Installation](#installation)
  - [Folder Structure](#folder-structure)
  - [Demo](#demo)
  - [Author](#author)

## Introduction

This is a Habit Tracker App built with React and Redux. The app allows users to track their daily habits, view details, and monitor their progress over time.

## Features

- Add new habits
- Track daily status of habits
- View habit details
- Delete habits
- Data persistence with Local Storage

## Technologies

- React
- Redux
- React Router
- Local Storage

## Installation

To run this project, you'll need to have Node.js and npm installed. Follow these steps:

```bash
# Clone the repository
git clone https://github.com/harijoshi12/cn_react_habit.git

# Navigate to the project folder
cd cn_react_habit

# Install dependencies
npm install

# Start the development server
npm start
```
## Folder Structure
```plaintext
|-- public
|   |-- bg.svg
|   |-- favicon.ico
|   |-- index.html
|   |-- logo192.png
|   |-- logo512.png
|   |-- manifest.json
|   |-- robots.txt
|-- src
|   |-- app
|   |   |-- store.js
|   |-- components
|   |   |-- AddHabitForm.js
|   |   |-- CardHabit.js
|   |   |-- CardWeekView.js
|   |   |-- StatusButton.js
|   |-- features
|   |   |-- habitSlice.js
|   |-- pages
|   |   |-- HabitDetailPage.js
|   |   |-- HomePage.js
|   |-- App.css
|   |-- App.css.map
|   |-- App.js
|   |-- App.scss
|   |-- index.js
|-- .gitignore
|-- package-lock.json
|-- package.json
|-- README.md
```

## Demo
https://cn-habit-tracking.netlify.app/

## Author
[Hari Joshi](https://github.com/harijoshi12)

---