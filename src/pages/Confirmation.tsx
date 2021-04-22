import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export default function Confirmation({ route }: any) {
  const { name } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>😄</Text>
        <Text style={styles.title}>Prontinho {name}!</Text>
        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado
        </Text>
        <View style={styles.buttonContainer}>
          <Button title="Começar" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 30,
  },
  title: {
    fontSize: 22,
    lineHeight: 38,
    textAlign: "center",
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 15,
  },
  subtitle: {
    fontSize: 17,
    textAlign: "center",
    color: colors.heading,
    fontFamily: fonts.text,
    paddingVertical: 10,
  },
  emoji: {
    fontSize: 78,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 50,
    marginTop: 20,
  },
});
