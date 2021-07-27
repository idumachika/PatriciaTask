import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

/**
 * @RegularText Component
 *
 * The Bold version for text component.
 */
export default props => {
  return (
    <Text allowFontScaling={false} style={[styles.defaultStyles, props.customstyle]} {...props}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultStyles: {
    fontFamily: Platform.OS === "android" ? "BR Firma" : "BR Firma",
    fontSize: RFValue(17),
    color: "#fff"
  }
});
