/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Task1 from './src/components/Task1';
import Task2 from './src/components/Task2';
import Task3 from './src/components/Task3';

//AppRegistry.registerComponent(appName, () => App);
//AppRegistry.registerComponent(appName, () => Task1);
//AppRegistry.registerComponent(appName, () => Task2);
AppRegistry.registerComponent(appName, () => Task3);
