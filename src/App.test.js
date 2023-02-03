import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';



test('Renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={[]} dispatch={{}}/>);
  const headingElement = screen.getByText("Choose date");
  expect(headingElement).toBeInTheDocument();
});