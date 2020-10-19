import { configureStore } from '@reduxjs/toolkit';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Provider } from 'react-redux';
import React from 'react';

import flashMessages from './duck';
import FlashMessages, { FlashMessagesProps as FlashMessageListProps } from './index';
import { FlashMessageProps } from './FlashMessage';
import { Success as FlashMessageStory } from './FlashMessage/stories';

const Template: Story<FlashMessageListProps> = (args) => <FlashMessages {...args} />;
export const Stories = Template.bind({});
Stories.storyName = 'FlashMessages';
Stories.args = {
  messages: [FlashMessageStory.args as FlashMessageProps],
};

const store = configureStore({
  reducer: () => ({
    flashMessages: flashMessages.reducer,
  }),
});

export default {
  component: FlashMessages,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  title: 'FlashMessages',
} as Meta;
