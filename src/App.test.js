import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('format number with space each 4 digits pack', () => {
  render(<App />)  
  fireEvent.change(screen.getByTestId('hpi-number'), {target: {value: '1234123412341234'}})
  expect(screen.getByTestId('hpi-number')).toHaveValue('1234 1234 1234 1234');
});
