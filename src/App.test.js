import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';
import Main from './components/Main';
import { initializeTimes, updateTimes } from './components/Main';



test('Renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={[]} dispatch={{}}/>);
  const headingElement = screen.getByText("Choose date");
  expect(headingElement).toBeInTheDocument();
});


test("Initializes times is the array fill?", () => {
  const times = initializeTimes();
  expect(times.length).toBeGreaterThan(0);
});


test("Update times ", () => {
  const inputData = ['17:00','18:00','19:00','20:00','21:00','22:00']
  const expectResult = ['17:00','18:00','19:00','20:00','21:00','22:00']
  const times = updateTimes();
  console.log(times)
  expect(times).toStrictEqual(expectResult);
});
