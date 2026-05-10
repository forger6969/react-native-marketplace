import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";

const ICONS = {
  success: "checkmark-circle",
  error: "close-circle",
  warning: "warning",
  info: "information-circle",
  neutral: "ellipse",
};

const COLORS = {
  success: "#34C759",
  error: "#FF3B30",
  warning: "#FF9F0A",
  info: "#0A84FF",
  neutral: "#8E8E93",
};

export const iosToastConfig = {
  glass: ({ text1, text2, type = "info" }) => {
    const icon = ICONS[type] || ICONS.info;
    const color = COLORS[type] || COLORS.info;

    return (
      <View style={styles.wrapper}>

        <BlurView intensity={85} tint="light" style={styles.container}>

          {/* glass highlight layer */}
          <View style={styles.glassOverlay} />

          <View style={styles.content}>

            <Ionicons
              name={icon}
              size={20}
              color={color}
              style={styles.icon}
            />

            <View style={styles.textContainer}>

              <Text style={styles.title}>
                {text1}
              </Text>

              {text2 ? (
                <Text style={styles.subtitle}>
                  {text2}
                </Text>
              ) : null}

            </View>

          </View>

        </BlurView>

      </View>
    );
  },
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },

  container: {
    width: "92%",
    borderRadius: 22,
    overflow: "hidden",
  },

  glassOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255,255,255,0.25)",
  },

  content: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 14,
  },

  icon: {
    marginRight: 10,
  },

  textContainer: {
    flex: 1,
  },

  title: {
    fontSize: 15,
    fontWeight: "600",
    color: "#000",
    letterSpacing: 0.2,
  },

  subtitle: {
    fontSize: 13,
    color: "rgba(0,0,0,0.55)",
    marginTop: 2,
  },
});