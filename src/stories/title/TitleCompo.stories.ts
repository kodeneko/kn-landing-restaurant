import type { Meta, StoryObj } from '@storybook/vue3';
import TitleCompo from '@components/title/TitleCompo.vue';

const meta = {
  title: 'Title/Title',
  component: TitleCompo,
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
  tags: ['autodocs'],
  decorators: [() => ({ template: '<div style="background-color: #170D09; padding: 2em;"><story /></div>' })],
} satisfies Meta<typeof TitleCompo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
