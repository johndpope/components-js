<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@livekit/components-react](./components-react.md) &gt; [useMediaTrackByName](./components-react.usemediatrackbyname.md)

## useMediaTrackByName() function


**Signature:**

```typescript
export declare function useMediaTrackByName(name: string, participant?: Participant, options?: UseMediaTrackOptions): {
    publication: import("livekit-client").TrackPublication | undefined;
    isMuted: boolean | undefined;
    isSubscribed: boolean | undefined;
    track: import("livekit-client").Track | undefined;
    elementProps: import("react").HTMLAttributes<HTMLElement>;
};
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  name | string |  |
|  participant | Participant | _(Optional)_ |
|  options | [UseMediaTrackOptions](./components-react.usemediatrackoptions.md) | _(Optional)_ |

**Returns:**

{ publication: import("livekit-client").TrackPublication \| undefined; isMuted: boolean \| undefined; isSubscribed: boolean \| undefined; track: import("livekit-client").Track \| undefined; elementProps: import("react").HTMLAttributes&lt;HTMLElement&gt;; }
