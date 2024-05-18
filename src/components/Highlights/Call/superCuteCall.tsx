import React from 'react';

export default function SuperCuteCall({ name }) {
    return (
        <span
            style={{
                backgroundColor: '#702d8c',
                borderRadius: '2px',
                color: '#FFFFFF',
            }}>
            {"超絶可愛い！" + (name ? name : "〇〇") + "!"}
        </span>
    );
}