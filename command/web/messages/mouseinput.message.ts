/// <reference path="outgoingMessage.ts" />

interface MouseInputMessageParameters {
    monitorId: MonitorId;
    button: MouseButton;
    state: InputState;
}

class MouseInputMessage extends OutgoingMessage<MouseInputMessageParameters> {

    constructor(params: MouseInputMessageParameters) {
        super(Control.MessageType.MOUSE_MOVE, params);
    }
}