
# Adroit360Task

This project is a simple task management web application that includes user authentication and authorization features. Users can sign up, log in, and log out to access their personalized task lists. The application provides CRUD operations for managing tasks and user accounts. The application also includes a simple main page that displays tasks grouped by status (complete or not) to help users track their tasks. The user interface is designed to be visually appealing and user-friendly, following best practices for user experience.




## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies in both directories `backend` & `client`

```bash
  cd client
  npm install
```

```bash
  cd backend
  npm install
```
Add local MongoDB URL
```bash
  cd backend/config
  ## open and edit the mongoose.config.js with the MongoDB url in the "URL" key.
```

Start the project (backend & client)

```bash
  cd client
  npm run dev
```
```bash
  cd backend
  npm run dev
```


## Tech Stack

**Client:** React, Vite, TailwindCSS, React-Router.

**Server:** Node, Express, Mongoose, Passport, Passport-Local.

