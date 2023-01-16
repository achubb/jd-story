import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Task, { TaskProps } from "./Task";

export default {
    title: "Components/Task",
    component: Task
} as Meta;

const Template: Story<TaskProps> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
    id: 1,
    title: 'Test Task',
    state: 'TASK_INBOX'
};

export const Pinned = Template.bind({});
Pinned.args = {
    ...Default.args,
    state: 'TASK_PINNED'
};

export const Archived = Template.bind({});
Archived.args = {
    ...Default.args,
    state: 'TASK_ARCHIVED'
};