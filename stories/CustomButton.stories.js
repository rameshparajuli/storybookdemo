import CustomButton from "./CustomButton";

export default {
  title: "CustomComponents/CustomButton",
  component: CustomButton,
  tags: ["autodocs"],
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <CustomButton {...args} />;

export const Red = Template.bind({});
Red.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "md",
};

export const Green = Template.bind({});
Green.args = {
  backgroundColor: "green",
  label: "Press Me",
  size: "md",
};

export const Small = Template.bind({});
Small.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "sm",
};

export const Large = Template.bind({});
Large.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "lg",
};

export const LongLabel = Template.bind({});
LongLabel.args = {
  backgroundColor: "red",
  label: "Press Me adsf asdf asdf asdfasdfasd fasd fasd fasd",
  size: "md",
};
