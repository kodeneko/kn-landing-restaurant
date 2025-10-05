
import FieldCompo from '@components/form/FieldCompo.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
  args: { placeH: 'name...' },
  component: FieldCompo,
  decorators: [
    () => ({
      template: `
    <div style="background-color: #170D09; padding: 2em;">
      <div style="width: 280px">
        <story />
      </div>
    </div>
    `
    })
  ],
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  title: 'Form/Field'
} satisfies Meta<typeof FieldCompo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };
