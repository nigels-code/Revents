# Revents

I wrote this while following Neil Cumming's "Build an app with React, Redux and Firestore from scratch" course.

A web application for creating and sharing events.

Technologies used: React, Redux, Firebase (Firestore), Javascript, HTML, CSS.

I have set up a CI/CD pipeline between Github and Heroku.  
Open <https://reventsxx.herokuapp.com/> to see this project in production.

## Installation

```sh
npm install
```

In order to use Firestore in development mode you need to supply your own credentials. You can do this by creating a `.env.local` file in the project's root directory and adding the following code:

```sh
REACT_APP_API_KEY='your api key'
REACT_APP_AUTH_DOMAIN="your auth domain"
REACT_APP_DATABASE_URL="your database url"
REACT_APP_PROJECT_ID="your project id"
REACT_APP_STORAGE_BUCKET="your storage bucket"
REACT_APP_MESSAGING_SENDER_ID="your messaging sender id"
REACT_APP_APP_ID="your app id"
```

## Usage

```sh
npm start
```

This runs the application in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in a browser.
