import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import GridPanel, { GridPanelProps } from "./GridPanel";

export default {
    title: "Utilities/GridPanel",
    component: GridPanel,
    argTypes: {}
} as Meta;

const Template: Story<GridPanelProps> = (args) => <GridPanel {...args} />;

export const Default = Template.bind({});
Default.args = {
    x: 0, 
    y: 0, 
    width: 2, 
    height: 2
};