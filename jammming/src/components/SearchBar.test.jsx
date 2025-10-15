import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';
import '@testing-library/jest-dom';

describe('SearchBar component', () => {
  it('renders input with correct value', () => {
    render(
      <SearchBar
        search="Taylor Swift"
        setSearch={() => {}}
        searchResultHandler={() => {}}
      />
    );

    const input = screen.getByPlaceholderText('Enter search term');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('Taylor Swift');
  });

  it('calls setSearch when typing', () => {
    const mockSetSearch = vi.fn();

    render(
      <SearchBar
        search=""
        setSearch={mockSetSearch}
        searchResultHandler={() => {}}
      />
    );

    const input = screen.getByPlaceholderText('Enter search term');
    fireEvent.change(input, { target: { value: 'Drake' } });

    expect(mockSetSearch).toHaveBeenCalledWith('Drake');
  });

  it('calls searchResultHandler on submit', () => {
    const mockHandler = vi.fn();

    render(
      <SearchBar
        search=""
        setSearch={() => {}}
        searchResultHandler={mockHandler}
      />
    );

    const button = screen.getByRole('button', { name: /search/i });
    fireEvent.click(button);

    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
