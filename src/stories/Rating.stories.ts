import type { Meta, StoryObj } from "@storybook/react";

import { Rating } from "../components/CasinoWidget/CasinoBody/Rating/Rating";

const meta = {
  title: "Example/Rating",
  component: Rating,
  tags: ["autodocs"],
  argTypes: {
    rating: {
      control: "radio",
      options: [1, 2, 3, 4, 5],
    },
  },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rating: 3,
  },
};
