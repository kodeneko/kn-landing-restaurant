import InfoEleCompo from '@components/text/InfoEleCompo.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
  args: {
    info: 'C/Abedul 15, Alicante',
    label: 'Address'
  },
  component: InfoEleCompo,
  decorators: [() => ({ template: '<div style="background-color: #170D09; padding: 2em;"><story /></div>' })],
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  title: 'Text/Info Element'
} satisfies Meta<typeof InfoEleCompo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };
