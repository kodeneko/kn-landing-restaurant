
import pic from '@assets/pics/ramen-beef.png';
import CardDishCompo from '@components/card/CardDishCompo.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
  args: {
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing  ipsum dolor adipiscing adipiscing lorem armet',
    pic,
    price: 20,
    symbol: '€',
    title: 'Beef ramen egg'
  },
  component: CardDishCompo,
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
  title: 'Card/Dish'
} satisfies Meta<typeof CardDishCompo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };
