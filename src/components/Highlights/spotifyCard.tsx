import React from 'react';

export default function SpotifyCard({ children, id }) {
    return (
        <iframe
            width="100%"
            height="200"
            src={"https://open.spotify.com/embed/track/" + id}
            allow="encrypted-media"
        />
    );
}