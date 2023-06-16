<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@livekit/components-react](./components-react.md) &gt; [useChat](./components-react.usechat.md)

## useChat() function


**Signature:**

```typescript
export declare function useChat(): {
    send: ((message: string) => Promise<void>) | undefined;
    chatMessages: ReceivedChatMessage[];
    isSending: boolean;
};
```
**Returns:**

{ send: ((message: string) =&gt; Promise&lt;void&gt;) \| undefined; chatMessages: ReceivedChatMessage\[\]; isSending: boolean; }
