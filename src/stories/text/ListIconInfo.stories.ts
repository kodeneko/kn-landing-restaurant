import type { Meta, StoryObj } from '@storybook/vue3';
import ListIconInfoCompo from '@components/text/ListIconInfoCompo.vue';

const meta = {
  title: 'Text/List Icon Info',
  component: ListIconInfoCompo,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    list: [
      { id: 'twitter', icon: 'fa-brands fa-twitter', info: '@mytwitter' },
      { id: 'tiktok', icon: 'fa-brands fa-tiktok', info: '@mytiktok' },
      { id: 'insta', icon: 'fa-brands fa-instagram', info: '@myinsta' }
    ]
  },
  tags: ['autodocs'],
  decorators: [() => ({ template: '<div style="background-color: #170D09; padding: 2em;"><story /></div>' })],
} satisfies Meta<typeof ListIconInfoCompo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};
