import type { Meta, StoryObj } from '@storybook/vue3';
import BtnIconCompo from '@components/btn/BtnIconCompo.vue';

const meta = {
  title: 'Btn/Icon',
  component: BtnIconCompo,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    icon: 'fa-solid fa-motorcycle'
  },
  tags: ['autodocs'],
  decorators: [() => ({ template: '<div style="background-color: #170D09; padding: 2em;"><story /></div>' })],
} satisfies Meta<typeof BtnIconCompo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const sm: Story = {
  args: {
    size: 'sm'
  }
};

export const md: Story = {
  args: {
    size: 'md'
  }
};

export const lg: Story = {
  args: {
    size: 'lg'
  }
};