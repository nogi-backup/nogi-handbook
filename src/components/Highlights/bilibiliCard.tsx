import React from 'react';

export default function BilibiliCard({ children, id }) {
    return (
        <iframe
            width="100%"
            height="360"
            src={"https://player.bilibili.com/player.html?isOutside=true&bvid=" + id}
            loading="lazy"
        />
    );
}















