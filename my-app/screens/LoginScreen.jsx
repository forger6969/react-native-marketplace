import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons"
import { useState } from 'react';
import Toast from 'react-native-toast-message';
import Constants from 'expo-constants'
import AsyncStorage from "@react-native-async-storage/async-storage"
import api from '../api/api';

const apiUrl = Constants.expoConfig.extra.apiUrl

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [isHidden, setHidden] = useState(true)

    const hiddenToggle = () => {
        setHidden(prev => prev ? false : true)
    }

    const login = async () => {
        try {
            console.log(email, password);

            const req = await api.post(apiUrl + "/api/auth/login", {
                email:email.trim(),
                password: password.trim()
            })

            console.log(req.data.token);

            AsyncStorage.setItem("access_token" , req.data.token)

            Toast.show({
                type: "glass",
                text1: "success login",
                props: {
                    type: "success"
                }
            })

            navigation.replace("home")

        } catch (err) {
            console.log(err);
           
            Toast.show({
                type: "glass",
                text1: "invalid email or password",
                props: {
                    type: "error"
                }
            })
        }

    }

    return (
        <View style={styles.container}>

            <View style={styles.topBarContainer}>

                <Pressable style={({ pressed }) => [
                    styles.backBtn,
                    pressed && styles.backBtnActive
                ]}>
                    <Ionicons name="chevron-back" size={30} color="#0096FF" />

                </Pressable>


                <Text style={styles.welcomeText}>Welcome back</Text>


            </View>

            <View style={styles.bottomBarContainer}>

                <View style={styles.inputsContainer}>


                    <View style={styles.inputContainer}>
                        <Ionicons style={styles.inputIcon} name="mail-outline" size={24} color="#0096FF" />
                        <TextInput onChangeText={setEmail} style={styles.input} placeholder='Email or username' />
                    </View>

                    <View style={styles.inputContainer}>
                        <Ionicons style={styles.inputIcon} name="key-outline" size={24} color="#0096FF" />
                        <TextInput onChangeText={setPassword} style={styles.input} placeholder='Password' type={"password"} secureTextEntry={isHidden} />

                        <Pressable onPressIn={hiddenToggle} style={styles.eyeIcon}>
                            <Ionicons name={isHidden ? "eye-outline" : "eye-off-outline"} size={24} color="#0096FF" />
                        </Pressable>

                    </View>

                    <Text style={styles.forgotText}>
                        Forgot password?
                    </Text>

                </View>

                <Pressable onPress={login} style={({ pressed }) => [
                    styles.signInBtn,
                    pressed && styles.signInActive
                ]}>
                    <Text style={{ color: "white", fontSize: 16, fontWeight: "600", textAlign: 'center' }}>
                        Sign in
                    </Text>
                </Pressable>

            </View>

            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0096FF',
        alignItems: 'center',
        justifyContent: 'center',
    },

    backBtn: {
        backgroundColor: "white",
        borderRadius: 100,
        padding: 10,
        position: "absolute",
    },
    backBtnActive: {
        transform: [{ scale: 1.1 }]
    },
    welcomeText: {
        color: "white",
        fontSize: 40,
        fontWeight: "600",
        width: 170,
        marginTop: 75,
        marginLeft: 5
    },
    topBarContainer: {
        position: "absolute",
        top: 70,
        left: 20
    },
    bottomBarContainer: {
        backgroundColor: "white",
        width: "100%",
        height: "60%",
        position: "absolute",
        bottom: 0,
        borderTopLeftRadius: 55,
        borderTopRightRadius: 55,

        alignItems: "center",
        paddingHorizontal: 20
    },
    input: {
        borderColor: "#0096FF",
        borderWidth: 2,
        width: "100%",
        paddingVertical: 15,
        borderRadius: 10,
        paddingLeft: 40,
        fontWeight: "600"
    },
    inputContainer: {
        width: "100%",
        position: "relative",
        alignItems: "center",

    },
    inputIcon: {
        position: "absolute",
        top: 14,
        left: 10
    },
    inputsContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 25,
        marginTop: 50
    },
    forgotText: {
        color: "#0096FF",
        fontSize: 17,
        fontWeight: "500",
    },
    signInBtn: {
        backgroundColor: "#0096FF",
        width: "100%",
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 50
    },
    eyeIcon: {
        position: "absolute",
        top: 13,
        right: 15
    },
    signInActive: {
        transform: [{ scale: 1.03 }],

    }
});

export default LoginScreen
