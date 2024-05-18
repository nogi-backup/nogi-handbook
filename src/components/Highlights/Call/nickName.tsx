import React from 'react';

export default function NickNameCall({ name }) {
    return (
        <span
            style={{
                backgroundColor: '#702d8c',
                borderRadius: '2px',
                color: '#FFFFFF',
            }}>
            {name ? name + "!" : "〇〇！"}
        </span>
    );
}
