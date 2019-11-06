# Masterpiece

For my first steps as Webdeveloper, I try to build a CMS especially for sportsclubs -> "klubCMS".

## Usage

1. Install client and server dependencies:

   ```
   npm install
   cd client
   npm install
   ```

1. Go back to top folder

   ```
   cd ..
   ```

1. Add environment variables in `.env` file.

1. To start the server and client at the same time:

   ```
   npm run dev
   ```

1. Running the production build on localhost. This will create a production build, then Node will serve the app on http://localhost:8080

   ```
   NODE_ENV=production npm run dev:server
   ```
