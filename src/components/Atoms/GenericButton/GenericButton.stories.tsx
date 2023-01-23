import { Story } from '@storybook/react';
import GenericButton, { Props } from './GenericButton';
import React from 'react';

export default {
  title: 'Atoms/GenericButton',
  component: GenericButton,
};

const Template: Story<Props> = (args) => <GenericButton {...args} />;

export const Normal = Template.bind({});
Normal.args = { text: 'Shop Now' };

export const Loading = Template.bind({});
Loading.args = { text: 'Loading', isLoading: true };

export const Completed = Template.bind({});
Completed.args = { text: 'Completed', isCompleted: true };

export const Disabled = Template.bind({});
Disabled.args = { text: 'Disabled', disabled: true };