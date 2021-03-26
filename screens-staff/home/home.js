
import * as React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import homeStyle from './homeStyle';
import { Button, Appbar, Headline } from 'react-native-paper';

import { Card, CardItem, Body, Form, Picker, Icon } from 'native-base';
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEvilIcons from "react-native-vector-icons/EvilIcons";
import IconEntypo from "react-native-vector-icons/Entypo";
import { NavigationContainer } from '@react-navigation/native';
// import {
//     createDrawerNavigator,
//     DrawerContentScrollView,
//     DrawerItemList,
//     DrawerItem,
//   } from '@react-navigation/drawer';
// import Home from '../home/home'

class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {
            images: [
                require('../../src/images/slider-1.png'),
                "https://source.unsplash.com/1024x768/?nature",
                "https://source.unsplash.com/1024x768/?water",
                "https://source.unsplash.com/1024x768/?girl",
                "https://source.unsplash.com/1024x768/?tree", // Network image
                // Local image
            ],
            selected: "key1"
        };
    }

    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    render() {

        return (
            <>
                <Appbar.Header style={homeStyle.header}>
                    {/* <Appbar.BackAction  /> */}
                    {/* <Appbar.Action IconEntypo={menu} /> */}
                    <Icon type="Entypo" style={homeStyle.iconColor} name="menu" />
                    <Appbar.Content title="Events" subtitle={''} />
                    <View style={homeStyle.headerRow}>
                        <Icon type="EvilIcons" style={homeStyle.iconColor} name="search" />
                        <Icon type="AntDesign" style={homeStyle.iconColor} name="plus" />
                    </View>

                </Appbar.Header>
                <ScrollView style={globalStyle.lightBackground}>
                    <View style={homeStyle.mainContainer}>
                        
                       
                        <Card style={homeStyle.card}>
                            <CardItem>
                                <Body>
                                <View style={homeStyle.lowerBox}>
                                        <Text style={homeStyle.lowerBoxText}>Ongoing</Text>
                                    </View>
                                    <View style={homeStyle.row}>
                                        <View style={homeStyle.col6}
                                            onPress={() => this.props.navigation.navigate('singleAd')}>
                                            <Card style={homeStyle.eventCard}>
                                                
                                                <CardItem cardBody
                                                >
                                                    <Image style={homeStyle.eventImg} source={require('../../src/images/event-1.png')} />
                                                </CardItem>
                                                <CardItem style={homeStyle.eventCard}>
                                                    <Body>
                                                        <Headline style={homeStyle.eventCardHeading}
                                                            onPress={() => this.props.navigation.navigate('singleAd')}
                                                        >Metallica</Headline>
                                                        <Text style={homeStyle.eventCardText}>18.04.2021  |  19:00 - 22:00 </Text>
                                                        <Text style={homeStyle.eventCardLike}>Baghdad Mall </Text>
                                                    </Body>
                                                </CardItem>
                                            </Card>
                                        </View>
                                        <View style={homeStyle.col6}>
                                            <Card style={homeStyle.eventCard}>
                                                <CardItem cardBody >
                                                    <Image style={homeStyle.eventImg} source={require('../../src/images/event-1.png')} />
                                                </CardItem>
                                                <CardItem style={homeStyle.eventCard}>
                                                    <Body>
                                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1, width: '100%' }}>
                                                            <Headline style={homeStyle.eventCardHeading}>Metallica</Headline>
                                                        </View>
                                                        <Text style={homeStyle.eventCardText}>18.04.2021  |  19:00 - 22:00 </Text>
                                                        <Text style={homeStyle.eventCardLike}>Baghdad Mall </Text>
                                                    </Body>
                                                </CardItem>
                                            </Card>
                                        </View>
                                      
                                        <View style={homeStyle.col6}>
                                            <Card style={homeStyle.eventCard}>

                                                <CardItem cardBody >
                                                    <Image style={homeStyle.eventImg} source={require('../../src/images/event-1.png')} />
                                                </CardItem>
                                                <CardItem style={homeStyle.eventCard}>
                                                    <Body>
                                                        <Headline style={homeStyle.eventCardHeading}>Metallica</Headline>
                                                        <Text style={homeStyle.eventCardText}>18.04.2021  |  19:00 - 22:00 </Text>
                                                        <Text style={homeStyle.eventCardLike}>Baghdad Mall </Text>
                                                    </Body>
                                                </CardItem>
                                            </Card>
                                        </View>
                                        <View style={homeStyle.col6}>
                                            <Card style={homeStyle.eventCard}>

                                                <CardItem cardBody >
                                                    <Image style={homeStyle.eventImg} source={require('../../src/images/event-1.png')} />
                                                </CardItem>
                                                <CardItem style={homeStyle.eventCard}>
                                                    <Body>
                                                        <Headline style={homeStyle.eventCardHeading}>Metallica</Headline>
                                                        <Text style={homeStyle.eventCardText}>18.04.2021  |  19:00 - 22:00 </Text>
                                                        <Text style={homeStyle.eventCardLike}>Baghdad Mall </Text>
                                                    </Body>
                                                </CardItem>
                                            </Card>
                                        </View>

                                    </View>
                               
                                <View style={homeStyle.lowerBox}>
                                        <Text style={homeStyle.lowerBoxText}>Previous</Text>
                                    </View>
                                    <View style={homeStyle.row}>
                                        <View style={homeStyle.col6}
                                            onPress={() => this.props.navigation.navigate('singleAd')}>
                                            <Card style={homeStyle.eventCard}>
                                                
                                                <CardItem cardBody
                                                >
                                                    <Image style={homeStyle.eventImg} source={require('../../src/images/event-1.png')} />
                                                </CardItem>
                                                <CardItem style={homeStyle.eventCard}>
                                                    <Body>
                                                        <Headline style={homeStyle.eventCardHeading}
                                                            onPress={() => this.props.navigation.navigate('singleAd')}
                                                        >Metallica</Headline>
                                                        <Text style={homeStyle.eventCardText}>18.04.2021  |  19:00 - 22:00 </Text>
                                                        <Text style={homeStyle.eventCardLike}>Baghdad Mall </Text>
                                                    </Body>
                                                </CardItem>
                                            </Card>
                                        </View>
                                        <View style={homeStyle.col6}>
                                            <Card style={homeStyle.eventCard}>
                                                <CardItem cardBody >
                                                    <Image style={homeStyle.eventImg} source={require('../../src/images/event-1.png')} />
                                                </CardItem>
                                                <CardItem style={homeStyle.eventCard}>
                                                    <Body>
                                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1, width: '100%' }}>
                                                            <Headline style={homeStyle.eventCardHeading}>Metallica</Headline>
                                                        </View>
                                                        <Text style={homeStyle.eventCardText}>18.04.2021  |  19:00 - 22:00 </Text>
                                                        <Text style={homeStyle.eventCardLike}>Baghdad Mall </Text>
                                                    </Body>
                                                </CardItem>
                                            </Card>
                                        </View>
                                      
                                        <View style={homeStyle.col6}>
                                            <Card style={homeStyle.eventCard}>

                                                <CardItem cardBody >
                                                    <Image style={homeStyle.eventImg} source={require('../../src/images/event-1.png')} />
                                                </CardItem>
                                                <CardItem style={homeStyle.eventCard}>
                                                    <Body>
                                                        <Headline style={homeStyle.eventCardHeading}>Metallica</Headline>
                                                        <Text style={homeStyle.eventCardText}>18.04.2021  |  19:00 - 22:00 </Text>
                                                        <Text style={homeStyle.eventCardLike}>Baghdad Mall </Text>
                                                    </Body>
                                                </CardItem>
                                            </Card>
                                        </View>
                                        <View style={homeStyle.col6}>
                                            <Card style={homeStyle.eventCard}>

                                                <CardItem cardBody >
                                                    <Image style={homeStyle.eventImg} source={require('../../src/images/event-1.png')} />
                                                </CardItem>
                                                <CardItem style={homeStyle.eventCard}>
                                                    <Body>
                                                        <Headline style={homeStyle.eventCardHeading}>Metallica</Headline>
                                                        <Text style={homeStyle.eventCardText}>18.04.2021  |  19:00 - 22:00 </Text>
                                                        <Text style={homeStyle.eventCardLike}>Baghdad Mall </Text>
                                                    </Body>
                                                </CardItem>
                                            </Card>
                                        </View>

                                    </View>
                               
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                </ScrollView>

            </>
        )
    }
}

export default Home
