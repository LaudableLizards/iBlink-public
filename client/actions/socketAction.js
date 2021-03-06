import ActionType from './actionType';

export function CreateRoom( channel ) {
  return {
    type: ActionType.CreateRoom,
    channel
  }
}

export function SendStatus() {
  return {
    type: ActionType.SendStatus
  }
}

export function ReceiveStatus() {
  return {
    type: ActionType.ReceiveStatus
  }
}

export function sendURL( url ) {
  return {
    type: ActionType.SendURL,
    url
  };
}

export function updateURL( url ) {
  return {
    type: ActionType.UpdateURL,
    url
  };
}

export function receiveURL( url ) {
  return {
    type: ActionType.ReceiveURL,
    url
  };
}
