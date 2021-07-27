import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function TextButton({ title, style, onPress }) {
    const { colors } = useTheme();
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Text style={[styles.text, { color: "green" }]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    text: {
        fontWeight: '500',
        fontSize: 16,

    },
});
