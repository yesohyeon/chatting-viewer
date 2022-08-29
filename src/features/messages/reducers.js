import { ADD_MESSAGE } from "./types";

import { profileImages } from "../../assets/images";

export const initialState = {
  friends: {
    byId: {
      "a": {
        id: "a",
        name: "Ye",
        profile: profileImages.cool,
        comments : [],
      },
      "b": {
        id: "b",
        name: "So",
        profile: profileImages.thinking,
        comments : ["cccc"],
      },
      "c": {
        id: "c",
        name: "Hyeon",
        profile: profileImages.smile,
        comments : ["eeee", "ffff"],
      }
    },
    allIds: ["a", "b", "c"],
  },
  comments: {
    byId: {
      "cccc": {
        id: "cccc",
        author: "So",
        comment: "I'm So",
        createdAt: "2022-08-27T09:48:00.000Z",
      },
      "eeee": {
        id: "eeee",
        author: "Hyeon",
        comment: "I'm Hyeon",
        createdAt: "2022-08-26T09:48:00.000Z",
      },
      "ffff": {
        id: "ffff",
        author: "Me",
        comment: "I'm Me",
        createdAt: "2022-08-29T09:48:00.000Z",
      }
    },
    allIds: ["cccc", "eeee", "ffff"],
  },
};

export default function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      const newState = {...state};
      const commentsArray = newState.friends.byId[action.payload.roomId].comments;

      commentsArray.push(action.payload.messageInfo.id);
      newState.comments.byId[action.payload.messageInfo.id] = action.payload.messageInfo;
      newState.comments.allIds.push(action.payload.messageInfo.id);

      return newState;
    default:
      return {...state};
  }
}
