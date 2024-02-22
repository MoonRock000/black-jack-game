import React from 'react';
import { Card } from '../types/deck';

interface DeckCardProps {
  card: Card;
  showCard?: boolean; 
} 

const DeckCard : React.FC<DeckCardProps>  = ({card, showCard = false})  => {
  return (
    <div>
      <img src={card.image} alt={card.code}/>
    </div>
  );
}

export default DeckCard;