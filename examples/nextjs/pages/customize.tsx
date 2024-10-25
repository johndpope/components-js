'use client';

import {
  LiveKitRoom,
  ParticipantName,
  TrackMutedIndicator,
  RoomAudioRenderer,
  isTrackReference,
  useConnectionQualityIndicator,
  VideoTrack,
  ControlBar,
  GridLayout,
  useTracks,
  TrackRefContext,
} from '@livekit/components-react';
import { ConnectionQuality, Room, Track } from 'livekit-client';
import styles from '../styles/Simple.module.css';
import myStyles from '../styles/Customize.module.css';
import type { NextPage } from 'next';
import { HTMLAttributes, useState, useCallback, useEffect } from 'react';
import { generateRandomUserId } from '../lib/helper';

const CustomizeExample: NextPage = () => {
  const [room] = useState(() => new Room());
  const [token, setToken] = useState<string>();
  const [connect, setConnect] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string>();

  // Get room parameters once on mount
  const [roomParams] = useState(() => {
    if (typeof window === 'undefined') return { roomName: 'test-room', userIdentity: generateRandomUserId() };
    const params = new URLSearchParams(window.location.search);
    return {
      roomName: params.get('room') ?? 'test-room',
      userIdentity: params.get('user') ?? generateRandomUserId(),
    };
  });

  // Fetch token only when connect button is clicked
  const fetchToken = useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_LK_TOKEN_ENDPOINT}?` +
        `identity=${encodeURIComponent(roomParams.userIdentity)}&` +
        `name=${encodeURIComponent(roomParams.userIdentity)}&` +
        `roomName=${encodeURIComponent(roomParams.roomName)}`
      );

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || response.statusText);
      }

      const data = await response.json();
      if (!data.accessToken) {
        throw new Error('No access token received');
      }

      setToken(data.accessToken);
      setConnect(true);
      setError(undefined);
    } catch (e) {
      console.error('Error fetching token:', e);
      setError(e instanceof Error ? e.message : 'Failed to get access token');
      setConnect(false);
    }
  }, [roomParams]);

  const handleDisconnect = useCallback(() => {
    setConnect(false);
    setIsConnected(false);
    setToken(undefined);
    setError(undefined);
  }, []);

  const handleError = useCallback((err: Error) => {
    console.error('LiveKit error:', err);
    setError(err.message);
    handleDisconnect();
  }, [handleDisconnect]);

  return (
    <div className={styles.container} data-lk-theme="default">
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://livekit.io">LiveKit</a>
        </h1>

        {error && (
          <div style={{ color: 'red', margin: '1rem 0' }}>
            Error: {error}
          </div>
        )}

        {!isConnected && (
          <button 
            className="lk-button" 
            onClick={token ? () => setConnect(true) : fetchToken}
          >
            {connect ? 'Disconnect' : 'Connect'}
          </button>
        )}

        {token && (
          <LiveKitRoom
            room={room}
            token={token}
            serverUrl={process.env.NEXT_PUBLIC_LK_SERVER_URL}
            connect={connect}
            onConnected={() => setIsConnected(true)}
            onDisconnected={handleDisconnect}
            onError={handleError}
            audio={true}
            video={true}
          >
            <RoomAudioRenderer />
            {isConnected && <Stage />}
            <ControlBar />
          </LiveKitRoom>
        )}
      </main>
    </div>
  );
};

export function Stage() {
  const tracks = useTracks([
    { source: Track.Source.Camera, withPlaceholder: true },
    { source: Track.Source.ScreenShare, withPlaceholder: false },
  ]);
  return (
    <>
      <div className={styles.participantGrid}>
        <GridLayout tracks={tracks}>
          <TrackRefContext.Consumer>
            {(trackRef) =>
              trackRef && (
                <div className="my-tile">
                  {isTrackReference(trackRef) ? (
                    <VideoTrack trackRef={trackRef} />
                  ) : (
                    <p>Camera placeholder</p>
                  )}
                  <div className={myStyles['participant-indicators']}>
                    <div style={{ display: 'flex' }}>
                      <TrackMutedIndicator
                        trackRef={{
                          participant: trackRef.participant,
                          source: Track.Source.Microphone,
                        }}
                      />
                      <TrackMutedIndicator trackRef={trackRef} />
                    </div>
                    {/* Overwrite styles: By passing class names, we can easily overwrite/extend the existing styles. */}
                    {/* In addition, we can still specify a style attribute and further customize the styles. */}
                    <ParticipantName
                      className={myStyles['my-participant-name']}
                      // style={{ color: 'blue' }}
                    />
                    {/* Custom components: Here we replace the provided <ConnectionQualityIndicator />  with our own implementation. */}
                    <UserDefinedConnectionQualityIndicator />
                  </div>
                </div>
              )
            }
          </TrackRefContext.Consumer>
        </GridLayout>
      </div>
    </>
  );
}

export function UserDefinedConnectionQualityIndicator(props: HTMLAttributes<HTMLSpanElement>) {
  /**
   *  We use the same React hook that is used internally to build our own component.
   *  By using this hook, we inherit all the state management and logic and can focus on our implementation.
   */
  const { quality } = useConnectionQualityIndicator();

  function qualityToText(quality: ConnectionQuality): string {
    switch (quality) {
      case ConnectionQuality.Poor:
        return 'Poor';
      case ConnectionQuality.Good:
        return 'Good';
      case ConnectionQuality.Excellent:
        return 'Excellent';
      case ConnectionQuality.Lost:
        return 'Reconnecting';
      default:
        return 'No idea';
    }
  }

  return <span {...props}> {qualityToText(quality)} </span>;
}

export default CustomizeExample;
