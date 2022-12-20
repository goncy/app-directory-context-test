import type {Meta, StoryObj} from "@storybook/react";

import {Provider as FavoriteProvider} from "../state/favorite";

import Dog from "./dog";

const meta: Meta<typeof Dog> = {
  title: "Components/Dog",
  component: Dog,
  tags: ["dog"],
  argTypes: {
    image: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dog>;

export const Favorite: Story = {
  decorators: [
    (Story) => (
      <FavoriteProvider favorites={["https://loremflickr.com/320/240"]}>
        <Story />
      </FavoriteProvider>
    ),
  ],
  args: {
    image: "https://loremflickr.com/320/240",
  },
};

export const NoFavorite: Story = {
  decorators: [
    (Story) => (
      <FavoriteProvider>
        <Story />
      </FavoriteProvider>
    ),
  ],
  args: {
    image: "https://loremflickr.com/320/240",
  },
};

export const Multiple: Story = {
  decorators: [
    (Story) => (
      <FavoriteProvider favorites={["https://loremflickr.com/320/240"]}>
        <Story />
        <Dog image="https://loremflickr.com/320/240?variant=0" />
        <Dog image="https://loremflickr.com/320/240?variant=1" />
        <Dog image="https://loremflickr.com/320/240?variant=2" />
      </FavoriteProvider>
    ),
  ],
  args: {
    image: "https://loremflickr.com/320/240",
  },
};
