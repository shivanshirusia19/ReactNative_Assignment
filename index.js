/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import SectionlistStack from './src/components/SectionlistStack';
//import Modalgif from './src/components/Modalgif';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => SectionlistStack);
//AppRegistry.registerComponent(appName, () => Modalgif);
