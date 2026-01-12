# Qualia Task Management App

## Name

Wilbur Salazar


## Languages / tech stack

html, css, react, js

## Future Improvements
- Persist todos using localStorage or a backend database
- Add edit-in-place functionality for existing todos
- Improve accessibility and keyboard navigation
- Add form validation and success/error messaging to the contact form

## Overview
Qualia is a simple React task management application built with Create React App and React Router.

The app includes two main routes:
- `/todos` – manage a list of tasks
- `/contact` – submit a contact form

## Features

### Todos
- Add a new todo
- Mark todos as completed
- Remove todos
- Filter todos:
  - All
  - Completed
  - Incomplete
- Immediate UI updates
- Side-by-side layout

### Contact
- Controlled form inputs
- Fields:
  - First name
  - Last name
  - Email
  - Comments
- Submit clears the form (demo behavior)

## Planning 
All planning documents are included in the `planning/` folder:
- User stories
- State tree
- Component list
- Wireframes for `/todos` and `/contact`

## Technologies Used
- React
- React Router
- JavaScript
- HTML
- CSS

## How to Run Locally

```bash
npm install
npm start
```