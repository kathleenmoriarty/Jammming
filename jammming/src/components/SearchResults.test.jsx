import { render, screen } from '@testing-library/react';
import SearchResults from './SearchResults';
import '@testing-library/jest-dom';

const mockSearchResults = [
  { id: 1, name: 'Song A', artists: [{ name: 'Artist A' }], album: { name: 'Album A' } },
  { id: 2, name: 'Song B', artists: [{ name: 'Artist B' }], album: { name: 'Album B' } },
];

const mockPlaylist = [
  { id: 1, name: 'Song A', artists: [{ name: 'Artist A' }], album: { name: 'Album A' } }
];

describe('SearchResults', () => {
  it('renders header and search result songs', () => {
    render(
      <SearchResults
        searchResults={mockSearchResults}
        addTrack={() => {}}
        playlist={mockPlaylist}
      />
    );

    expect(screen.getByText('Search Results:')).toBeInTheDocument();
    expect(screen.getByText('Song A')).toBeInTheDocument();
    expect(screen.getByText('Song B')).toBeInTheDocument();
  });
});
