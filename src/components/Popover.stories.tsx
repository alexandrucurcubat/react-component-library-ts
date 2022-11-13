import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Popover } from "./Popover";

export default {
  title: "Popover",
  component: Popover,
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
  <Popover {...args}>Click me</Popover>
);
export const PopoverBasic = Template.bind({});
PopoverBasic.args = {
  content: "Clicked!",
  side: "bottom",
};
