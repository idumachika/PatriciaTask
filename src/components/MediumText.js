import React from "react";
import { Text, StyleSheet } from "react-native";
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
    fontFamily: "BRFirma-ExtraLight",
    fontSize: RFValue(17),
    color: "#2F2F2F"
  }
});
