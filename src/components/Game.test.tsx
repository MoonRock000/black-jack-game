import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Game from './Game';

describe('Game Component', () => {
  test('renders without crashing', () => {
    render(<Game />);
  });

  test('initial state is correct', () => {
    render(<Game />);
    expect(screen.getByText('House Cards')).toBeInTheDocument();
    expect(screen.getByText('Player Cards')).toBeInTheDocument();
    expect(screen.getByText('Player points: 0')).toBeInTheDocument();
  });

  test('ends the game when stand up button is clicked', async () => {
    render(<Game />);
    fireEvent.click(screen.getByText('Standup'));
    const playAgainButton = await screen.findByText('Play Again');
    expect(playAgainButton).toBeInTheDocument();
  });

});
