import React from 'react';
import VideoPlayer from '@/components/VideoPlayer';

function Home() {
    return (
        <VideoPlayer src="https://d2zihajmogu5jn.cloudfront.net/big-buck-bunny/master.m3u8" />
    );
}

export default Home;
