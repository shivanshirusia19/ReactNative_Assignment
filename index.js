/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import BackHandlerEx from './src/components/BackHandlerEx';
//import ClipboardEx from './src/components/ClipboardEx';
//import StackClipboardEx from './src/components/StackClipboard';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => BackHandlerEx);
//AppRegistry.registerComponent(appName, () => StackClipboardEx);
