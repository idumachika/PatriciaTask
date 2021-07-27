import { StatusBar, Platform } from "react-native";

const TransparentStatusBar = (backgroundcolor, bartext) => {
    if (Platform.OS === "android") {
        StatusBar.setBackgroundColor(backgroundcolor || "#FFFFFF");
        StatusBar.setTranslucent(true);
    }
    StatusBar.setBarStyle(bartext || "light-content");
};

export default TransparentStatusBar;