import BtnCompo from '@components/btn/BtnCompo.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
  args: { label: 'Option' },
  component: BtnCompo,
  decorators: [() => ({ template: '<div style="background-color: #170D09; padding: 2em;"><story /></div>' })],
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  title: 'Btn/Btn'
} satisfies Meta<typeof BtnCompo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { icon: 'fa-solid fa-motorcycle' } };

export const Line: Story = {
  args: {
    icon: 'fa-solid fa-motorcycle',
    line: true
  }
};

export const NoIcon: Story = { args: {} };

export const Small: Story = { args: { size: 'sm' } };
