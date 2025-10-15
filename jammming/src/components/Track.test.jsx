import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import Track from "./Track";
import { it } from "vitest";

const sampleSong = {
    name: 'My Song',
    artists: [{name: 'Artist1'}, {name: "Artist2"}],
    album: {name: 'My Album'}
}

describe('Track component', () => {
    it('renders song details', () => {
        render(
            <Track 
                song={sampleSong}
                addedToPlaylist={false}
                addTrack={() => {}}
                removeTrack={() => {}}
            />
        );
        expect(screen.getByText('My Song')).toBeInTheDocument();
        expect(screen.getByText(/by Artist1, Artist2 \| My Album/)).toBeInTheDocument();
    });

    it('shows + button when not added to playlist', () => {
        render(
            <Track 
                song={sampleSong}
                addedToPlaylist={false}
                addTrack={() => {}}
                removeTrack={() => {}}
            />
        );

        expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();
    });

    it('shows - button when added to playlist', () => {
        render(
            <Track 
                song={sampleSong}
                addedToPlaylist={false}
                addTrack={() => {}}
                removeTrack={() => {}}
            />
        );

        expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();

    });

    it('calls addTrack when + button clicked', () => {
        const addTrackMock = vi.fn();

        render(
            <Track 
                song={sampleSong}
                addedToPlaylist={false}
                addTrack={addTrackMock}
                removeTrack={() => {}}
            />
        );

        fireEvent.click(screen.getByRole('button', {name: '+'}));
        expect(addTrackMock).toHaveBeenCalledWith(sampleSong);
    });

    it('calls removeTrack when - button clicked', () => {
        const removeTrackMock = vi.fn();

        render(
            <Track 
                song={sampleSong}
                addedToPlaylist={true}
                addTrack={() => {}}
                removeTrack={removeTrackMock}
            />
        );

        fireEvent.click(screen.getByRole('button', {name: '-'}));
        expect(removeTrackMock).toHaveBeenCalledWith(sampleSong);
    });
})