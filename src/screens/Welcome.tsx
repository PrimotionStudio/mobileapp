import { Button, Image, Pressable, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import React from 'react';

export default function Welcome() {
    return (
        <View style={styles.Container}>
            <View style={styles.Brand}>
                <Image
                    style={styles.Logo}
                    source={require('../assets/logo.png')}
                />
                <Text style={styles.Title}>Just-D-Word</Text>
                <Text style={{ textAlign: 'center' }}>Receive daily Bible verses for inspiration</Text>
            </View>
            <TouchableHighlight>
                <Pressable style={styles.GetStarted} onPress={() => console.log('Getting Started')}>
                    <Text style={styles.GetStartedText}>Get Started</Text>
                </Pressable>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    Logo: {
        height: 220,
        width: 220,
        objectFit: 'contain',
    },
    Title: {
        fontSize: 50,
        textAlign: 'center'
    },
    Brand: {
        flex: 1,
        marginVertical: 100,
        // textAlign: 'center'
    },
    GetStarted: {
        paddingVertical: 20,
        backgroundColor: '#a9ddfe',
        width: '90%',
        marginBottom: 20
    },
    GetStartedText: {
        textAlign: 'center'
    }
});