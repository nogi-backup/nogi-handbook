import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import YouTubeCard from '@site/src/components/Highlights/youtubeCard';
import SpotifyCard from '@site/src/components/Highlights/spotifyCard';
import Call from '@site/src/components/Highlights/call';
import NickNameCall from '@site/src/components/Highlights/Call/nickName';
import SuperCuteCall from '@site/src/components/Highlights/Call/superCuteCall';

export default {
    ...MDXComponents,
    Call,
    YouTubeCard,
    SpotifyCard,
    NickNameCall,
    SuperCuteCall
};