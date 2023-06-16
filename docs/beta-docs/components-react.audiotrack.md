<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@livekit/components-react](./components-react.md) &gt; [AudioTrack](./components-react.audiotrack.md)

## AudioTrack() function

The AudioTrack component is responsible for rendering participant audio tracks. This component must have access to the participant's context, or alternatively pass it a `Participant` as a property.

**Signature:**

```typescript
export declare function AudioTrack({ onSubscriptionStatusChanged, volume, ...props }: AudioTrackProps): React.JSX.Element;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  { onSubscriptionStatusChanged, volume, ...props } | [AudioTrackProps](./components-react.audiotrackprops.md) |  |

**Returns:**

React.JSX.Element

## Example


```tsx
  <ParticipantTile>
    <AudioTrack source={Track.Source.Microphone} />
  </ParticipantTile>
```
