
import type { Meta, StoryObj } from '@storybook/vue3';
import AdressMapCompo from 'src/views/home/location/AddressMapCompo.vue';

const meta = {
  title: 'Map/Adress',
  component: AdressMapCompo,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
  },
  tags: ['autodocs'],
  decorators: [() => ({ template: '<div style="background-color: #170D09; padding: 2em;"><story /></div>' })],
} satisfies Meta<typeof AdressMapCompo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
