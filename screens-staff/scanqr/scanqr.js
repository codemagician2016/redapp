
import * as React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import scanqrStyle from './scanqrStyle';
import { Button, Appbar, Headline } from 'react-native-paper';
import { Card, CardItem, Body, Form, Picker, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
// import {
//     createDrawerNavigator,
//     DrawerContentScrollView,
//     DrawerItemList,
//     DrawerItem,
//   } from '@react-navigation/drawer';
// import Home from '../home/home'

class Scanqr extends React.Component {

    constructor(props) {
        super();
        this.state = {

        };
    }


    render() {

        return (
            <>
                <Appbar.Header style={scanqrStyle.header}>
                    <Appbar.BackAction color={'#fff'} />
                    <Appbar.Content color={'#fff'} title="Scan QR" subtitle={''} />
                </Appbar.Header>
                <ScrollView style={globalStyle.lightBackground}>


                    <LinearGradient
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                        colors={['#243338', '#243338', '#243338']} style={scanqrStyle.linearGradient}>
                        <View style={scanqrStyle.mainContainer}>
                            <Text style={{ textAlign: 'center', color: '#fff' }}>
                                Place the code in the square{"\n"}
                                and wait a bit
                            </Text>
                            <View style={scanqrStyle.imgbox}>
                                <View style={scanqrStyle.qrbox}>
                                    <Image style={scanqrStyle.qrImg} source={require('../../src/images/qrbig.png')} />
                                </View>
                            </View>
                        </View>
                    </LinearGradient>


                </ScrollView>
            </>
        )
    }
}

export default Scanqr
