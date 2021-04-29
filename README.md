# TheFoodiesNetwork

> An app for foodies

This application is build using MongoDB and NodeJS on the backend and React on the frontend with Redux for state management. The redux model was only implemented for application state. Most component state is dealt with by passing handler functions as props.

## Getting Started

```bash
npm install  #installs dependencies for the backend
 
cd client && npm install #install the frontend dependencies

# To run the project run
npm run dev # may be broken at the moment

# To run the backend exclusively you can just run server.js
node server.js

# To run the frontend exclusively go to the client directory
cd client

# Then run the start script
npm start
```

To use, add a file default.json in the config directory with the following information
{
"mongoURI": "your mongo uri",
"jwtSecret": "pick a secret"
}

### Author

The Foodies Network

### Version

1.0.0

### License

This project is licensed under the MIT License
