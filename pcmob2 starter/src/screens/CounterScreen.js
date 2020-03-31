import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default class CounterScreen extends React.component {
  state = {
    //initialise counter here
  };

  Increase = () => {
    // configure increase button functionality
  };

  Decrease = () => {
    // configure decrease button functionality
  };

  render() {
    return (
      <View>
        <Button
          title="Increase"
          onPress={() => {this.Increase}}
        />
        <Button
          title="Decrease"
          onPress={() => {this.Decrease});
          }
        />
        <Text>Current Count: {this.state.counter}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default CounterScreen;
