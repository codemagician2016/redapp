
import * as React from 'react';
import { Text, TouchableOpacity, View, ScrollView, Pressable, Image } from 'react-native';
import { Accordion, Icon } from 'native-base';
import globalStyle from '../../src/styles/globalStyle';
import faqStyle from '../faq/faqStyle';
import { TextInput, Button, Appbar, Switch, List } from 'react-native-paper';
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEntypo from "react-native-vector-icons/Entypo";
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import { Bubbles } from 'react-native-loader';
import axios from 'axios'
import config from '../../config'
import Toast from 'react-native-toast-message';

const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

class Faq extends React.Component {
    constructor(props) {
        super();
        this.state = {
            faqData: [],
            isLoading: false,
            dataArray: [
                { title: "First Element", content: "Lorem ipsum dolor sit amet" },
                { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
                { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
            ]
        }
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            this.getFaqs()
        })
        this.getFaqs()
    }

    async getFaqs() {
        try {
            this.setState({ isLoading: true })
            let response = await axios.get(config.apiUrl + `faq`)
            let res = response.data ? response.data : {}
            this.setState({ isLoading: false })
            if (res.success) {
                this.setState({ faqData: res.data ? res.data : [] })
            }
        }
        catch (err) {
            this.setState({ isLoading: false })
            console.log(err.message)
        }
    }

    render() {

        // const _goBack = () => console.log('Went back');
        return (
            <>
                <Appbar.Header style={faqStyle.header}>
                    <Appbar.BackAction onPress={() => {
                        this.props.navigation.goBack()
                    }} />
                    <Appbar.Content title="Supports & FAQs" />
                </Appbar.Header>
                {
                    this.state.isLoading ?
                        <View style={{ marginTop: "50%", alignItems: 'center' }}>
                            <Bubbles size={12} color="#564ADC" />
                            <Text style={{ marginTop: 8 }}>Loading...</Text>
                        </View>
                        :

                        this.faqData?.length <= 0 && !this.isLoading ?
                            <View style={{ marginTop: "50%", alignItems: 'center' }}>
                                <Text>Faq Not Found!</Text>
                            </View>
                            :
                            <ScrollView style={globalStyle.grayBackground}>

                                <View style={faqStyle.mainContainer}>
                                    {
                                        this.state.faqData.map((_, index) => {
                                            return (
                                                <View key={index.toString()}>
                                                    <View style={{ marginTop: '5%' }} >
                                                        <Text style={faqStyle.headeing}>{_?.category}</Text>
                                                    </View>
                                                    {
                                                        _.faqs.map((data, i) => {
                                                            return (
                                                                <Collapse style={faqStyle.collapse} key={i}>
                                                                    <CollapseHeader style={faqStyle.collapsheader}>
                                                                        <View style={faqStyle.headerbox}>
                                                                            <Text>{data?.question}</Text>
                                                                            <Icon icon style={{ fontSize: 20, marginLeft: 0, color: '#817C8B' }} name='chevron-down' />
                                                                        </View>
                                                                    </CollapseHeader>
                                                                    <CollapseBody style={faqStyle.collapsbody}>

                                                                        <Text style={faqStyle.collapstext}>{data?.answer}</Text>
                                                                    </CollapseBody>
                                                                </Collapse>
                                                            )
                                                        })
                                                    }

                                                </View>
                                            )
                                        })
                                    }






                                    {/* Accordion List  */}
                                    <AccordionList
                                        list={this.state.list}
                                        header={this._head}
                                        body={this._body}
                                        keyExtractor={item => item.key}
                                    />
                                </View>
                            </ScrollView>
                }

            </>
        )
    }
}

export default Faq