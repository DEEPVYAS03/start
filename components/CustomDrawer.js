import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import tw from 'twrnc'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useId, usePhone } from '../context/allContext';


const CustomDrawer = (props) => {
    const { userId, setUserId } = useId();
    const {fname,lname} =usePhone();
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} >
                <ImageBackground
                    style={tw`p-20 rounded-lg bg-gray-100`}>
                    <Image source={require('../assets/user-profile.jpg')} style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }} />
                    <Text
                        style={{
                            fontSize: 18,
                            marginBottom: 5,
                        }}>
                        {`${fname} ${lname}`}
                    </Text>

                </ImageBackground>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
                <TouchableOpacity onPress={() => {

                    navigation.navigate('Welcome')
                    setUserId(null)

                }} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name='exit-outline' size={22} />
                        <Text style={{ fontSize: 15, marginLeft: 5 }} >Sign Out</Text>
                    </View>

                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomDrawer;
