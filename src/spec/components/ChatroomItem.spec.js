import { screen, fireEvent } from "@testing-library/react";
import { useLocation } from "react-router-dom";

import ChatroomItem from "../../components/Rooms/ChatroomItem";
import renderWithProviders from "../utils/renderWithProviders";

const PathLocation = () => {
  const location = useLocation();

  return <div>{location.pathname}</div>;
};

describe("<ChatroomItem />", () => {
  it("ChatroomItem component should show correct contents which are consistent with props", () => {
    const id = "friendId";
    const profile = "./images/profile/happy.png";
    const name = "friend name";
    const lastMessage = "last message";
    const createdAt = "2022-08-20T09:48:00.000Z"

    renderWithProviders(
      <>
        <ChatroomItem
          id={id}
          profile={profile}
          name={name}
          lastMessage={lastMessage}
          createdAt={createdAt}
        />
        <PathLocation />
      </>
    );

    expect(screen.getByRole("img")).toHaveAttribute("src", profile);
    expect(screen.getByText("friend name")).toBeInTheDocument();
    expect(screen.getByText("last message")).toBeInTheDocument();
    expect(screen.getByText("2022-08-20 09:48")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("img"));

    expect(screen.getByText(`/rooms/${id}`)).toBeInTheDocument();
  });
});
