
import * as React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import eventvisitorsStyle from './eventvisitorsStyle';
import {  Appbar, Headline } from 'react-native-paper';

import { Button,Card, CardItem, Icon, Right,Thumbnail,Footer, FooterTab,Tab, Tabs, } from 'native-base';
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEvilIcons from "react-native-vector-icons/EvilIcons";
import IconFeather from "react-native-vector-icons/Feather";
import { NavigationContainer } from '@react-navigation/native';
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
// import {
//     createDrawerNavigator,
//     DrawerContentScrollView,
//     DrawerItemList,
//     DrawerItem,
//   } from '@react-navigation/drawer';
// import Home from '../home/home'

class Eventvisitors extends React.Component {

    constructor(props) {
        super();
        this.state = {

        };
    }

    render() {

        return (
            <>
                <Appbar.Header style={eventvisitorsStyle.header}>
                    {/* <Appbar.BackAction  /> */}
                    {/* <Appbar.Action IconEntypo={menu} /> */}
                    <Icon type="Entypo" style={eventvisitorsStyle.iconColor} name="menu" />
                    <Appbar.Content color={'#fff'} title="" subtitle={''} />
                    <Icon type="EvilIcons" style={eventvisitorsStyle.iconColor} name="search" />

                </Appbar.Header>
                <ImageHeaderScrollView style={{ resizeMode: 'contain' }}
                    maxHeight={222}
                    minHeight={58}
                    headerImage={require("../../src/images/ad.png")
                    }
                    renderForeground={() => (
                        <View style={{ position: 'absolute', bottom: 19, left: 16 }} >
                            <Text style={eventvisitorsStyle.bannerHeading}>Metallica Concert</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={eventvisitorsStyle.bannerText}>18.04.2021  •  20:00  •</Text>
                                <Text style={eventvisitorsStyle.bannerBlueText}> Baghdad Mall</Text>
                            </View>
                        </View>
                    )}
                >
                    <View style={{ height: 800 }}>
                        {/* <Appbar.Header style={eventvisitorsStyle.header}>
                            <Appbar.BackAction color={'#fff'} />
                            <Appbar.Content color={'#fff'} style={{ color: '#fff', zIndex: 999 }} title="Scan QR" subtitle="" />
                        </Appbar.Header> */}
                        <TriggeringView onHide={() => console.log("text hidden")}>
                            <View style={eventvisitorsStyle.mainContainer}>
                                <View style={eventvisitorsStyle.lowerBox}>
                                    <Text style={eventvisitorsStyle.lowerBoxText}>Visitors</Text>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Text style={eventvisitorsStyle.lowerBoxText}>125</Text>
                                        <Text style={eventvisitorsStyle.lowerText}>/225</Text>
                                    </View>
                                </View>
                                <Card style={eventvisitorsStyle.list}>
                                    <CardItem avatar>
                                    <Thumbnail source={require('../../src/images/visitors.png')} />
                                    {/* <Image style={eventvisitorsStyle.eventImg} source={require('../../src/images/event-1.png')} /> */}
                                      <View>
                                          <View style={eventvisitorsStyle.textrow}>
                                          <Text style={eventvisitorsStyle.nametext}>Tim Lipa</Text>
                                          <Text style={eventvisitorsStyle.Banndtext}>(Banned)</Text>
                                          </View>
                                          <Text style={eventvisitorsStyle.tickettext}>4 Tickets</Text>
                                      </View>
                                        <Right>
                                            <IconFeather size={30} name="check" ></IconFeather>
                                        </Right>
                                    </CardItem>
                                </Card> 
                                <Card style={eventvisitorsStyle.list}>
                                    <CardItem avatar>
                                    <Thumbnail source={require('../../src/images/visitors.png')} />
                                    {/* <Image style={eventvisitorsStyle.eventImg} source={require('../../src/images/event-1.png')} /> */}
                                      <View>
                                          <View style={eventvisitorsStyle.textrow}>
                                          <Text style={eventvisitorsStyle.nametext}>Tim Lipa</Text>
                                          <Text style={eventvisitorsStyle.Banndtext}>(Banned)</Text>
                                          </View>
                                          <Text style={eventvisitorsStyle.tickettext}>4 Tickets</Text>
                                      </View>
                                        <Right>
                                            <IconFeather size={30} name="check" ></IconFeather>
                                        </Right>
                                    </CardItem>
                                </Card> 
                                <Card style={eventvisitorsStyle.list}>
                                    <CardItem avatar style={eventvisitorsStyle.listitem}>
                                    <Thumbnail source={require('../../src/images/visitors.png')} />
                                    {/* <Image style={eventvisitorsStyle.eventImg} source={require('../../src/images/event-1.png')} /> */}
                                      <View>
                                          <View style={eventvisitorsStyle.textrow}>
                                          <Text style={eventvisitorsStyle.nametext}>Tim Lipa</Text>
                                          <Text style={eventvisitorsStyle.Banndtext}>(Banned)</Text>
                                          </View>
                                          <Text style={eventvisitorsStyle.tickettext}>4 Tickets</Text>
                                      </View>
                                        <Right>
                                            {/* <IconFeather size={30} name="check" ></IconFeather> */}
                                            <IconFeather size={30} style={eventvisitorsStyle.check} name="check" ></IconFeather>
                                        </Right>
                                    </CardItem>
                                </Card> 
                            </View>
                        </TriggeringView>
                    </View>
                </ImageHeaderScrollView>
                <Footer>
          <FooterTab>
          <Button iconLeft style={eventvisitorsStyle.footerbtn}>
              <Icon style={eventvisitorsStyle.btnIcon} size={16} name="scan" />
              <Text style={eventvisitorsStyle.btnText}>Scan</Text>
            </Button>
          </FooterTab>
        </Footer>


            </>
        )
    }
}

export default Eventvisitors
