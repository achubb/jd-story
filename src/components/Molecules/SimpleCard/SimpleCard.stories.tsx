import { Story } from "@storybook/react";
import SimpleCard from "./SimpleCard";
import React from "react";

export default {
    title: 'Molecules/SimpleCard',
    component: SimpleCard,
};

const Template: Story = () => <SimpleCard />;

export const Normal = Template.bind({});
