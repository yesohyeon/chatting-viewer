import * as actions from "../../features/messages/actions";
import { ADD_MESSAGE } from "../../features/messages/types";

describe("Messages action", () => {
  it("Create an action which has information of created message", () => {
    const roomId = "1234abcd";

    const createdMessage = {
      id: "abcd1234",
      author: "Me",
      comment: "new comment",
      createdAt: "2022-08-29T14:48:00.000Z"
    };

    const expectedAction = {
      type: ADD_MESSAGE,
      payload: {
        roomId,
        messageInfo: createdMessage,
      },
    };

    const result = actions.addMessage(roomId, createdMessage);
    expect(result).toEqual(expectedAction);
  });
});
