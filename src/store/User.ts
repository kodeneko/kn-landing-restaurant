import { defineStore } from 'pinia';

import { EnumLang, EnumTheme, User } from '../models';

const useUserStore = defineStore(
  'user',
  {
    actions: {},
    getter: {},
    state: () => {
      lang: EnumLang.EN,
      theme: EnumTheme.DARK
    }
  }
);

export default useUserStore;