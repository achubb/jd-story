import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Grid, { GridProps } from "./Grid";

export default {
    title: "Utilities/Grid",
    component: Grid,
    argTypes: {},
} as Meta;

const Template: Story<GridProps> = (args) => <Grid {...args} />;

export const Default = Template.bind({});
Default.args = {
    id: 1
};