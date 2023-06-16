<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@livekit/components-react](./components-react.md)

## components-react package

## Functions

|  Function | Description |
|  --- | --- |
|  [AudioConference({ ...props })](./components-react.audioconference.md) | This component is the default setup of a classic LiveKit audio conferencing app. It provides functionality like switching between participant grid view and focus view. |
|  [AudioTrack({ onSubscriptionStatusChanged, volume, ...props })](./components-react.audiotrack.md) | The AudioTrack component is responsible for rendering participant audio tracks. This component must have access to the participant's context, or alternatively pass it a <code>Participant</code> as a property. |
|  [AudioVisualizer({ participant, ...props })](./components-react.audiovisualizer.md) |  |
|  [CarouselView({ tracks, orientation, ...props })](./components-react.carouselview.md) | The <code>CarouselLayout</code> displays a list of tracks horizontally or vertically. Depending on the size of the container, the carousel will display as many tiles as possible and overflows the rest. The CarouselLayout uses the <code>useVisualStableUpdate</code> hook to ensure that tile reordering due to track updates is visually stable but still moves the important tiles (speaking participants) to the front. |
|  [Chat({ messageFormatter, ...props })](./components-react.chat.md) | The Chat component adds a basis chat functionality to the LiveKit room. The messages are distributed to all participants in the room. Only users who are in the room at the time of dispatch will receive the message. |
|  [ChatEntry({ entry, hideName, hideTimestamp, messageFormatter, ...props })](./components-react.chatentry.md) | The <code>ChatEntry</code> component holds and displays one chat message. |
|  [ChatToggle(props)](./components-react.chattoggle.md) | The ChatToggle component toggles the visibility of the chat component. |
|  [ClearPinButton(props)](./components-react.clearpinbutton.md) | The ClearPinButton is a basic html button with the added ability to signal the LiveKitRoom that it should display the grid view again. |
|  [ConnectionQualityIndicator(props)](./components-react.connectionqualityindicator.md) | The ConnectionQualityIndicator shows the individual connection quality of a participant. |
|  [ConnectionState({ room, ...props })](./components-react.connectionstate.md) | The ConnectionState component displays the connection status of the room in written form. |
|  [ConnectionStateToast(props)](./components-react.connectionstatetoast.md) |  |
|  [ControlBar({ variation, controls, ...props })](./components-react.controlbar.md) | The ControlBar prefab component gives the user the basic user interface to control their media devices and leave the room. |
|  [DisconnectButton(props)](./components-react.disconnectbutton.md) | The DisconnectButton is a basic html button with the added ability to disconnect from a LiveKit room. Normally, it is used by end-users to leave a video or audio call. |
|  [FocusLayout({ track, ...htmlProps })](./components-react.focuslayout.md) |  |
|  [FocusLayoutContainer(props)](./components-react.focuslayoutcontainer.md) |  |
|  [FocusToggle({ trackSource, participant, ...props })](./components-react.focustoggle.md) | The FocusToggle puts the ParticipantTile in focus or removes it from focus. |
|  [formatChatMessageLinks(message)](./components-react.formatchatmessagelinks.md) |  |
|  [GridLayout({ tracks, ...props })](./components-react.gridlayout.md) | The GridLayout component displays the nested participants in a grid where every participants has the same size. |
|  [LiveKitRoom(props)](./components-react.livekitroom.md) | The LiveKitRoom component provides the room context to all its child components. It is generally the starting point of your LiveKit app and the root of the LiveKit component tree. It provides the room state as a React context to all child components, so you don't have to pass it yourself. |
|  [MediaDeviceSelect({ kind, initialSelection, onActiveDeviceChange, onDeviceListChange, ...props })](./components-react.mediadeviceselect.md) | The MediaDeviceSelect list all media devices of one kind. Clicking on one of the listed devices make it the active media device. |
|  [ParticipantContextIfNeeded(props)](./components-react.participantcontextifneeded.md) |  |
|  [ParticipantName({ participant, ...props })](./components-react.participantname.md) | The ParticipantName component displays the name of the participant as a string within an HTML span element. If no participant name is undefined the participant identity string is displayed. |
|  [StartAudio({ label, ...props })](./components-react.startaudio.md) | The StartAudio component is only visible when the browser blocks audio playback. This is due to some browser implemented autoplay policies. To start audio playback, the user must perform a user-initiated event such as clicking this button. As soon as audio playback starts, the button hides itself again. |
|  [Toast(props)](./components-react.toast.md) |  |
|  [TrackToggle({ showIcon, ...props })](./components-react.tracktoggle.md) | With the TrackToggle component it is possible to mute and unmute your camera and microphone. The component uses an html button element under the hood so you can treat it like a button. |
|  [useChat()](./components-react.usechat.md) |  |
|  [useClearPinButton(props)](./components-react.useclearpinbutton.md) |  |
|  [useConnectionQualityIndicator(options)](./components-react.useconnectionqualityindicator.md) |  |
|  [useConnectionState(room)](./components-react.useconnectionstate.md) | The <code>useConnectionState</code> hook allows you to simply implement your own <code>ConnectionState</code> component. |
|  [useCreateLayoutContext()](./components-react.usecreatelayoutcontext.md) |  |
|  [useDataChannel(topic, onMessage)](./components-react.usedatachannel.md) |  |
|  [useDisconnectButton(props)](./components-react.usedisconnectbutton.md) |  |
|  [useEnsureCreateLayoutContext(layoutContext)](./components-react.useensurecreatelayoutcontext.md) |  |
|  [useEnsureLayoutContext(layoutContext)](./components-react.useensurelayoutcontext.md) | Ensures that a layout context is provided, either via context or explicitly as a parameter. If not inside a <code>LayoutContext</code> and no layout context is provided, an error is thrown. |
|  [useEnsureParticipant(participant)](./components-react.useensureparticipant.md) | Ensures that a participant is provided, either via context or explicitly as a parameter. If not inside a <code>ParticipantContext</code> and no participant is provided, an error is thrown. |
|  [useEnsureRoom(room)](./components-react.useensureroom.md) | Ensures that a room is provided, either via context or explicitly as a parameter. If no room is provided, an error is thrown. |
|  [useEnsureTrackReference(track)](./components-react.useensuretrackreference.md) | Ensures that a track reference is provided, either via context or explicitly as a parameter. If not inside a <code>TrackContext</code> and no track reference is provided, an error is thrown. |
|  [useGridLayout(gridElement, trackCount)](./components-react.usegridlayout.md) | The useGridLayout hook tries to select the best layout to fit all tiles. If the available screen space is not enough, it will reduce the number of maximum visible tiles and select a layout that still works visually within the given limitations. As the order of tiles changes over time, the hook tries to keep visual updates to a minimum while trying to display important tiles such as speaking participants or screen shares. |
|  [useIsMuted(source, options)](./components-react.useismuted.md) |  |
|  [useIsSpeaking(participant)](./components-react.useisspeaking.md) |  |
|  [useLayoutContext()](./components-react.uselayoutcontext.md) | Ensures that a layout context is provided via context. If no layout context is provided, an error is thrown. |
|  [useLiveKitRoom(props)](./components-react.uselivekitroom.md) |  |
|  [useLocalParticipantPermissions()](./components-react.uselocalparticipantpermissions.md) |  |
|  [useMaybeLayoutContext()](./components-react.usemaybelayoutcontext.md) | Returns a layout context from the <code>LayoutContext</code> if it exists, otherwise <code>undefined</code>. |
|  [useMaybeParticipantContext()](./components-react.usemaybeparticipantcontext.md) | Returns a participant from the <code>ParticipantContext</code> if it exists, otherwise <code>undefined</code>. |
|  [useMaybeRoomContext()](./components-react.usemayberoomcontext.md) | Returns the room context if it exists, otherwise undefined. |
|  [useMaybeTrackContext()](./components-react.usemaybetrackcontext.md) | Returns a track reference from the <code>TrackContext</code> if it exists, otherwise <code>undefined</code>. |
|  [useMediaDevices({ kind })](./components-react.usemediadevices.md) |  |
|  [useMediaDeviceSelect({ kind, room })](./components-react.usemediadeviceselect.md) |  |
|  [useMediaTrack(source, participant, options)](./components-react.usemediatrack.md) |  |
|  [useMediaTrackByName(name, participant, options)](./components-react.usemediatrackbyname.md) |  |
|  [useParticipantContext()](./components-react.useparticipantcontext.md) | Ensures that a participant is provided via context. If not inside a <code>ParticipantContext</code>, an error is thrown. |
|  [useParticipantInfo(props)](./components-react.useparticipantinfo.md) |  |
|  [useParticipantPermissions(options)](./components-react.useparticipantpermissions.md) |  |
|  [useParticipantTile({ participant, source, publication, onParticipantClick, disableSpeakingIndicator, htmlProps, })](./components-react.useparticipanttile.md) |  |
|  [usePinnedTracks(layoutContext)](./components-react.usepinnedtracks.md) |  |
|  [usePreviewDevice(enabled, deviceId, kind)](./components-react.usepreviewdevice.md) |  |
|  [useRoomContext()](./components-react.useroomcontext.md) | Ensures that a room is provided via context. If no room is provided, an error is thrown. |
|  [useRoomInfo(options)](./components-react.useroominfo.md) |  |
|  [useSortedParticipants(participants)](./components-react.usesortedparticipants.md) | The useSortedParticipants hook returns the only the active speakers of all participants. |
|  [useToken(tokenEndpoint, roomName, options)](./components-react.usetoken.md) |  |
|  [useTrackContext()](./components-react.usetrackcontext.md) | Ensures that a track reference is provided via context. If not inside a <code>TrackContext</code>, an error is thrown. |
|  [useTracks(sources, options)](./components-react.usetracks.md) | The <code>useTracks</code> hook returns an array of <code>TrackReference</code> or <code>TrackReferenceOrPlaceholder</code> depending on the provided <code>sources</code> property. If only subscribed tracks are desired, set the <code>onlySubscribed</code> property to <code>true</code>. |
|  [useTrackToggle({ source, onChange, initialState, captureOptions, ...rest })](./components-react.usetracktoggle.md) |  |
|  [useVisualStableUpdate(trackReferences, maxItemsOnPage, options)](./components-react.usevisualstableupdate.md) | <p>**_(BETA)_** The useVisualStableUpdate hook tries to keep visual updates of the TackBundles array to a minimum, while still trying to display important tiles such as speaking participants or screen shares.</p><p>Updating works with pagination. For example, if a participant starts speaking on the second page, they will be moved to the first page by replacing the least active/interesting participant on the first page.</p> |
|  [VideoConference({ chatMessageFormatter, ...props })](./components-react.videoconference.md) | This component is the default setup of a classic LiveKit video conferencing app. It provides functionality like switching between participant grid view and focus view. |
|  [VideoTrack({ onTrackClick, onClick, onSubscriptionStatusChanged, name, publication, source, ...props })](./components-react.videotrack.md) | The VideoTrack component is responsible for rendering participant video tracks like <code>camera</code> and <code>screen_share</code>. This component must have access to the participant's context, or alternatively pass it a <code>Participant</code> as a property. |

## Interfaces

|  Interface | Description |
|  --- | --- |
|  [AllowAudioPlaybackProps](./components-react.allowaudioplaybackprops.md) |  |
|  [AudioVisualizerProps](./components-react.audiovisualizerprops.md) |  |
|  [CarouselViewProps](./components-react.carouselviewprops.md) |  |
|  [ChatEntryProps](./components-react.chatentryprops.md) | ChatEntry composes the HTML div element under the hood, so you can pass all its props. These are the props specific to the ChatEntry component: |
|  [ChatProps](./components-react.chatprops.md) |  |
|  [ConnectionQualityIndicatorOptions](./components-react.connectionqualityindicatoroptions.md) |  |
|  [ConnectionStateToastProps](./components-react.connectionstatetoastprops.md) |  |
|  [ConnectionStatusProps](./components-react.connectionstatusprops.md) |  |
|  [FocusLayoutContainerProps](./components-react.focuslayoutcontainerprops.md) |  |
|  [FocusLayoutProps](./components-react.focuslayoutprops.md) |  |
|  [FocusToggleProps](./components-react.focustoggleprops.md) |  |
|  [GridLayoutProps](./components-react.gridlayoutprops.md) |  |
|  [LiveKitRoomProps](./components-react.livekitroomprops.md) |  |
|  [MediaDeviceMenuProps](./components-react.mediadevicemenuprops.md) |  |
|  [MediaDeviceSelectProps](./components-react.mediadeviceselectprops.md) |  |
|  [RoomNameProps](./components-react.roomnameprops.md) |  |
|  [TrackMutedIndicatorProps](./components-react.trackmutedindicatorprops.md) |  |
|  [UseIsMutedOptions](./components-react.useismutedoptions.md) |  |
|  [UseLocalParticipantOptions](./components-react.uselocalparticipantoptions.md) |  |
|  [UseMediaDeviceSelectProps](./components-react.usemediadeviceselectprops.md) |  |
|  [UseMediaTrackOptions](./components-react.usemediatrackoptions.md) |  |
|  [UseParticipantPermissionsOptions](./components-react.useparticipantpermissionsoptions.md) |  |
|  [UseParticipantsOptions](./components-react.useparticipantsoptions.md) |  |
|  [UseRemoteParticipantOptions](./components-react.useremoteparticipantoptions.md) |  |
|  [UseRemoteParticipantsOptions](./components-react.useremoteparticipantsoptions.md) |  |
|  [UserInfo](./components-react.userinfo.md) |  |
|  [UseRoomInfoOptions](./components-react.useroominfooptions.md) |  |
|  [UseTokenOptions](./components-react.usetokenoptions.md) |  |
|  [UseTrackMutedIndicatorOptions](./components-react.usetrackmutedindicatoroptions.md) |  |
|  [UseVisualStableUpdateOptions](./components-react.usevisualstableupdateoptions.md) |  |
|  [VideoConferenceProps](./components-react.videoconferenceprops.md) |  |

## Variables

|  Variable | Description |
|  --- | --- |
|  [LayoutContext](./components-react.layoutcontext.md) |  |
|  [MediaDeviceMenu](./components-react.mediadevicemenu.md) | The MediaDeviceMenu prefab component is a button that opens a menu that lists all media devices and allows the user to select them. |
|  [ParticipantAudioTile](./components-react.participantaudiotile.md) | The ParticipantAudioTile component is the base utility wrapper for displaying a visual representation of a participant. This component can be used as a child of the <code>TileLoop</code> or independently if a participant is passed as a property. |
|  [ParticipantContext](./components-react.participantcontext.md) |  |
|  [ParticipantLoop](./components-react.participantloop.md) | The ParticipantLoop component loops over an array of participants to create a context for every participant. This component takes exactly one child component as a template. By providing your own template as a child you have full control over the look and feel of your participant representations. |
|  [ParticipantTile](./components-react.participanttile.md) | The ParticipantTile component is the base utility wrapper for displaying a visual representation of a participant. This component can be used as a child of the <code>TrackLoop</code> component or by spreading a track reference as properties. |
|  [PreJoin](./components-react.prejoin.md) | The PreJoin prefab component is normally presented to the user before he enters a room. This component allows the user to check and select the preferred media device (camera und microphone). On submit the user decisions are returned, which can then be passed on to the LiveKitRoom so that the user enters the room with the correct media devices. |
|  [RoomAudioRenderer](./components-react.roomaudiorenderer.md) | The RoomAudioRenderer component is a drop-in solution for adding audio to your LiveKit app. It takes care of handling remote participants’ audio tracks and makes sure that microphones and screen share are audible. |
|  [RoomContext](./components-react.roomcontext.md) |  |
|  [RoomName](./components-react.roomname.md) | The RoomName component renders the name of the connected LiveKit room inside a span tag. |
|  [TrackContext](./components-react.trackcontext.md) |  |
|  [TrackLoop](./components-react.trackloop.md) | The TrackLoop component loops over tracks. It is for example a easy way to loop over all participant camera and screen share tracks. TrackLoop creates a TrackContext for each track that you can use to e.g. render the track. |
|  [TrackMutedIndicator](./components-react.trackmutedindicator.md) | The TrackMutedIndicator shows whether the participant's camera or microphone is muted or not. |
|  [useLocalParticipant](./components-react.uselocalparticipant.md) | The useLocalParticipant hook the state of the local participant. |
|  [useParticipants](./components-react.useparticipants.md) | The useParticipants hook returns all participants (local and remote) of the current room. |
|  [useRemoteParticipant](./components-react.useremoteparticipant.md) |  |
|  [useRemoteParticipants](./components-react.useremoteparticipants.md) | The useRemoteParticipants |
|  [useSpeakingParticipants](./components-react.usespeakingparticipants.md) | The useSpeakingParticipants hook returns the only the active speakers of all participants. |
|  [useTrackMutedIndicator](./components-react.usetrackmutedindicator.md) |  |

## Type Aliases

|  Type Alias | Description |
|  --- | --- |
|  [AudioConferenceProps](./components-react.audioconferenceprops.md) |  |
|  [AudioTrackProps](./components-react.audiotrackprops.md) |  |
|  [ChatToggleProps](./components-react.chattoggleprops.md) |  |
|  [ClearPinButtonProps](./components-react.clearpinbuttonprops.md) |  |
|  [ConnectionQualityIndicatorProps](./components-react.connectionqualityindicatorprops.md) |  |
|  [ControlBarControls](./components-react.controlbarcontrols.md) |  |
|  [ControlBarProps](./components-react.controlbarprops.md) |  |
|  [DisconnectButtonProps](./components-react.disconnectbuttonprops.md) |  |
|  [LayoutContextType](./components-react.layoutcontexttype.md) |  |
|  [LocalUserChoices](./components-react.localuserchoices.md) |  |
|  [MessageFormatter](./components-react.messageformatter.md) |  |
|  [ParticipantLoopProps](./components-react.participantloopprops.md) |  |
|  [ParticipantNameProps](./components-react.participantnameprops.md) |  |
|  [ParticipantTileProps](./components-react.participanttileprops.md) |  |
|  [PreJoinProps](./components-react.prejoinprops.md) |  |
|  [TrackLoopProps](./components-react.trackloopprops.md) |  |
|  [TrackToggleProps](./components-react.tracktoggleprops.md) |  |
|  [UseParticipantInfoOptions](./components-react.useparticipantinfooptions.md) |  |
|  [UseParticipantTileProps](./components-react.useparticipanttileprops.md) |  |
|  [UseTracksHookReturnType](./components-react.usetrackshookreturntype.md) |  |
|  [UseTracksOptions](./components-react.usetracksoptions.md) |  |
|  [UseTrackToggleProps](./components-react.usetracktoggleprops.md) |  |
|  [VideoTrackProps](./components-react.videotrackprops.md) |  |
