
import type { Meta, StoryObj } from '@storybook/vue3';
import FieldCompo from '@components/form/FieldCompo.vue';

const meta = {
  title: 'Form/Field',
  component: FieldCompo,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    placeH: 'name...'
  },
  tags: ['autodocs'],
  decorators: [() => ({
    template: `
    <div style="background-color: #170D09; padding: 2em;">
      <div style="width: 280px">
        <story />
      </div>
    </div>
    `
})],
} satisfies Meta<typeof FieldCompo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
