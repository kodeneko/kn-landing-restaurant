import { mainMenu } from '@globals/menu';
import { Sections } from '@globals/sections';
import { EnumLang, EnumTheme } from '@models/user';
import { defineStore } from 'pinia';

type HTMLElement = globalThis.HTMLElement;

export type UserStoreState = {
  isMenuOpen: boolean;
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
  setMenuOpen: (isMenuOpen: boolean) => void;
  scrollToSection: (pathname: string) => void;
  setLang: (lang: EnumLang) => void;
  setRef: (section: keyof UserStoreState['refSections'], ref: HTMLElement) => void;
  setTheme: (theme: EnumTheme) => void;
};

const useUserStore = defineStore<'user', UserStoreState, UserStoreGetters, UserStoreActions>('user', {
  actions: {
    scrollToSection (pathname: string) {
      const idSection = mainMenu.find((opt) => opt.href === pathname)?.id;
      if (idSection) {
        const elRef = this.refSections[idSection as keyof UserStoreState['refSections']];
        if (elRef) {
          elRef.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    setLang (lang: EnumLang) {
      this.lang = lang;
    },
    setMenuOpen (isMenuOpen: boolean) {
      this.isMenuOpen = isMenuOpen;
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
    isMenuOpen: false,
    lang: EnumLang.EN,
    refSections: {},
    theme: EnumTheme.DARK
  })
});

export default useUserStore;
