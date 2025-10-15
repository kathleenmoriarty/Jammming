// Playlist.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import Playlist from './Playlist';
import '@testing-library/jest-dom';
import React from 'react';
import { vi } from 'vitest';

// Sample song for testing
const sampleSong = {
  id: '1',
  name: 'Test Song',
  artists: [{ name: 'Artist Name' }],
  album: { name: 'Album Name' },
  uri: 'spotify:track:123',
};

describe('Playlist component', () => {
  it('renders input, tracks, and button', () => {
    render(
      <Playlist
        playlist={[sampleSong]}
        removeTrack={() => {}}
        setPlaylistTitle={() => {}}
        savePlaylist={() => {}}
      />
    );

    expect(screen.getByPlaceholderText('Untitled')).toBeInTheDocument();
    expect(screen.getByText('Test Song')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /save to spotify/i })).toBeInTheDocument();
  });

  it('calls setPlaylistTitle when input changes', () => {
    const mockSetTitle = vi.fn();

    render(
      <Playlist
        playlist={[]}
        removeTrack={() => {}}
        setPlaylistTitle={mockSetTitle}
        savePlaylist={() => {}}
      />
    );

    const input = screen.getByPlaceholderText('Untitled');
    fireEvent.change(input, { target: { value: 'My Playlist' } });

    expect(mockSetTitle).toHaveBeenCalledWith('My Playlist');
  });

  it('calls savePlaylist when button is clicked', () => {
    const mockSave = vi.fn();

    render(
      <Playlist
        playlist={[]}
        removeTrack={() => {}}
        setPlaylistTitle={() => {}}
        savePlaylist={mockSave}
      />
    );

    const button = screen.getByRole('button', { name: /save to spotify/i });
    fireEvent.click(button);

    expect(mockSave).toHaveBeenCalled();
  });
});
