import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, test, expect, beforeEach, afterEach, vi } from "vitest";
import App from "./App";
import * as SpotifyPKCE from "./assets/SpotifyPKCE";

// Mock redirectToSpotifyAuth and getAccessToken
vi.mock("./assets/SpotifyPKCE", () => ({
  redirectToSpotifyAuth: vi.fn(),
  getAccessToken: vi.fn(),
}));

describe("App component", () => {
  beforeEach(() => {
    // Mock token retrieval to simulate logged-in user
    SpotifyPKCE.getAccessToken.mockResolvedValue("fake-token");

    // Mock global fetch for Spotify API calls
    global.fetch = vi.fn((url) => {
      if (url.includes("/search")) {
        return Promise.resolve({
          ok: true,
          json: () =>
            Promise.resolve({
              tracks: {
                items: [
                  {
                    id: "1",
                    name: "Test Track",
                    artists: [{ name: "Test Artist" }],
                    album: { name: "Test Album" },
                    uri: "spotify:track:1",
                  },
                ],
              },
            }),
        });
      }
      if (url.includes("/me")) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ id: "user123" }),
        });
      }
      if (url.includes("/playlists")) {
        if (url.endsWith("/playlists")) {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve({ id: "playlist123" }),
          });
        }
        return Promise.resolve({ ok: true, json: () => Promise.resolve({}) });
      }
      return Promise.reject(new Error("Unknown fetch call"));
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
    delete global.fetch;
  });

  test("allows adding and removing tracks via + and - buttons", async () => {
    render(<App />);

    // Wait for token success message to appear
    expect(await screen.findByText("Success!")).toBeInTheDocument();

    // Enter search term in input
    const input = screen.getByPlaceholderText(/enter search term/i);
    fireEvent.change(input, { target: { value: "Test Track" } });

    // Click Search button to submit form
    const searchButton = screen.getByRole("button", { name: /search/i });
    fireEvent.click(searchButton);

    // Wait for + button to appear in search results
    const addTrackButton = await screen.findByText("+");
    expect(addTrackButton).toBeInTheDocument();

    // Click + to add track to playlist
    fireEvent.click(addTrackButton);

    // The + button disappears in search results, - button appears in playlist
    await waitFor(() => {
      expect(screen.queryByText("+")).not.toBeInTheDocument();
      expect(screen.getByText("-")).toBeInTheDocument();
    });

    // Click - button to remove track from playlist
    const removeTrackButton = screen.getByText("-");
    fireEvent.click(removeTrackButton);

    // The track should move back to search results with + button again
    await waitFor(() => {
      expect(screen.queryByText("-")).not.toBeInTheDocument();
      expect(screen.getByText("+")).toBeInTheDocument();
    });
  });
});
