import { screen, fireEvent } from "@testing-library/react";
import { useLocation } from "react-router-dom";

import Header from "../../components/Header/Header";

import renderWithProviders from "../utils/renderWithProviders";

const handleClick = jest.fn();

const PathLocation = () => {
  const location = useLocation();

  return <div>{location.pathname}</div>;
};

describe("<Header />", () => {

  it("Header component show two links", () => {
    renderWithProviders(<Header handleClick={handleClick} />);

    const icons = screen.getAllByRole("link");
    expect(icons.length).toBe(2);
  });

  it("Move to friends list", () => {
    renderWithProviders(<><Header handleClick={handleClick} /><PathLocation /></>);

    const icons = screen.getAllByRole("link");
    fireEvent.click(icons[0]);

    expect(screen.getByText("/friends")).toBeInTheDocument();
  });

  it("Move to chatroom list", () => {
    renderWithProviders(<><Header handleClick={handleClick} /><PathLocation /></>);

    const icons = screen.getAllByRole("link");
    fireEvent.click(icons[1]);

    expect(screen.getByText("/rooms")).toBeInTheDocument();
  });
});
