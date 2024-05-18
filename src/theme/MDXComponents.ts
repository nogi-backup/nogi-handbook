import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import YouTubeCard from '@site/src/components/Highlights/youtubeCard';
import SpotifyCard from '@site/src/components/Highlights/spotifyCard';
import BilibiliCard from '@site/src/components/Highlights/bilibiliCard';
import Call from '@site/src/components/Highlights/Call/call';
import NickName from '@site/src/components/Highlights/Call/nickName';
import SuperCute from '@site/src/components/Highlights/Call/superCute';
import Hey from '@site/src/components/Highlights/Call/hey';
import OrHey from '@site/src/components/Highlights/Call/orHey';
import OrReMo from '@site/src/components/Highlights/Call/orReMo';
import Wow from '@site/src/components/Highlights/Call/wow';

export default {
    ...MDXComponents,
    Call,
    BilibiliCard,
    SpotifyCard,
    YouTubeCard,
    NickName,
    SuperCute,
    Wow,
    Hey,
    OrHey,
    OrReMo
};