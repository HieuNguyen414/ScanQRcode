import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Scanner from './Scanner';
import Results from './Results';

export default class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
        qrcode: null,
        scanArea: true
    };
}

onRead = (qrcode) => {
  this.setState({
      qrcode,
      scanArea: false
  });
}

scanAgain = () => {
  this.setState({
      qrcode: null,
      scanArea: true
  });
}
  render() {
    const scanArea = this.state.scanArea ?
    <Scanner onRead={this.onRead} /> :
    <Results qrcode={this.state.qrcode} scanAgain={this.scanAgain} />;
    return (
      <View>
        <View style={styles.container}>
                {scanArea}
            </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row',
  }
});
