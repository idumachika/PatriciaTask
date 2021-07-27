import React from 'react'
import { TouchableOpacity, Text, View, Image } from "react-native";
import Font from '../components/Font'

const TabButton = ({ active, title, onPress }) => {
    const style = {
        button: {
            flexDirection: 'row',
            paddingVertical: 5,
            paddingHorizontal: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
            backgroundColor: "#F4F5F7",
        },
        text: {
            color: "#2F2F2F",
            textAlign: 'center',
            marginLeft: 10,
            fontSize: 12,
            lineHeight: 20,
            letterSpacing: 0.25,
            fontFamily: Font.regular,

        },
    };
    return (
        <View>
            <TouchableOpacity style={{ ...style.button, margin: 5, }} onPress={onPress}>
                <Image source={require('../assets/image/emoji.png')} resizeMode="contain" style={{ width: 12, height: 12 }}>
                </Image>
                <Text style={style.text}>{title}</Text>
            </TouchableOpacity>
        </View>

    );
};
export default TabButton
