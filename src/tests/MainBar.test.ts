import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import MainBarComponent from '../components/MainBarComponent.vue';

const wrapper = mount(MainBarComponent);

describe(
  'describe',
  () => {

    it(
      'testing GuessAge component props',
      async () => {

        expect(2).toBe(2);

      }
    );

  }
);
