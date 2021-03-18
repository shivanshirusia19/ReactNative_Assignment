/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import MapsView2 from './src/components/MapsView2';
//import DraggableBall from './src/components/DraggableBall';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => MapsView2);
//AppRegistry.registerComponent(appName, () => DraggableBall);
