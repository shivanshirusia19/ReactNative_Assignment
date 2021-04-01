import React, {Component} from 'react';
import {ScrollView, SafeAreaView} from 'react-native';

import RenderData from './RenderData';
const Data = require('./DataItems.json');

export default class Design extends Component {
  render() {
    return (
      <>
        <SafeAreaView />
        <ScrollView>
          {Data.map((item, index) => (
            <RenderData
              id={item.id}
              title={item.title}
              desc={item.desc}
              time={item.time}
              key={index.toString()}
            />
          ))}
        </ScrollView>
      </>
    );
  }
}
