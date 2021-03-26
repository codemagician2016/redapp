
import * as React from 'react';
import { View, ScrollView, Text, TextInput, Alert, ActivityIndicator, Pressable } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import notificationstyle from './notificationstyle';
import { Button, Appbar, Headline } from 'react-native-paper';
import { SliderBox } from "react-native-image-slider-box";
import { Card, CardItem, Body, Form, Header, Icon, Item, Input, Thumbnail, Right,Left,Title } from 'native-base';
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IconFeather from "react-native-vector-icons/Feather";
import IconEntypo from "react-native-vector-icons/Entypo";
import { COLORS } from '../../src/styles/colors';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import messaging from '@react-native-firebase/messaging';
import axios from 'axios'
import config from '../../config'
import Toast from 'react-native-toast-message';
import { Bubbles } from 'react-native-loader';

class Notification extends React.Component {
    _menu = null;

    setMenuRef = ref => {
        this._menu = ref;
    };

    hideMenu = () => {
        this._menu.hide();
    };

    showMenu = () => {
        this._menu.show();
    };
    constructor(props) {
        super();
        this.state = {
            notification: [],
            isLoading: false
        };
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            this.getNotification()
        })
        this.getNotification()
        // messaging().setBackgroundMessageHandler(async remoteMessage => {
        //     console.log('Message handled in the background!', remoteMessage);
        // });
        // messaging().onMessage(async remoteMessage => {
        //     Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
        // });
    }

    async getNotification() {
        try {
            this.setState({ isLoading: true })
            let response = await axios.get(config.apiUrl + `notification`)
            let res = response.data ? response.data : {}
            this.setState({ isLoading: false })
            if (res.success) {
                this.setState({ notification: res.data })
            }
            else {
                this.setState({ notification: [] })
            }
        }
        catch (err) {
            this.setState({ isLoading: false })
            Toast.show({
                text1: err.message,
                type: 'error'
            });
        }
    }


    render() {

        return (
            <>
                {/* <Appbar.Header style={notificationstyle.header}>
                    <Appbar.Content title="Notifications" subtitle={''} />
                    <Icon type="Entypo" style={notificationstyle.iconColor} name="plus" />
                </Appbar.Header> */}
                <Header style={notificationstyle.header}>
                    <Left>
                        <Button style={{ color: '#4B5E67' }} transparent
                            onPress={() => this.props.navigation.goBack()}>
                            <Icon style={{ color: '#4B5E67', fontSize: 24 }} name='arrow-back' />
                        </Button>
                    </Left>
                    <Body style={{}}>
                        <Title style={notificationstyle.headerTitle}>Notifications</Title>
                       
                    </Body>
                    <Right>
                        {/* <Icon type="Ionicons" style={{ marginRight: 8, color: '#90CAFA' }} name="print"/> */}
                    </Right>
                </Header>
                {
                    this.state.isLoading ?
                        <View style={{ marginTop: "50%", alignItems: 'center' }}>
                            <Bubbles size={12} color="#564ADC" />
                            <Text style={{ marginTop: 8 }}>Loading...</Text>
                        </View>
                        :
                        this.state.notification.length <= 0 && !this.state.isLoading
                            ?
                            <View style={{ alignItems: 'center', marginTop: '40%' }}>
                                {/* <ActivityIndicator size="large" color="#0000ff" /> */}
                                <Text>Notification Not Found!</Text>
                            </View>
                            :
                            <ScrollView style={globalStyle.whiteBackground}>
                                <View style={notificationstyle.mainContainer}>
                                    <View style={notificationstyle.lowerBox}>
                                        <Text style={notificationstyle.lowerBoxText}>New</Text>
                                        {/* <Text style={notificationstyle.lowerBoxText}>8:40 PM</Text> */}

                                    </View>
                                    {
                                        this.state.notification.map((_, index) => {
                                            return (
                                                <Pressable onPress={()=>{
                                                    this.props.navigation.navigate('notificationAddress',{id:_._id})
                                                }}  key={index}>
                                                    <Card style={notificationstyle.list} transparent>
                                                        <CardItem avatar>
                                                            {
                                                                _.images.length > 0 ?
                                                                    <Thumbnail source={{ uri: `${config.apiUrl}public/notification/${_.id}/${_?.images[0]}` }} />
                                                                    :
                                                                    <Thumbnail source={require('../../src/images/thumbnail.png')} />
                                                            }
                                                            <View>
                                                                <View style={notificationstyle.textrow}>
                                                                    <View style={notificationstyle.textcol}>
                                                                        <Text style={notificationstyle.nametext}>
                                                                            {_.description}
                                                                        </Text>
                                                                        <Text style={notificationstyle.tickettext}>
                                                                            {new Date(_.created).getHours()}:{new Date(_.created).getMinutes()}
                                                                            {new Date(_.created).getHours() > 12 ? " PM" : " AM"}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                        </CardItem>
                                                    </Card>
                                                </Pressable>
                                            )
                                        })
                                    }




                                </View>
                            </ScrollView>
                }

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                </View>
            </>
        )
    }
}

export default Notification
