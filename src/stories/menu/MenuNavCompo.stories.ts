
import type { Meta, StoryObj } from '@storybook/vue3';
import MenuNavCompo from '@components/menu/MenuNavCompo.vue';

const meta = {
  title: 'Menu/Nav',
  component: MenuNavCompo,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    selected: 'ramen',
    opts: [
      { id: 'starters', label: 'Starters', href: '#starters' },
      { id: 'ramen', label: 'Ramen', href: '#ramen' },
      { id: 'donburi', label: 'Donburi', href: '#donburi' },
      { id: 'dessert', label: 'Dessert', href: '#dessert' },
      { id: 'drinks', label: 'Drinks', href: '#drinks'}
    ]
  },
  tags: ['autodocs'],
  decorators: [() => ({ template: '<div style="background-color: #170D09; padding: 2em;"><story /></div>' })],
} satisfies Meta<typeof MenuNavCompo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
