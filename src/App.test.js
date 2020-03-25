import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Render test: renders text Pizza', () => {
    const { getByText } = render(<App />);
    const boldElement = getByText(/Pizza/i);
    expect(boldElement).toBeInTheDocument();
});
