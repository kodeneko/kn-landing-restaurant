import { Sections } from '@globals/sections';
import { EnumLang, EnumTheme } from '@models/user';
import { defineStore } from 'pinia';

type HTMLElement = globalThis.HTMLElement;

export type UserStoreState = {
  lang: EnumLang;
  theme: EnumTheme;
  refSections: {
    [Sections.Contact]?: HTMLElement | null;
    [Sections.Delivery]?: HTMLElement | null;
    [Sections.Location]?: HTMLElement | null;
    [Sections.Menu]?: HTMLElement | null;
  };
};

type UserStoreGetters = { getLang: () => EnumLang };

type UserStoreActions = {
  scrollToSection: (section: keyof UserStoreState['refSections']) => void;
  setLang: (lang: EnumLang) => void;
  setRef: (section: keyof UserStoreState['refSections'], ref: HTMLElement) => void;
  setTheme: (theme: EnumTheme) => void;
};

const useUserStore = defineStore<'user', UserStoreState, UserStoreGetters, UserStoreActions>('user', {
  actions: {
    scrollToSection (section: keyof UserStoreState['refSections']) {
      const elRef = this.refSections[section];
      if (elRef) {
        elRef.scrollIntoView({ behavior: 'smooth' });
      }
    },
    setLang (lang: EnumLang) {
      this.lang = lang;
    },
    setRef (section: keyof UserStoreState['refSections'], ref: HTMLElement) {
      this.refSections[section] = ref;
    },
    setTheme (theme: EnumTheme) {
      this.theme = theme;
    }
  },
  getters: { getLang (): EnumLang { return this.lang; } },
  state: (): UserStoreState => ({
    lang: EnumLang.EN,
    refSections: {},
    theme: EnumTheme.DARK
  })
});

export default useUserStore;
