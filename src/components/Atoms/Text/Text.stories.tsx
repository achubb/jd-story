import { Story } from "@storybook/react";
import Text, { TextProps } from "./Text";
import React from "react";

export default {
    title: 'Atoms/Text',
    component: Text,
};

const Template: Story<TextProps> = (args) => <Text {...args}>Adipiscing amet eu sit magna phasellus vulputate ligula magnis magna sapien vestibulum a convallis elit vivamus eget sit consectetur malesuada ad.</Text>;

export const Normal = Template.bind({});
Normal.args = {};
// Normal.args = {};