import { Story } from "@storybook/react";
import Heading, { HeaderProps } from "./Heading";
import React from "react";

export default {
    title: 'Atoms/Heading',
    component: Heading,
};

const Template: Story<HeaderProps> = (args) => <Heading {...args}>Follow Us On Instagram @JDOfficial</Heading>;

export const Normal = Template.bind({});
Normal.args = {};