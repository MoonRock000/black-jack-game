import axios from "axios";
import { Card, Deck } from "../types/deck";

const BASE_DECK_API_URL = "https://deckofcardsapi.com/api";

export const getShuffeledDeck = async (): Promise<Deck> => {
  const { data }  = await axios.get(`${BASE_DECK_API_URL}/deck/new/shuffle/`);
  return data;
}

export const drawCards = async (id: string, count: number = 1): Promise<Array<Card>> => {
  const { data }  = await axios.get(`${BASE_DECK_API_URL}/deck/${id}/draw/?count=${count}`);
  return data.cards;
}