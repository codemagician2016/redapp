
import * as React from 'react';
import { View, ScrollView, Text, Image, ActivityIndicator, Pressable } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import singleNotificationAddressStyle from './singleNotificationAddressStyle';
import { Button, Appbar, Headline } from 'react-native-paper';
import { Card, CardItem, Body, Form, Picker, Icon, Tab, Tabs, Header } from 'native-base';
import IconEntypo from "react-native-vector-icons/Entypo";
import { NavigationContainer } from '@react-navigation/native';
import { COLORS } from '../../src/styles/colors';
import { SliderBox } from "react-native-image-slider-box";
import Toast from 'react-native-toast-message';
import axios from 'axios'
import config from '../../config'
import { Bubbles } from 'react-native-loader';


class singleNotificationAddress extends React.Component {

    constructor(props) {
        super();
        this.state = {
            notification: {},
            isLoading: false,
            images: [
                require("../../src/images/thumbnail.png")
            ]
        };
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            this.getNotificationDetail()
        });
        this.getNotificationDetail()
    }

    async getNotificationDetail() {
        try {
            this.setState({ isLoading: true })
            let response = await axios.get(config.apiUrl + `notification/${this.props.route.params.id}`)
            let res = response.data ? response.data : {}
            this.setState({ isLoading: false })
            if (res.success) {
                this.setState({ notification: res.data ? res.data : {} })
                let images = []
                if (this.state.notification.images.length > 0) {
                    res.data.images.map(_ => {
                        images.push(`${config.apiUrl}public/notification/${res.data.id}/${_}`)
                    })
                }
                else {
                    images = [
                        require("../../src/images/thumbnail.png")
                    ]
                }
                this.setState({ images: images })
            }
            else {
                this.setState({ notification: {} })
            }
        }
        catch (err) {
            this.setState({ isLoading: false })
        }
    }

    render() {
        return (
            <>
                <Appbar.Header transparent style={singleNotificationAddressStyle.header} >
                    <Appbar.BackAction
                        onPress={() => {
                            this.props.navigation.goBack()
                        }} />
                    <Appbar.Content title="Single Notification" />
                  
                </Appbar.Header>
                {
                    this.state.isLoading ?
                        <View style={{ marginTop: "50%", alignItems: 'center' }}>
                            <Bubbles size={12} color="#564ADC" />
                            <Text style={{ marginTop: 8 }}>Loading...</Text>
                        </View>
                        :
                        <ScrollView style={globalStyle.lightBackground}>
                            <View style={singleNotificationAddressStyle.mainContainer}>
                                <SliderBox dotStyle={{

                                    marginBottom: 30
                                }}
                                    style={singleNotificationAddressStyle.slider} images={this.state.images} />

                                <View style={singleNotificationAddressStyle.lowerBox}>
                                    <Text style={singleNotificationAddressStyle.lowerBoxText}>{this.state.notification?.title}</Text>
                                    <Text style={singleNotificationAddressStyle.lowerText}>
                                        {new Date(this.state.notification.created).getHours()}:{new Date(this.state.notification.created).getMinutes()}
                                        {new Date(this.state.notification.created).getHours() >= 12 ? " PM" : " AM"}
                                    </Text>
                                </View>
                                <View style={singleNotificationAddressStyle.textbox}>
                                    <Text style={singleNotificationAddressStyle.text}>
                                        {this.state.notification?.description}
                                    </Text>
                                </View>
                                <View style={{ marginHorizontal: 13, marginTop: 16 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icon style={{ fontSize: 15, color: COLORS.black }} name="location"></Icon>
                                        <Text style={singleNotificationAddressStyle.text}>
                                            {this.state.notification?.eventAddress}
                                        </Text>
                                    </View>
                                </View>
                                {/* <Image style={singleNotificationAddressStyle.map} source={require('../../src/images/map.png')} /> */}
                            </View>
                        </ScrollView>
                }



            </>
        )
    }
}

export default singleNotificationAddress
