import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function FilledButton({ title, style, onPress }) {
    const { colors } = useTheme();

    return (
        <TouchableOpacity
            style={[styles.container, style, {
                backgroundColor: "#006848"
            }]}
            onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 17,
        borderRadius: 8,
    },
    text: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
    },
});
