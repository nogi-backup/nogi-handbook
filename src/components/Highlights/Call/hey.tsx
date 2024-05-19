import React from 'react';

export default function Hey({ children, count }) {
    return (
        <span
            style={{
                backgroundColor: '#702d8c',
                borderRadius: '2px',
                color: '#FFFFFF',
            }}>
            {"Hey " + (count ? "x" + count : "") + "!"}
        </span>
    );
}