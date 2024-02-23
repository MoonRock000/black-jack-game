import { GameStatus } from "../types/game";

export const GAME_MESSAGES: {[key in GameStatus]: string} = {
  win: "Congratulations!!! You win",
  lose: "Oops! You have lost",
  tie: "Ooh! It was a tie. You have lost" 
}