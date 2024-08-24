import type { Meta, StoryObj } from '@storybook/vue3';
import TitleLogoCompo from '@components/title/TitleLogoCompo.vue';

const meta = {
  title: 'Title/Logo',
  component: TitleLogoCompo,
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
  tags: ['autodocs'],
  decorators: [() => ({ template: '<div style="background-color: #170D09; padding: 2em;"><story /></div>' })],
} satisfies Meta<typeof TitleLogoCompo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
