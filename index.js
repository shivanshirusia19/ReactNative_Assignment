/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import StackNavig from './src/components/StackNavig';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => StackNavig);
