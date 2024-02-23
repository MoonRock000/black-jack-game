import axios from "axios";
import { Card, Deck } from "../types/game";
import { BASE_DECK_API_URL } from "../constants/game";

export const getShuffeledDeck = async (): Promise<Deck> => {
  const { data }  = await axios.get(`${BASE_DECK_API_URL}/deck/new/shuffle/`);
  return data;
}

export const drawCards = async (id: string, count: number = 1): Promise<Array<Card>> => {
  const { data }  = await axios.get(`${BASE_DECK_API_URL}/deck/${id}/draw/?count=${count}`);
  return data.cards;
}