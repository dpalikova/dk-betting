import type { Meta, StoryObj } from "@storybook/react";
import { CasinoWidget } from "../components/CasinoWidget/CasinoWidget";
import casino from "../types/casino";

const meta = {
  title: "Example/CasinoWidget",
  component: CasinoWidget,
  tags: ["autodocs"],
} satisfies Meta<typeof CasinoWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockCasino: casino = {
  id: 1,
  logoUrl: "/img/Logo_Grosvenor.png",
  name: "Grosvenor",
  logoBG: "#03252B",
  rating: 4,
  betAmount: 10,
  winAmount: 100,
};

export const Default: Story = {
  args: {
    data: mockCasino,
  },
};

export const HighRoller: Story = {
  args: {
    data: {
      ...mockCasino,
      betAmount: 500,
      winAmount: 5000,
      rating: 5,
      name: "High Roller Casino",
    },
  },
};

export const LowStakes: Story = {
  args: {
    data: {
      ...mockCasino,
      betAmount: 1,
      winAmount: 10,
      rating: 3,
      name: "Low Stakes Casino",
    },
  },
};
