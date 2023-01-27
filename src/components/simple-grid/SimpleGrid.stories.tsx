import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import SimpleGrid, { SimpleGridProps } from "./SimpleGrid";
import SimpleGridPanel from "../simple-grid-panel/SimpleGridPanel";

export default {
    title: "Utilities/SimpleGrid",
    component: SimpleGrid,
    argTypes: {},
} as Meta;

const Template: Story<SimpleGridProps> = (args) => <SimpleGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
    container: true,
    item: false,
    cols: 12,
    children: 
        <>
            <SimpleGridPanel colStart={1} colEnd={3} colSpan={4}><p>Column One</p></SimpleGridPanel>
            <SimpleGridPanel colStart={3} colEnd={8} colSpan={4}><p>Column Two</p></SimpleGridPanel>
            <SimpleGridPanel colStart={8} colEnd={13} colSpan={4}><p>Column Three</p></SimpleGridPanel>
        </>
};