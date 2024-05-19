import React from 'react';

export default function OrHey({ children, count }) {
    return (
        <span
            style={{
                backgroundColor: '#702d8c',
                borderRadius: '2px',
                color: '#FFFFFF',
            }}>
            {"Or～Fu Fu" + (count ? "x" + count : "") + "!"}
        </span>
    );
}