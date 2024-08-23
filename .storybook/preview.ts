import { Preview, setup } from "@storybook/vue3";
import initI18n from '../src/i18n'
import '../src/icons/fontawesome'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import '../src/assets/styles/global.less';

setup((app) => {
  app.component('fai', FontAwesomeIcon);
  initI18n(app);
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    }
  },

  decorators: [() => ({ template: '<div style="background-color: #170D09; padding: 2em;"><story /></div>' })],
};

export default preview;
