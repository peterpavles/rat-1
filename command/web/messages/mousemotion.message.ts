/// <reference path="outgoingMessage.ts" />

interface MouseMotionMessageParameters {
    monitorId: MonitorId;
    x, y: number;
}

class MouseMotionMessage extends OutgoingMessage<MouseMotionMessageParameters> {

    constructor(params: MouseMotionMessageParameters) {
        super(Control.MessageType.MOUSE_MOVE, params);
    }
}