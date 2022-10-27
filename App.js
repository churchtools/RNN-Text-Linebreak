/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
    Text,
    View,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import Platform from "react-native/Libraries/Utilities/Platform";

const App: () => Node = () => {

    return (
        <View
            style={{
                backgroundColor: Colors.black,
                flex: 1,
                marginTop: 50 // only here to be not inside the rounded corner of the iPhone
            }}>
            <Text style={{
                backgroundColor: "blue",
                fontSize: 13,
                fontWeight: 'bold',
                maxWidth: Platform.OS === 'ios' ? 112.4 : 103.4
            }}>
                Klaus-Peter Buck
            </Text>
        </View>
    );
};

export default App;
