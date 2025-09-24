import { EnumLang, EnumTheme } from '@models/user';
import { defineStore } from 'pinia';

type UserStoreState = {
  lang: EnumLang;
  theme: EnumTheme;
};

const useUserStore = defineStore<'user', UserStoreState>('user', {
  actions: {
    setLang (lang: EnumLang) {
      this.lang = lang;
    },
    setTheme (theme: EnumTheme) {
      this.theme = theme;
    }
  },
  getters: { getLang: (state): EnumLang => state.lang },
  state: () => ({
    lang: EnumLang.EN,
    theme: EnumTheme.DARK
  })
});

export default useUserStore;
