import { screen } from "@testing-library/react";

import ChatroomItem from "../../components/Rooms/ChatroomItem";
import renderWithProviders from "../utils/renderWithProviders";

describe("<ChatroomItem />", () => {
  it("ChatroomItem component should show correct contents which are consistent with props", () => {
    const id = "friendId";
    const profile = "./images/profile/happy.png";
    const name = "friend name";
    const lastMessage = "last message";
    const createdAt = "2022-08-20T09:48:00.000Z"
    const handleClick = jest.fn();

    renderWithProviders(
      <ChatroomItem
        id={id}
        profile={profile}
        name={name}
        lastMessage={lastMessage}
        createdAt={createdAt}
        handleClick={handleClick}
      />
    );

    expect(screen.getByRole("img")).toHaveAttribute("src", profile);
    expect(screen.getByText("friend name")).toBeInTheDocument();
    expect(screen.getByText("last message")).toBeInTheDocument();
    expect(screen.getByText("2022-08-20 09:48")).toBeInTheDocument();
  });
});
