import TitleLabelCompo from '@components/title/TitleLabelCompo.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
  args: {},
  component: TitleLabelCompo,
  decorators: [() => ({ template: '<div style="background-color: #170D09; padding: 2em;"><story /></div>' })],
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  title: 'Title/Label'
} satisfies Meta<typeof TitleLabelCompo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };
