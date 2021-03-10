/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import design from './src/components/design'

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => design);
