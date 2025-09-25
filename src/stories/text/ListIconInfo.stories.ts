import ListIconInfoCompo from '@components/text/ListIconInfoCompo.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
  args: {
    list: [
      {
        icon: 'fa-brands fa-twitter',
        id: 'twitter',
        info: '@mytwitter'
      },
      {
        icon: 'fa-brands fa-tiktok',
        id: 'tiktok',
        info: '@mytiktok'
      },
      {
        icon: 'fa-brands fa-instagram',
        id: 'insta',
        info: '@myinsta'
      }
    ]
  },
  component: ListIconInfoCompo,
  decorators: [() => ({ template: '<div style="background-color: #170D09; padding: 2em;"><story /></div>' })],
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  title: 'Text/List Icon Info'
} satisfies Meta<typeof ListIconInfoCompo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
