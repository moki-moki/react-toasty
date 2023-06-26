import type { Meta, StoryObj } from "@storybook/react";

import Toast from "./Toast";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "ReactComponentLibrary/Toast",
  component: Toast,
  tags: ["autodocs"],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Small",
    theme: "dark",
    type: "error",
  },
};

export const Medium: Story = {
  args: {
    label: "Medium",
    theme: "light",
    type: "info",
    duration: 6000,
  },
};

export const Large: Story = {
  args: {
    label: "Large",
    theme: "light",
    type: "warning",
    duration: 1000,
  },
};

export const Success: Story = {
  args: {
    label:
      "Success text testased as text asdasdas dasd as da text asdasdas dasd as datext asdasdas dasd as datext asdasdas dasd as datext asdasdas dasd as da",
    theme: "dark",
    type: "error",
    duration: 700,
  },
};
