import { Preview, setup } from "@storybook/vue3";
import initI18n from '../src/i18n'
import '../src/icons/fontawesome'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

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
    },
  },
};

export default preview;
