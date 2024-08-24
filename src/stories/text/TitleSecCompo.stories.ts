import type { Meta, StoryObj } from '@storybook/vue3';
import TitleSecCompo from '@components/text/TitleSecCompo.vue';

const meta = {
  title: 'Text/Title Section',
  component: TitleSecCompo,
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
  tags: ['autodocs'],
  decorators: [() => ({ template: '<div style="background-color: #170D09; padding: 2em;"><story>Main Menú</story></div>' })],
} satisfies Meta<typeof TitleSecCompo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {

  }
};
