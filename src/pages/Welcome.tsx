import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  View,
} from "react-native";
import { WelcomeButton } from "../components/Button";
import wateringImg from "../assets/watering.png";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export default function Welcome({ navigation }: any) {
  function handleNavigation() {
    navigation.navigate("UserId");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {"\n"}
          suas plantas de{"\n"}
          forma fácil
        </Text>
        <Image source={wateringImg} style={styles.image} resizeMode="contain" />
        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Text>
        <WelcomeButton onPress={handleNavigation} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 34,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    color: colors.heading,
    paddingHorizontal: 20,
    fontFamily: fonts.text,
  },
  image: {
    height: Dimensions.get("window").width * 0.7,
  },
});
