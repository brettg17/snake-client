# Snake Client Project

Snake is a game released in the late 90's. I still remember stealing my mothers old Nokia cell phone to play it. The goal of the game is to move the snake based on the key commands that you are instructed to use and eat the "fruit". The more you eat, the longer the snake gets. The game ends once you either crash into a wall or crash into a snake body part. 

## Getting Started

- Follow steps inside the snek server repo to run the server side
- Run the development snake client using the `node play.js` command.


## Documentation

- conn.on("connect"): connect to game server. diplay messages to client.
- handleUserInput(key): handles user input. 'w', 'a', 's', 'd', will move snake. 'q' and 'e' will display secret message