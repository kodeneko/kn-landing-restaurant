
import type { Meta, StoryObj } from '@storybook/vue3';
import MenuMainCompo from '@components/menu/MenuMainCompo.vue';

const meta = {
  title: 'Menu/Main',
  component: MenuMainCompo,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    opts: [
      { id: 'menu', label: 'Menu', href: '#menu' },
      { id: 'location', label: 'Location', href: '#location' },
      { id: 'delivery', label: 'Delivery', href: '#delivery' },
      { id: 'contact', label: 'Contact', href: '#conatct'}
    ]
  },
  tags: ['autodocs'],
  decorators: [() => ({ template: '<div style="background-color: #170D09; padding: 2em;"><story /></div>' })],
} satisfies Meta<typeof MenuMainCompo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
