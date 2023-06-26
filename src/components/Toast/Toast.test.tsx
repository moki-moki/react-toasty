import React from "react";
import { render } from "@testing-library/react";

import Toast from "./Toast";

describe("Toast modal", () => {
  test("renders the toast on load", () => {
    render(<Toast />);
  });

  it("should render close button", async () => {
    const renderToast = render(<Toast />);

    await renderToast.findByRole("button");
  });
});
