import BtnIconCompo from '@components/btn/BtnIconCompo.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
  args: { icon: 'fa-solid fa-motorcycle' },
  component: BtnIconCompo,
  decorators: [() => ({ template: '<div style="background-color: #170D09; padding: 2em;"><story /></div>' })],
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  title: 'Btn/Icon'
} satisfies Meta<typeof BtnIconCompo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const sm: Story = { args: { size: 'sm' } };

export const md: Story = { args: { size: 'md' } };

export const lg: Story = { args: { size: 'lg' } };
