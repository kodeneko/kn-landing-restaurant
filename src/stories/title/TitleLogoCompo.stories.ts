import TitleLogoCompo from '@components/title/TitleLogoCompo.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
  args: {},
  component: TitleLogoCompo,
  decorators: [() => ({ template: '<div style="background-color: #170D09; padding: 2em;"><story /></div>' })],
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  title: 'Title/Logo'
} satisfies Meta<typeof TitleLogoCompo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };
