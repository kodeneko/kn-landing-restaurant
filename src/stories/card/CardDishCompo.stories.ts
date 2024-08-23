
import type { Meta, StoryObj } from '@storybook/vue3';
import CardDishCompo from '@components/card/CardDishCompo.vue';
import pic from '@assets/pics/ramen-beef.png'

const meta = {
  title: 'Card/Dish',
  component: CardDishCompo,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: "Beef ramen egg",
    pic,
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing  ipsum dolor adipiscing adipiscing lorem armet",
    price: 20,
    symbol: "€"
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
} satisfies Meta<typeof CardDishCompo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
