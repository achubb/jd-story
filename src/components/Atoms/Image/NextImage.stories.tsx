import { Story } from "@storybook/react";
import NextImage, { NextImageProps } from "./NextImage";
import React from "react";

export default {
    title: 'Atoms/Image',
    component: NextImage,
};

const Template: Story<NextImageProps> = (args) => <NextImage {...args} />

export const Normal = Template.bind({});
Normal.args = {};