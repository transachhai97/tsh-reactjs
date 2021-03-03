import React from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends React.PureComponent {
    componentDidMount() {
        // Create object avPlayer
        const avObj = document.createElement('object');
        avObj.type = 'application/avplayer';
        avObj.style.cssText = 'width: 100vw; height: 100vh';
        this.avPlayer.appendChild(avObj);

        const listener = this.listener();

        window.webapis.avplay.setListener(listener);
        console.log(window.webapis);

        /**
             * Open src
             */
        const { src } = this.props;
        window.webapis.avplay.open(src);
        window.webapis.avplay.setDisplayRect(
            0,
            0,
            parseInt(window.innerWidth, 10),
            parseInt(window.innerHeight, 10),
        );

        window.webapis.avplay.setBufferingParam('PLAYER_BUFFER_FOR_PLAY', 'PLAYER_BUFFER_SIZE_IN_SECOND', 6);
        window.webapis.avplay.prepareAsync(
            () => {
                window.webapis.avplay.play();
            },
            (e) => {
                console.log(e);
            },
        );
    }

    componentWillUnmount() {
        try {
            window.webapis.avplay.stop();
            window.webapis.avplay.close();
        } catch (e) {
            console.log(e);
        }
    }

    listener() {
        const listener = {
            onbufferingstart: function onbufferingstart() {
            },
            onbufferingprogress: function onbufferingprogress(percent) {
                console.log(percent);
            },
            onbufferingcomplete: function onbufferingcomplete() {
            },
            oncurrentplaytime: function oncurrentplaytime(currentPlayTime) {
                console.log(currentPlayTime);
            },
            onevent: function onevent(eventType, eventData) {
                console.log(eventType, eventData);
            },
            onstreamcompleted: function onstreamcompleted() {

            },
            onerror: function onerror(eventType) {
                console.log(eventType);
            },
            onsubtitlechange: function onsubtitlechange(duration, text) {
                console.log(duration, text);
            },
        };

        return listener;
    }

    render() {
        const { src } = this.props;
        console.log(src);
        // eslint-disable-next-line no-return-assign
        return <div ref={(avPlayer) => (this.avPlayer = avPlayer)} />;
    }
}

VideoPlayer.propTypes = {
    src: PropTypes.string,
};

VideoPlayer.defaultProps = {
    src: 'https://d2zihajmogu5jn.cloudfront.net/big-buck-bunny/master.m3u8',
};

export default VideoPlayer;
