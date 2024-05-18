import React from 'react';

export default function OrReMo({ children, name }) {
    return (
        <span
            style={{
                backgroundColor: '#702d8c',
                borderRadius: '2px',
                color: '#FFFFFF',
            }}>
            {"俺~~の" + (name ? name : "〇〇") + "!"}
        </span>
    );
}