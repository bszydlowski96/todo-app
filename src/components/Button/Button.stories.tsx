import type { Meta, StoryObj } from "@storybook/react";
import { Button, type ButtonProps } from "./Button";

// 👇 konfiguracja meta dla Storybooka
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
    onClick: { action: "clicked" }, // addon Actions
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

// 👇 pojedyncze historie
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
