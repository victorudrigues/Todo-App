
import themes from "@themes/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container: {
    flexDirection: "row"
   },
   input: {
    borderColor: themes.base.gray700,
    backgroundColor: themes.base.gray500,
    height: 54,
    width: 271,
    borderRadius: 6,
    color: themes.base.gray100,
    fontFamily: themes.fonts.Inter,
    fontSize: themes.fontSize.lg
   },
   inputFocused: {
    borderColor: themes.product.purpleDark,
    borderWidth: 1
   },
   button: {
    backgroundColor: themes.product.blueDark,
    width: 52,
    height: 52
   }
});