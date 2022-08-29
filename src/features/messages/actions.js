import { ADD_MESSAGE } from "./types";

export function addMessage(roomId, messageInfo) {
  return { type: ADD_MESSAGE, payload: { roomId, messageInfo } };
}
