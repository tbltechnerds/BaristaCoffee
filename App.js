import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {AppLoading} from 'expo';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import {StatusBar} from "expo-status-bar";
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./src/home";
import Ticket from "./src/tickets";

const Stack = createStackNavigator();

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        this.setState({isReady: true});
    }

    render() {
        if (!this.state.isReady) {
            return <AppLoading/>;
        }

        return (
            <NavigationContainer>
                <StatusBar style="auto" />
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Tickets" component={Ticket} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
