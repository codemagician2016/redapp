
import * as React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import multipleticketsStyle from './multipleticketsStyle';
import { Button, Appbar, Headline } from 'react-native-paper';

import { Card, CardItem, Body, Form, Picker, Icon } from 'native-base';
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconFeather from "react-native-vector-icons/Feather";
import IconEntypo from "react-native-vector-icons/Entypo";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from '@react-navigation/native';
import { COLORS } from '../../src/styles/colors';
import eventvisitorsStyle from '../eventvisitors/eventvisitorsStyle';
// import {
//     createDrawerNavigator,
//     DrawerContentScrollView,
//     DrawerItemList,
//     DrawerItem,
//   } from '@react-navigation/drawer';
// import multipletickets from '../multipletickets/multipletickets'

class multipletickets extends React.Component {

    constructor(props) {
        super();
        this.state = {
        };
    }
    render() {
        return (
            <>
                <Appbar.Header style={multipleticketsStyle.header} >
                    <Appbar.BackAction />
                    <Appbar.Content title="Metallica Concert" subtitle={'18.04.2021  •  20:00  •  Baghdad Mall'} />
                    <Icon type="EvilIcons" style={multipleticketsStyle.iconColor} name="search" />

                </Appbar.Header>
                <ScrollView style={globalStyle.lightBackground}>
                    <View style={multipleticketsStyle.mainContainer}>


                        {/* <Card style={multipleticketsStyle.card} transparent>
                            <CardItem>
                                <Body> */}
                        <View style={multipleticketsStyle.lowerBox}>
                            <Text style={multipleticketsStyle.lowerBoxText}>Tim Lipa</Text>
                        </View>
                        <Card style={multipleticketsStyle.card}>
                            <CardItem style={multipleticketsStyle.cardItem}>
                                <Body style={multipleticketsStyle.cardBody}>
                                    <View style={multipleticketsStyle.row}>
                                        <View style={multipleticketsStyle.col8}>
                                            <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
                                                <View>
                                                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                                        <IconFontAwesome style={{ fontSize: 14, color: COLORS.gray, marginTop: 24, marginRight: 8 }} name='user' ></IconFontAwesome>
                                                        <Text style={multipleticketsStyle.seat}>Ibraheem Hassan </Text>
                                                    </View>
                                                   
                                                    <View style={{ flexDirection: "row", alignItems: 'center', marginTop: 7 }}>
                                                        <IconMaterialCommunityIcons style={{ fontSize: 14, color: COLORS.gray, marginTop: 4, marginRight: 8 }} name='ticket-confirmation'></IconMaterialCommunityIcons>
                                                        <Text style={multipleticketsStyle.captionText} note>Standard</Text>
                                                    </View>
                                                </View>
                                                <View>
                                                    <IconFeather style={{ fontSize: 24, color: COLORS.gray, marginTop: 16, marginRight: 16 }} name='check'></IconFeather>
                                                </View>
                                            </View>

                                        </View>
                                        <View style={multipleticketsStyle.col2}>
                                            <View style={multipleticketsStyle.innerRow}>
                                                <Image
                                                    style={multipleticketsStyle.qr}
                                                    source={require('../../src/images/qr.png')}
                                                />
                                                <Image
                                                    style={multipleticketsStyle.dtted}
                                                    source={require('../../src/images/dotted.png')}
                                                />
                                                <View style={multipleticketsStyle.rightDotImg}></View>
                                                <View style={multipleticketsStyle.leftDotImg}></View>
                                            </View>
                                        </View>
                                    </View>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card style={multipleticketsStyle.card}>
                            <CardItem style={multipleticketsStyle.cardItem}>
                                <Body style={multipleticketsStyle.cardBody}>
                                    <View style={multipleticketsStyle.row}>
                                        <View style={multipleticketsStyle.col8}>
                                            <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
                                                <View>
                                                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                                        <IconFontAwesome style={{ fontSize: 14, color: COLORS.gray, marginTop: 24, marginRight: 8 }} name='user' ></IconFontAwesome>
                                                        <Text style={multipleticketsStyle.seat}>Ali Alshaer </Text>
                                                        <Text style={multipleticketsStyle.banned}>(Banned) </Text>
                                                    </View>
                                                   
                                                    <View style={{ flexDirection: "row", alignItems: 'center', marginTop: 7 }}>
                                                        <IconMaterialCommunityIcons style={{ fontSize: 14, color: COLORS.gray, marginTop: 4, marginRight: 8 }} name='ticket-confirmation'></IconMaterialCommunityIcons>
                                                        <Text style={multipleticketsStyle.captionText} note>Standard</Text>
                                                    </View>
                                                </View>
                                                <View>
                                                    <IconFeather style={{ fontSize: 24, color: COLORS.gray, marginTop: 16, marginRight: 16 }} name='check'></IconFeather>
                                                </View>
                                            </View>

                                        </View>
                                        <View style={multipleticketsStyle.col2}>
                                            <View style={multipleticketsStyle.innerRow}>
                                                <Image
                                                    style={multipleticketsStyle.qr}
                                                    source={require('../../src/images/qr.png')}
                                                />
                                                <Image
                                                    style={multipleticketsStyle.dtted}
                                                    source={require('../../src/images/dotted.png')}
                                                />
                                                <View style={multipleticketsStyle.rightDotImg}></View>
                                                <View style={multipleticketsStyle.leftDotImg}></View>
                                            </View>
                                        </View>
                                    </View>
                                </Body>
                            </CardItem>
                        </Card>
                        <View style={multipleticketsStyle.notebox}>
                            <Text style={multipleticketsStyle.note}>
                            * Place the QR tickets in safly, Ticket won’t be valid once QR is scanned, by any person. 
                            </Text>
                        </View>
                    </View>
                </ScrollView>

            </>
        )
    }
}

export default multipletickets
