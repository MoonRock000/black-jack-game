import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Game from './Game';

describe('Game Component', () => {
  test('renders without crashing', () => {
    render(<Game />);
  });
});
