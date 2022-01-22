import * as React from 'react';
import * as Battery from 'expo-battery';
import { StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';

export default class App extends React.Component {
  state = {
    batteryLevel: null,
  };

  componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  async _subscribe() {
    const batteryLevel = await Battery.getBatteryLevelAsync();
    this.setState({ batteryLevel });
    this._subscription = Battery.addBatteryLevelListener(({ batteryLevel }) => {
      this.setState({ batteryLevel });
      console.log('batteryLevel changed!', batteryLevel);
    });
  }

  _unsubscribe() {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  }

  render() {
    return (
      <View style={styles.container}>
        
        <Text style={{ fontSize: 24, color:"#fff", marginBottom:10}}>{Math.floor(this.state.batteryLevel*100)+"%"}</Text>
        <Progress.Pie progress={this.state.batteryLevel} size={100}  color="rgb(110,217,161)"
        
         
        />
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      width: 200, 
      marginTop: 15,
      marginLeft: 100,
      justifyContent: "center",
      alignItems: "center"
      
    },
  });