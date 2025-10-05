import TitleCompo from '@components/title/TitleCompo.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
  args: {},
  component: TitleCompo,
  decorators: [() => ({ template: '<div style="background-color: #170D09; padding: 2em;"><story /></div>' })],
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  title: 'Title/Title'
} satisfies Meta<typeof TitleCompo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };
