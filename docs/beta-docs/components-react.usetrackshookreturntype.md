<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@livekit/components-react](./components-react.md) &gt; [UseTracksHookReturnType](./components-react.usetrackshookreturntype.md)

## UseTracksHookReturnType type


**Signature:**

```typescript
export type UseTracksHookReturnType<T> = T extends Track.Source[] ? TrackReference[] : T extends TrackSourceWithOptions[] ? TrackReferenceOrPlaceholder[] : never;
```