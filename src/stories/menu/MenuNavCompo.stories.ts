
import MenuNavCompo from '@components/menu/MenuNavCompo.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
  args: {
    opts: [
      {
        href: '#starters',
        id: 'starters',
        label: 'Starters'
      },
      {
        href: '#ramen',
        id: 'ramen',
        label: 'Ramen'
      },
      {
        href: '#donburi',
        id: 'donburi',
        label: 'Donburi'
      },
      {
        href: '#dessert',
        id: 'dessert',
        label: 'Dessert'
      },
      {
        href: '#drinks',
        id: 'drinks',
        label: 'Drinks'
      }
    ],
    selected: 'ramen'
  },
  component: MenuNavCompo,
  decorators: [() => ({ template: '<div style="background-color: #170D09; padding: 2em;"><story /></div>' })],
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  title: 'Menu/Nav'
} satisfies Meta<typeof MenuNavCompo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };
