export interface Card {
  code: string;
  image: string; 
  images: { [key: string]: string }; 
  value: string;
  suit: string;
}

export interface Deck {
  deck_id: string;
  shuffled: boolean;
  remaining: number;
}

export enum GameStatus {
  Win = "win",
  Lose = "lose",
  Tie = "tie"
}