<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@livekit/components-react](./components-react.md) &gt; [UseParticipantsOptions](./components-react.useparticipantsoptions.md)

## UseParticipantsOptions interface


**Signature:**

```typescript
export interface UseParticipantsOptions 
```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [room?](./components-react.useparticipantsoptions.room.md) |  | Room | _(Optional)_ The room to use. If not provided, the hook will use the room from the context. |
|  [updateOnlyOn?](./components-react.useparticipantsoptions.updateonlyon.md) |  | RoomEvent\[\] | _(Optional)_ To optimize performance, you can use the <code>updateOnlyOn</code> property to decide on what RoomEvents the hook updates. By default it updates on all relevant RoomEvents to keep the returned participants array up to date. The minimal set of non-overwriteable <code>RoomEvents</code> is: <code>[RoomEvent.ParticipantConnected, RoomEvent.ParticipantDisconnected, RoomEvent.ConnectionStateChanged]</code> |
