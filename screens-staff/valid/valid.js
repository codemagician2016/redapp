
import * as React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import validStyle from './validStyle';
import { Appbar, Headline } from 'react-native-paper';
import { Card, CardItem, Body, Form, Picker, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import IconFeather from "react-native-vector-icons/Feather";
import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
// import {
//     createDrawerNavigator,
//     DrawerContentScrollView,
//     DrawerItemList,
//     DrawerItem,
//   } from '@react-navigation/drawer';
// import Home from '../home/home'

class Valid extends React.Component {

    constructor(props) {
        super();
        this.state = {

        };
    }


    render() {

        return (
            <>
                <Appbar.Header style={validStyle.header}>
                    <Appbar.BackAction color={'#fff'} />
                    {/* <Appbar.Content color={'#fff'} title="Scan QR" subtitle={''} /> */}
                </Appbar.Header>
                <ScrollView style={globalStyle.lightBackground}>


                    <LinearGradient
                        colors={['#9141CE', '#6F3DCD', '#512EA2']} style={validStyle.linearGradient}>
                        <View style={validStyle.mainContainer}>
                           
                            <View style={validStyle.imgbox}>
                                <View style={validStyle.qrboxx}>
                                    <Image style={validStyle.qrImg} source={require('../../src/images/valid.png')} />
                                    <Text style={{ textAlign: 'center', color: '#fff', fontSize: 24, fontWeight: '700', marginTop: 37, }}>
                                        Nazar Hamid
                            </Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 29 }}>
                                        <IconFeather type="EvilIcons" style={validStyle.iconColor} name="check" ></IconFeather>
                                        <Text style={{ fontSize: 16, fontWeight: '700', color: '#fff' }}>Valid</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                    </LinearGradient>

                </ScrollView>
                {/* <Footer style={validStyle.footer}>
                            <FooterTab style={{backgroundColor:'transparent'}}>
                               
                            </FooterTab>
                        </Footer> */}
                <View style={{flexDirection:'row',justifyContent:'center',width:'100%'}}>
                    <Button style={validStyle.footer}
                      onPress={() => this.props.navigation.navigate('alreadyin')}>
                        <Text style={{ color: '#fff' }}>Check In</Text>
                    </Button>
                </View>
            </>
        )
    }
}

export default Valid
