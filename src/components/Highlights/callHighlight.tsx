import React from 'react';

export default function CallHighlight({ children, color }) {
    return (
        <span
            style={{
                backgroundColor: color,
                borderRadius: '2px',
                color: '#FFFFFF',
            }}>
            {children}
        </span>
    );
}