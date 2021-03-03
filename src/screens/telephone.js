import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable, Image, TextInput } from 'react-native';
import smurfImg from '../Assets/site_logo.png';
import { Icon } from 'react-native-elements'
import colors from '../utils/Colors';

export default PhoneScreen = ({ navigation }) => {
    const [phoneNumber, addPhoneNumber] = useState('+94');
    const GetOTP = () => {
        if(phoneNumber && phoneNumber.length > 9){
            navigation.navigate('OTP Screen', {phoneNumber});    
        }
        else
        alert("Please enter 10 digit phone number");
    }
   
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={smurfImg} />
            <TextInput
            value={phoneNumber}
            keyboardType={'numeric'}
                style={{ height: 50, width: 300, paddingLeft: 20, backgroundColor: 'azure', fontSize: 20 }}
                placeholder="+94 773753001"
                onChangeText={(text) => addPhoneNumber(text)}
            />
            <Pressable onPress={GetOTP}
                style={({ pressed }) => ({ ...styles.btnContainer, backgroundColor: pressed ? 'white' : 'blue' })}>
                <Icon name="arrow-forward-outline" type="ionicon" color={colors.WHITE} size={30} />
            </Pressable>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnContainer: {
        padding: 20,
        borderRadius: 10,
        marginTop: 30,
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    imageStyle: {
        height: 200, width: 150,
        resizeMode: 'contain',
        marginBottom: 45,
    },
    text: {
        color: 'black',
        fontSize: 20,
    },
});