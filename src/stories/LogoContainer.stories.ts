import type { Meta, StoryObj } from "@storybook/react";

import { LogoContainer } from "../components/LogoContainer/LogoContainer";

const meta = {
  title: "Example/Logo",
  component: LogoContainer,
  tags: ["autodocs"],
  argTypes: {
    logoUrl: {
      control: "radio",
      options: [
        "/img/Logo_Grosvenor.png",
        "/img/Logo_Happy Spins.png",
        "/img/Logo_Hajper.png",
      ],
    },
    fill: {
      control: "radio",
      options: ["#03252B", "#43082F", "#123156"],
    },
  },
} satisfies Meta<typeof LogoContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logoUrl: "/img/Logo_Grosvenor.png",
    alt: "logo",
    fill: "#03252B",
  },
};
