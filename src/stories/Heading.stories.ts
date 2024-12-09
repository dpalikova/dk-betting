import type { Meta, StoryObj } from "@storybook/react";

import { Heading } from "../components/CasinoWidget/CasinoBody/Heading/Heading";

const meta = {
  title: "Example/Heading",
  component: Heading,
  tags: ["autodocs"],
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Underlined: Story = {
  args: {
    name: "Heading",
    underlined: true,
  },
};

export const Small: Story = {
  args: {
    name: "Heading",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    name: "Heading",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    name: "Heading",
    size: "large",
  },
};

export const Light: Story = {
  args: {
    name: "Heading",
    weight: "light",
  },
};

export const Heavy: Story = {
  args: {
    name: "Heading",
    weight: "heavy",
  },
};
