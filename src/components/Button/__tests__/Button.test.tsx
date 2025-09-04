import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "../Button";

describe("Button", () => {
  it("renderuje label i wywołuje onClick, gdy nie jest disabled", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<Button label="Primary" onClick={onClick} />);
    const btn = screen.getByRole("button", { name: "Primary" });

    await user.click(btn);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(btn).toHaveAttribute("type", "button");
    expect(btn).toHaveAttribute("data-variant", "primary");
    expect(btn).toHaveAttribute("data-size", "md");
  });

  it("ustawia disabled + aria-disabled i NIE klika", async () => {
    const user = userEvent.setup({ pointerEventsCheck: 0 });
    const onClick = vi.fn();

    render(<Button label="Disabled" disabled onClick={onClick} />);
    const btn = screen.getByRole("button", { name: "Disabled" });

    expect(btn).toBeDisabled();
    expect(btn).toHaveAttribute("aria-disabled", "true");

    await user.click(btn);
    expect(onClick).not.toHaveBeenCalled();

    fireEvent.click(btn);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("Tab fokus przechodzi przez aktywne i pomija disabled", async () => {
    const user = userEvent.setup();

    render(
      <>
        <Button label="A" />
        <Button label="B" disabled />
        <Button label="C" />
      </>
    );

    await user.tab();
    expect(screen.getByRole("button", { name: "A" })).toHaveFocus();

    await user.tab();
    expect(screen.getByRole("button", { name: "C" })).toHaveFocus();
  });

  it("renderuje poprawne data-attributes dla wariantów i rozmiarów", () => {
    render(
      <>
        <Button label="P" variant="primary" />
        <Button label="S" variant="secondary" />
        <Button label="D" variant="danger" />
        <Button label="Small" size="sm" />
        <Button label="Medium" size="md" />
        <Button label="Large" size="lg" />
      </>
    );

    expect(screen.getByRole("button", { name: "P" })).toHaveAttribute(
      "data-variant",
      "primary"
    );
    expect(screen.getByRole("button", { name: "S" })).toHaveAttribute(
      "data-variant",
      "secondary"
    );
    expect(screen.getByRole("button", { name: "D" })).toHaveAttribute(
      "data-variant",
      "danger"
    );

    expect(screen.getByRole("button", { name: "Small" })).toHaveAttribute(
      "data-size",
      "sm"
    );
    expect(screen.getByRole("button", { name: "Medium" })).toHaveAttribute(
      "data-size",
      "md"
    );
    expect(screen.getByRole("button", { name: "Large" })).toHaveAttribute(
      "data-size",
      "lg"
    );
  });
});
