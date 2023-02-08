import '../src/index.scss';
import { Provider } from "react-redux"
import { store } from "../src/redux/store"
import { withRouter } from 'storybook-addon-react-router-v6';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [withRouter,
  (Story) => (
    <Provider store={store}>
      <Story />
    </Provider>
  ),
]
