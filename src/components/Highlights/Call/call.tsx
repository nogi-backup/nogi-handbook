import React from 'react';

export default function Call({ children }) {
    return (
        <span
            style={{
                backgroundColor: '#702d8c',
                borderRadius: '2px',
                color: '#FFFFFF',
            }}>
            {children}
        </span>
    );
}