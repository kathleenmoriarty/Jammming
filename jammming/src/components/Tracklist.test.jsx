import React from 'react';
import { render, screen } from '@testing-library/react';
import Tracklist from './Tracklist';
import '@testing-library/jest-dom';

const sampleSongs = [
  {
    id: 1,
    name: 'Song One',
    artists: [{ name: 'Artist A' }],
    album: { name: 'Album 1' },
  },
  {
    id: 2,
    name: 'Song Two',
    artists: [{ name: 'Artist B' }],
    album: { name: 'Album 2' },
  },
];

const samplePlaylist = [
  {
    id: 1,
    name: 'Song One',
    artists: [{ name: 'Artist A' }],
    album: { name: 'Album 1' },
  },
];

describe('Tracklist', () => {
  it('renders all songs', () => {
    render(
      <Tracklist
        songs={sampleSongs}
        playlist={samplePlaylist}
        addTrack={() => {}}
        removeTrack={() => {}}
      />
    );

    // Should render both song titles
    expect(screen.getByText('Song One')).toBeInTheDocument();
    expect(screen.getByText('Song Two')).toBeInTheDocument();
  });

  it('renders correct button for songs in and out of playlist', () => {
    render(
      <Tracklist
        songs={sampleSongs}
        playlist={samplePlaylist}
        addTrack={() => {}}
        removeTrack={() => {}}
      />
    );

    // Song One is in the playlist => should show "-"
    expect(screen.getByRole('button', { name: '-' })).toBeInTheDocument();

    // Song Two is NOT in playlist => should show "+"
    expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();
  });
});
