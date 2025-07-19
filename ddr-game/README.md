# Dance Dance Revolution Game

## Overview
This project is a Dance Dance Revolution rhythm game where players press notes that scroll up on the screen at the right time to gain points. The game features various components including song selection, score tracking, and audio management.

## Project Structure
```
ddr-game
├── src
│   ├── app.ts
│   ├── components
│   │   ├── Arrow.ts
│   │   ├── GameScreen.ts
│   │   ├── ScoreBoard.ts
│   │   └── SongSelect.ts
│   ├── models
│   │   ├── Note.ts
│   │   ├── Song.ts
│   │   └── Score.ts
│   ├── services
│   │   ├── AudioManager.ts
│   │   ├── InputManager.ts
│   │   └── ScoreManager.ts
│   ├── utils
│   │   ├── constants.ts
│   │   └── timing.ts
│   └── types
│       └── index.ts
├── tests
│   ├── timing.test.ts
│   └── score.test.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions
1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies using `npm install`.
4. Run the application using `npm start`.

## Gameplay
- Players select a song from the song selection screen.
- Arrows will scroll from the bottom to the top of the screen.
- Players must press the corresponding arrow key when the arrows reach the target area to score points.
- The game tracks the player's score and displays it on the scoreboard.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.