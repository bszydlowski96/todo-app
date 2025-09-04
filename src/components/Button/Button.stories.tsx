import type { Meta, StoryObj } from "@storybook/react";
import { Button, type ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
    variant: "secondary",
  },
};

export const Danger: Story = {
  args: {
    label: "Danger Button",
    variant: "danger",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Button",
    disabled: true,
  },
};

export const Sizes: Story = {
  args: {
    label: "Large Button",
    variant: "primary",
    size: "lg",
  },
};
// test focus-visible (Tab)
export const FocusVisible: Story = {
  args: {
    label: "Focus Visible",
    variant: "primary",
  },
  play: async ({ canvasElement }) => {
    const button = canvasElement.querySelector("button")!;
    button.focus();
    // oczekujemy, że focus jest ustawiony
    console.log("Focus ring visible?", document.activeElement === button);
  },
};

// test disabled
export const DisabledAction: Story = {
  args: {
    label: "Disabled Test",
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const button = canvasElement.querySelector("button")!;
    button.click();
    // klik nie powinien wywołać akcji
    console.log("Disabled clicked (should not fire onClick)");
  },
};
