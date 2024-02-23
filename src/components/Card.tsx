import React from 'react';
import { Card } from '../types/game';

interface DeckCardProps {
  card: Card;
  showCard?: boolean; 
};


const DeckCard : React.FC<DeckCardProps>  = ({card, showCard = false})  => {
  const cardBackImage = 'https://deckofcardsapi.com/static/img/back.png';
  return (
    <div>
      <img src={showCard ? card.image : cardBackImage} alt={ showCard ? card.code : "card" }/>
    </div>
  );
}

export default DeckCard;