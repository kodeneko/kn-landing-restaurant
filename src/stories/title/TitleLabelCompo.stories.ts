import type { Meta, StoryObj } from '@storybook/vue3';
import TitleLabelCompo from '@components/title/TitleLabelCompo.vue';

const meta = {
  title: 'Title/Label',
  component: TitleLabelCompo,
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
  tags: ['autodocs'],
  decorators: [() => ({ template: '<div style="background-color: #170D09; padding: 2em;"><story /></div>' })],
} satisfies Meta<typeof TitleLabelCompo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
