import TitleSecCompo from '@components/text/TitleSecCompo.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
  args: {},
  component: TitleSecCompo,
  decorators: [() => ({ template: '<div style="background-color: #170D09; padding: 2em;"><story>Main Menú</story></div>' })],
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  title: 'Text/Title Section'
} satisfies Meta<typeof TitleSecCompo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };
