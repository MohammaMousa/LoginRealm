import React, { Component } from 'react';
import {AsyncStorage} from '@react-native-community/async-storage'
import {
    Platform,
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

 const userInfo = { username: 'admin', password: 'pass1234' }

export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    render() {
        return (
            <View
                style={{
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignSelf: "center",
                    alignContent: "center",
                    alignItems: "center"
                }}>

                <TextInput placeholder={"Enter the UserName"}
                    onChangeText={(username) => this.setState({ username })}
                    value={this.state.username}
                    style={{
                        height: 42,
                        width: "80%",
                        borderBottomWidth: 1
                    }}
                />

                <TextInput placeholder={"Enter the passowrd"}
                     secureTextEntry
                    onChangeText={(password) => this.setState({ password })}
                   
                    style={{
                        height: 42,
                        width: "80%",
                        borderBottomWidth: 1,
                        marginTop: "5%"
                    }}
                    value={this.state.password}
                />

                <View style={{
                    marginTop: "10%",
                    width: "80%"
                }}>

                    <TouchableOpacity
                        style={{
                            borderWidth: 1,
                            height: 42,
                            width: "80%",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 40,
                            backgroundColor: "green",
                            alignSelf: "center",
                            textAlign: "center"
                        }}

                        onPress={this._login}
                    >
                        <Text style={{ color: "white" }}>Log in</Text>

                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    _login = async () => {
        if (userInfo.username === this.state.username && userInfo.password === this.state.password) {
            // alert('Logged in');
            await AsyncStorage.setItem('isLoggedIn','1');
          this.props.navigation.navigate('Details');

        } else {
            alert('username or password is incorrect');
        }
    }
}


