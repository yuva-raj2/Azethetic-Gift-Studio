import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the gift studio brand and grandeur banner', () => {
  render(<App />);
  const brandElements = screen.getAllByText(/AZETHETIC CLYF THE GIFT STUDIO/i);
  expect(brandElements.length).toBeGreaterThan(0);
  const grandeurHeading = screen.getByText(/Grandeur/i);
  expect(grandeurHeading).toBeInTheDocument();
  const ctaBtn = screen.getByText(/GIFT LUXURY/i);
  expect(ctaBtn).toBeInTheDocument();
});
