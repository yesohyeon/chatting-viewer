import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "../../app/configureStore";

export default function renderWithProviders(children) {
  render(<Provider store={store}>{children}</Provider>, { wrapper: BrowserRouter });
}
