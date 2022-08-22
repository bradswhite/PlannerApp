# PlannerApp
## This is a productivity planning app built with React.js, Java Spring Boot and Tailwind.css

<img width="1363" alt="planner-app 1 screenshot" src="https://user-images.githubusercontent.com/97484878/185636426-a88e03d6-3f41-4492-b5ae-7d0aa8f04b44.png">
<img width="1367" alt="planner-app 2 screenshot" src="https://user-images.githubusercontent.com/97484878/185636436-74709183-637b-4793-9081-ad2e3163860b.png">
<img width="1364" alt="planner-app 3 screenshot" src="https://user-images.githubusercontent.com/97484878/185636512-8e041ca0-5632-48a7-bca1-0aee87fe3524.png">
<img width="1364" alt="planner-app 4 screenshot" src="https://user-images.githubusercontent.com/97484878/185636526-4c0e5d7d-8b2b-4e4f-8a1a-bc6add6cc1b6.png">


Note: this is also the first project I made using my new programming setup of Ubuntu VM/Neovim

###### Requirements:
- Java SDK 17
- NPM (Node Package Manager)
- React.js
- Tailwind.css

###### Installation:
To install Tailwind CSS run `npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9`.

To start up the server run `mvn spring-boot:run`. Then navigate to `localhost:8080/h2-console` and click on connect.  From here run the following SQL query to populate the database with cards: `INSERT INTO CARDS (NAME) values
  ('Sunday'), ('Monday'), ('Tuesday'), ('Wednesday'), ('Thursday'), ('Friday'), ('Saturday');`

To start up the front end navigate to planner-app using the `cd planner-app` command. Then run `npm run start` to start the app.

To start up Tailwind CSS run `npx tailwindcss init`.

###### Usage:
Server is running on port 8080.
App is running on port 3030.
