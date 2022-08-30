import { ADD_MESSAGE, ENTER_ROOM, EXIT_ROOM } from "./types";

export function addMessage(roomId, messageInfo) {
  return { type: ADD_MESSAGE, payload: { roomId, messageInfo } };
}

export function enterRoom(roomId) {
  return { type: ENTER_ROOM, payload: roomId };
}

export function exitRoom() {
  return { type: EXIT_ROOM };
}
