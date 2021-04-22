import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { Feather } from "@expo/vector-icons";

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
}
export function WelcomeButton(props: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, styles.welcome]}
      activeOpacity={0.7}
      {...props}
    >
      <Feather name="chevron-right" style={styles.icon} />
    </TouchableOpacity>
  );
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  welcome: {
    marginBottom: 10,
    width: 56,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    height: 56,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.heading,
  },
  icon: {
    color: colors.white,
    fontSize: 32,
  },
});
