import { GameStatus } from "../types/game";

export const GAME_MESSAGES: {[key in GameStatus]: string} = {
  win: "Congratulations!!! You win",
  lose: "Oops! You have lost",
  tie: "Ooh! It was a tie. You have lost" 
}
export const BASE_DECK_API_URL = "https://deckofcardsapi.com/api";
