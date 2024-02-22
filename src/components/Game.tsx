import React, { useEffect, useState } from 'react';
import { Card, Deck } from '../types/deck';
import { drawCards, getShuffeledDeck } from '../api/deck';
import DeckCard from './Card';

function Game() {
  const [houseCards, setHouseCards] = useState<Array<Card>>([]);
  const [playerCards, setPlayerCards] = useState<Array<Card>>([]);
  const [deck , setDeck] = useState<Deck | null>();

  const drawCard = () => {
    //need to implement
  }

  useEffect(() => {
    if(!deck) {
      getShuffeledDeck().then((result: Deck) => {
        setDeck(result)
      })
    }
  }, [])

  useEffect(() => {
    if(deck && !houseCards.length) {
      drawCards(deck.deck_id, 4).then((result: Array<Card>) => {
        setHouseCards(result.slice(0,2));
        setPlayerCards(result.slice(2));
      })
    }
  }, [deck])

  return (
    <div>
      <div className='heading'> House Cards </div>
      <div className='cards-container'>
        {
          houseCards.map((card) => <DeckCard card={card}/>)
        }
      </div>
      <div className='heading'> Player Cards </div>
      <div className='cards-container'>
        {
          playerCards.map((card) => <DeckCard card={card}/>)
        }
      </div>
      <button className='draw-card' onClick={drawCard}>Draw Card</button>
    </div>
  );
}

export default Game;
