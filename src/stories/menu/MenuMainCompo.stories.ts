
import MenuMainCompo from '@components/menu/MenuMainCompo.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
  args: {
    opts: [
      {
        href: '#menu',
        id: 'menu',
        label: 'Menu'
      },
      {
        href: '#location',
        id: 'location',
        label: 'Location'
      },
      {
        href: '#delivery',
        id: 'delivery',
        label: 'Delivery'
      },
      {
        href: '#conatct',
        id: 'contact',
        label: 'Contact'
      }
    ]
  },
  component: MenuMainCompo,
  decorators: [() => ({ template: '<div style="background-color: #170D09; padding: 2em;"><story /></div>' })],
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  title: 'Menu/Main'
} satisfies Meta<typeof MenuMainCompo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };
