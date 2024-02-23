import React, { useEffect, useState } from 'react';
import { Card, Deck, GameStatus } from '../types/game';
import { drawCards, getShuffeledDeck } from '../api/deck';
import DeckCard from './Card';
import { GAME_MESSAGES } from '../constants/game';

function Game() {
  const [houseCards, setHouseCards] = useState<Array<Card>>([]);
  const [playerCards, setPlayerCards] = useState<Array<Card>>([]);
  const [playerPoints, setPlayerPoints] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [gameStatus, setGameStatus] = useState<GameStatus | null>();
  const [deck , setDeck] = useState<Deck | null>();


  const reset = () => {
    setDeck(null);
    setHouseCards([]);
    setPlayerCards([]);
    setPlayerPoints(0);
    setGameOver(false);
    setGameStatus(null);
  }

  const drawCard = () => {
    if(deck) {
      drawCards(deck.deck_id, 1).then((result: Array<Card>) => {
        setPlayerCards([...playerCards, ...result]);
      })
    }
  };

  const standUp = () => {
    if(!gameOver) {
      setGameOver(true);
    }
  }

  const calculatePoint = (cards: Array<Card>): number => {
    
    let points: number = 0
    const cardsWithoutAce = cards.filter((card) => card.value !== "ACE");
    const aceCount = cards.length - cardsWithoutAce.length;
    cardsWithoutAce.forEach((card) => {
        let number = parseInt(card.value);
        if(isNaN(number)) {
          // point value for special cards other than ACE
          number = 10;
        }
        points += number;
    });

    for (let i = 0; i < aceCount; i++) {
      if (points + 11 > 21) {
        points += 1;
      } else {
        points += 11;
      }
    }

    return points;
  };

  useEffect(() => {
    if(!deck) {
      getShuffeledDeck().then((result: Deck) => {
        setDeck(result)
      })
    }
  }, [deck]);

  useEffect(() => {
    if(deck && houseCards.length === 0) {
      drawCards(deck.deck_id, 4).then((result: Array<Card>) => {
        setHouseCards(result.slice(0,2));
        setPlayerCards(result.slice(2));
      })
    }
  }, [deck, houseCards]);

  useEffect(() => {
    const points = calculatePoint(playerCards);
    if (points === 21 || points > 21) {
      setGameOver(true);
    }
    setPlayerPoints(points);
  }, [playerCards]);

  useEffect(() =>  {
    if(gameOver && !gameStatus) {
      const housePoints = calculatePoint(houseCards);
      if(housePoints === playerPoints) {
        setGameStatus(GameStatus.Tie);
      } else if (playerPoints === 21 || ( playerPoints < 21 && playerPoints > housePoints)) {
        setGameStatus(GameStatus.Win);
      } else {
        setGameStatus(GameStatus.Lose);
      }
    }
  }, [gameOver, gameStatus, playerPoints, houseCards]);

  return (
    <div>
      <div className='heading'> House Cards </div>
      <div className='cards-container'>
        {
          houseCards.map((card) => <DeckCard card={card} key={card.code} showCard={gameOver}/>)
        }
      </div>
      { gameStatus && <div> House points: {calculatePoint(houseCards)}</div> }
      <div className='heading'> Player Cards </div>
      <div className='cards-container'>
        {
          playerCards.map((card) => <DeckCard card={card} key={card.code} showCard={true}/>)
        }
      </div>
      <div> Player points: {playerPoints}</div>
      {
        gameStatus ? 
          <div>
            <div> {GAME_MESSAGES[gameStatus]}</div>
            <button className='button' onClick={reset}>Play Again</button>
          </div>
          :
          <div>
            <button className='button' onClick={drawCard}>Draw Card</button>
            <button className='button' onClick={standUp}>Standup</button>
          </div>
      }
    </div>
  );
}

export default Game;
