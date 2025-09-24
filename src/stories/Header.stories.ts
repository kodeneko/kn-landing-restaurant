import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';
import { background } from 'storybook/internal/theming';

import MyHeader from './Header.vue';

const meta = {
  args: {
    onCreateAccount: fn(),
    onLogin: fn(),
    onLogout: fn()
  },
  component: MyHeader,
  parameters: {
    backgrounds: { default: 'dark' },
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  },
  render: (args: any) => ({
    components: { MyHeader },
    setup () {
      return { args };
    },
    template: '<my-header :user="args.user" />'
  }),
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],

  /*
   * 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Example/Header'
} satisfies Meta<typeof MyHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: { user: { name: 'Jane Doe' } },
  parameters: { background: 'red' }
};

export const LoggedOut: Story = { args: { user: null } };
