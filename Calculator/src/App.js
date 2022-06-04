import React, { Component } from "react";
import { Plataform, StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Buttons}>
          <Button label="AC" />
          <Button label="/" />
          <Button label="7" />
          <Button label="8" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",
  },
});
