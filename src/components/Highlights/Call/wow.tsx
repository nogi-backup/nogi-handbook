import React from 'react';

export default function Wow({ count }) {
    return (
        <span
            style={{
                backgroundColor: '#702d8c',
                borderRadius: '2px',
                color: '#FFFFFF',
            }}>
            {"Wow x" + count}
        </span>
    );
}