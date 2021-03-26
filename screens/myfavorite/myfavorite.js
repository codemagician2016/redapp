
import * as React from 'react';
import { View, ScrollView, Text, Image, ActivityIndicator, Pressable } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import myfavoriteStyle from './myfavoriteStyle';
import { Button, Appbar, Headline } from 'react-native-paper';
import { SliderBox } from "react-native-image-slider-box";
import { Card, CardItem, Body, Form, Picker, Icon } from 'native-base';
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEntypo from "react-native-vector-icons/Entypo";
import { NavigationContainer } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import axios from 'axios'
import config from '../../config'
import Toast from 'react-native-toast-message';
import moment from 'moment'
import { COLORS } from '../../src/styles/colors';
import { DrawerActions } from '@react-navigation/native';
class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {
            selected: "key1",
            outGoingEvents: [],
            previousEvents: [],
            isLoading: false
        };
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            this.getFavorite()
        })
        this.getFavorite()
    }

    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    async getFavorite() {
        try {
            this.setState({ isLoading: true })
            let response = await axios.get(config.apiUrl + "favorite")
            let res = response.data ? response.data : {}
            this.setState({ isLoading: false })
            if (res.success) {
                this.setState({ previousEvents: res.data.previousEvents })
                this.setState({ outGoingEvents: res.data.outGoingEvents })
            }
            else {
                this.setState({ previousEvents: [] })
                this.setState({ outGoingEvents: [] })
            }
        }
        catch (err) {
            this.setState({ isLoading: false })
            console.warn(err.message)
            // Toast.show({
            //     text1: err.message,
            //     type: 'error'
            // });
        }
    }

    render() {

        return (
            <>
                <Appbar.Header style={myfavoriteStyle.header}>
                <Icon type="Entypo" name="menu" style={{ color: COLORS.darkGray }}
                        onPress={() => {
                            this.props.navigation.dispatch(DrawerActions.toggleDrawer())
                        }
                        }
                    />
                    {/* <Appbar.BackAction
                        onPress={() => this.props.navigation.goBack()}
                    /> */}
                    {/* <Appbar.Action IconEntypo={menu} /> */}
                    {/* <Icon type="Entypo" style={{ color: COLORS.black, marginLeft: 16, fontSize: 30 }} name="menu"/> */}
                    <Appbar.Content titleStyle={{fontSize:13,color:COLORS.darkGray,fontWeight:'700'}} title="My Favorite" />

                </Appbar.Header>
                {
                    this.state.isLoading ?
                        <View style={{ alignItems: 'center', marginTop: '40%' }}>
                            <ActivityIndicator size="large" color="#0000ff" />
                            <Text>Loading...</Text>
                        </View>
                        :
                        this.state.previousEvents?.length <= 0 && this.state.outGoingEvents?.length <= 0 && !this.state.isLoading
                            ?
                            <View style={{ alignItems: 'center', marginTop: '40%' }}>
                                <Text>No Favorite Found!</Text>
                            </View>
                            :
                            <ScrollView style={globalStyle.lightBackground, { marginHorizontal: 0 }}>
                                <View style={myfavoriteStyle.mainContainer}>

                                    {/* <Card style={myfavoriteStyle.card}>

                                        <CardItem>
                                            <Body> */}
                                                <View style={myfavoriteStyle.lowerBox}>
                                                    <Text style={myfavoriteStyle.lowerBoxText}>Ongoing</Text>
                                                </View>
                                                <View style={myfavoriteStyle.row}>
                                                    {
                                                        this.state.outGoingEvents.map((_, index) => {
                                                            return (
                                                                <View style={myfavoriteStyle.col6}
                                                                key={index.toString()}>

                                                                    <Pressable key={index.toString()}
                                                                        onPress={() => this.props.navigation.navigate('singleAd', { id: _._id })} >
                                                                        <Card style={myfavoriteStyle.eventCard}>
                                                                            {/* {
                                                                                _.totalPurchasedTicket >= _.totalTickets ?
                                                                                    <View style={myfavoriteStyle.eventBadge}>
                                                                                        <Text style={myfavoriteStyle.badgeText}>SoldOut</Text>
                                                                                    </View>
                                                                                    :
                                                                                    <View style={myfavoriteStyle.eventBadgeRed}>
                                                                                        <Text style={myfavoriteStyle.badgeText}>
                                                                                            {_.totalTickets - _.totalPurchasedTicket}Tickets left</Text>
                                                                                    </View>
                                                                            } */}
                                                                            <CardItem cardBody
                                                                            >
                                                                                <Image style={myfavoriteStyle.eventImg} source={{ uri: `${config.apiUrl}public/event/${_.id}/${_.eventImages[0]}` }} />
                                                                            </CardItem>
                                                                            <CardItem style={myfavoriteStyle.eventCard}>
                                                                                <Body>
                                                                                   <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
                                                                                   <Headline style={myfavoriteStyle.eventCardHeading}
                                                                                        onPress={() => this.props.navigation.navigate('singleAd')}
                                                                                    >{_?.title}</Headline>
                                                                                    {
                                                                                        _.isStar ?
                                                                                            <Image style={myfavoriteStyle.starImg} source={require('../../src/images/star.png')} />
                                                                                            : null
                                                                                    }
                                                                                   </View>
                                                                                    <Text style={myfavoriteStyle.eventCardText}>{moment(_?.event?.date).format('DD/MM/YYYY')}  |  {_.time?.hours}:{_.time?.minutes}</Text>
                                                                                    <Text style={myfavoriteStyle.eventCardLike}>{_.city} </Text>
                                                                                </Body>
                                                                            </CardItem>
                                                                        </Card>
                                                                    </Pressable>
                                                                </View>
                                                            )
                                                        })
                                                    }
                                                </View>
                                                <View style={myfavoriteStyle.lowerBox}>
                                                    <Text style={myfavoriteStyle.lowerBoxText}>Previous</Text>
                                                </View>
                                                <View style={myfavoriteStyle.row}>
                                                    {
                                                        this.state.previousEvents.map((_, index) => {
                                                            return (
                                                                <View style={myfavoriteStyle.col6}
                                                                 key={index.toString()}>

                                                                    <Pressable key={index.toString()}
                                                                        onPress={() => this.props.navigation.navigate('singleAd', { id: _._id })}>
                                                                        <Card style={myfavoriteStyle.eventCard}>
                                                                            {
                                                                                _.totalPurchasedTicket >= _.totalTickets ?
                                                                                    <View style={myfavoriteStyle.eventBadge}>
                                                                                        <Text style={myfavoriteStyle.badgeText}>SoldOut</Text>
                                                                                    </View>
                                                                                    :
                                                                                    <View style={myfavoriteStyle.eventBadgeRed}>
                                                                                        <Text style={myfavoriteStyle.badgeText}>
                                                                                            {_.totalTickets - _.totalPurchasedTicket}Tickets left</Text>
                                                                                    </View>
                                                                            }
                                                                            <CardItem cardBody
                                                                            >
                                                                                <Image style={myfavoriteStyle.eventImg} source={{ uri: `${config.apiUrl}public/event/${_.id}/${_.eventImages[0]}` }} />
                                                                            </CardItem>
                                                                            <CardItem style={myfavoriteStyle.eventCard}>
                                                                                <Body>
                                                                                    <Headline style={myfavoriteStyle.eventCardHeading}
                                                                                        onPress={() => this.props.navigation.navigate('singleAd')}
                                                                                    >{_?.title}</Headline>
                                                                                    {
                                                                                        _.isStar ?
                                                                                            <Image style={myfavoriteStyle.starImg} source={require('../../src/images/star.png')} />
                                                                                            : null
                                                                                    }
                                                                                    <Text style={myfavoriteStyle.eventCardText}>{moment(_?.event?.date).format('DD/MM/YYYY')}  |  {_.time?.hours}:{_.time?.minutes}</Text>
                                                                                    <Text style={myfavoriteStyle.eventCardLike}>{_.city} </Text>
                                                                                </Body>
                                                                            </CardItem>
                                                                        </Card>
                                                                    </Pressable>


                                                                </View>
                                                            )
                                                        })
                                                    }
                                                </View>
                                            {/* </Body>
                                        </CardItem>
                                    </Card> */}
                                </View>
                            </ScrollView>


                }

            </>
        )
    }
}

export default Home
