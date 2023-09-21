/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import i18n from './src/Translations';
import {Provider} from 'react-redux';
import store from './src/Redux/store';
console.log(i18n);

const LaraBack = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => LaraBack);
