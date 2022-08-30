import { screen, fireEvent, waitFor } from "@testing-library/react";

import Chatroom from "../../components/Rooms/Chatroom";

import renderWithProviders from "../utils/renderWithProviders";
import { ENTER_MESSAGE } from "../../constants/ui";

describe("<Chatroom />", () => {
  it("Show message when message is sent", async () => {
    const id = "a";

    renderWithProviders(<Chatroom  id={id} />);

    const messageInput = screen.getByPlaceholderText(ENTER_MESSAGE);
    const sendButton = screen.getByTestId("send");

    fireEvent.change(messageInput, { target: { value: "Hello" } });
    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(screen.getByText("Me : Hello")).toBeInTheDocument();
    });
  });
});
