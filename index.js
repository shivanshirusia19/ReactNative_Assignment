/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Web_View from './src/components/Web_View';
import SwitchSlider from './src/components/SwitchSlider';
import FlatlistEx from './src/components/FlatlistEx';

// AppRegistry.registerComponent(appName, () => App);
//AppRegistry.registerComponent(appName, () => Web_View);
// AppRegistry.registerComponent(appName, () => SwitchSlider);
AppRegistry.registerComponent(appName, () => FlatlistEx);