import messagesReducer from "../../features/messages";
import { initialState } from "../../features/messages/reducers";
import { ADD_MESSAGE, ENTER_ROOM, EXIT_ROOM } from "../../features/messages/types";

import { getKoreanDateAndTime } from "../../utils/getDateAndTime";

describe("MessagesReducer", () => {
  it("Return the initial state", () => {
    expect(messagesReducer(undefined, {})).toEqual(initialState);
  });

  it("Handle ADD_MESSAGE", () => {
    const roomId = "a";
    const messageInfo = {
      id: "efgh5678",
      author: "Me",
      comment: "new comment",
      createdAt: getKoreanDateAndTime(),
    };

    const newState = {...initialState};
    const commentsArray = newState.friends.byId[roomId].comments;

    commentsArray.push(messageInfo.id);
    newState.comments.byId[messageInfo.id] = messageInfo;
    newState.comments.allIds.push(messageInfo.id);

    expect(messagesReducer(
      undefined, { type: ADD_MESSAGE, payload: { roomId, messageInfo } }
    )).toEqual(newState);
  });

  it("Handle ENTER_ROOM", () => {
    const roomId = "c";

    const newState = {...initialState};
    newState.selectedRoomId = roomId;

    expect(messagesReducer(
      undefined, { type: ENTER_ROOM, payload: roomId }
    )).toEqual(newState);
  });

  it("Handle EXIT_ROOM", () => {
    const newState = {...initialState};
    newState.selectedRoomId = "";

    expect(messagesReducer(undefined, { type: EXIT_ROOM })).toEqual(newState);
  });
});
