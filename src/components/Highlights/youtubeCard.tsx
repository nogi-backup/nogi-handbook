import React from 'react';

export default function YouTubeCard({ children, id }) {
    return (
        <iframe
            width="100%"
            height="360"
            src={"https://www.youtube.com/embed/" + id}
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture;"
            loading="lazy"
        />
    );
}