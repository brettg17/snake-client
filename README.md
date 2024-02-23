# Snake Client Project

Snake is a game released in the late 90's. I still remember stealing my mothers old Nokia cell phone to play it. The goal of the game is to move the snake based on the key commands that you are instructed to use and eat the "fruit". The more you eat, the longer the snake gets. The game ends once you either crash into a wall or crash into a snake body part. 

# How to Play

## Set Up


### Server
First terminal: 
- git clone https://github.com/lighthouse-labs/snek-multiplayer.git
- cd snek-multiplayer
- npm install
- npm run play


### Client
Second Terminal:
- git clone git@github.com:brettg17/snake-client.git
- cd snake-multiplayer
- node play.js

## Controls
Instructions on movement will be presented in terminal.




## Documentation

- conn.on("connect"): connect to game server. diplay messages to client.
- handleUserInput(key): handles user input. 'w', 'a', 's', 'd', will move snake. 'q' and 'e' will display secret message

# Special Thanks
Thank you to Lighthouse Labs for the learning opportunity.