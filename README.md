# Blackjack Game - React TypeScript Project

## Introduction
Welcome to the Blackjack game project! This project is a simplified version of the classic casino card game, where you'll face off against the computer, also known as "The House". The goal is to beat the House's hand without going over 21 points.

In this README, you'll find information on how to set up the project, play the game, understand the rules, and additional notes for developers.

## Project Overview
This project is built using React and TypeScript. It utilizes the Deck of Cards API for card management, allowing players to initialize a deck and deal cards during the game.

## Game Rules
Here are the simplified rules for the Blackjack game:

1. **Players**: You vs The House (computer).
2. **Card Values**:
   - Numbered cards: Face value (2-10).
   - Face cards (Jack, Queen, King): 10 points each.
   - Ace: Worth 1 or 11 points, whichever is more beneficial for the player.
3. **Initial Dealing**:
   - The House is dealt two face-up cards.
   - You are dealt two face-up cards and have the option to "Hit" (draw another card) or "Stand" (end the round).
4. **Winning Conditions**:
   - Your total is < 21 and higher than the House's total.
   - Your total is exactly 21 and the House's total is not 21.
5. **Losing Conditions**:
   - Your total exceeds 21.
   - Your total is lower than the House's total.
   - You tie with the House.

## Project Setup
To set up and run the project locally, follow these steps:

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install` or `yarn install`.
4. Start the development server using `npm start` or `yarn start`.

## Technologies Used
- React
- TypeScript
- Deck of Cards API

## File Organization
The project is organized into components, types, constants and api functions for better code structure and maintainability.

/src
|-- components
| |-- Card.tsx
| |-- Game.tsx
|-- constants
| |-- game.ts
|-- types
| |-- game.ts
|-- api
| |-- deck.ts
|-- constants
| |-- game.ts
|-- App.tsx
|-- index.tsx


## API Usage
This project interacts with the Deck of Cards API for card management. It initializes one deck and deals out cards during the game.

## Additional Notes
- The game logic is implemented in the `Game.tsx` component.

## Conclusion
Thank you for considering this project! If you have any questions or feedback, feel free to reach out.

Enjoy playing Blackjack! 🃏🎉


