import type { Meta, StoryObj } from '@storybook/vue3';
import InfoEleCompo from '@components/text/InfoEleCompo.vue';

const meta = {
  title: 'Text/Info Element',
  component: InfoEleCompo,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    label: 'Address',
    info: 'C/Abedul 15, Alicante'
  },
  tags: ['autodocs'],
  decorators: [() => ({ template: '<div style="background-color: #170D09; padding: 2em;"><story /></div>' })],
} satisfies Meta<typeof InfoEleCompo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
